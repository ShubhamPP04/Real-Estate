// Main entry point - imports all modules and initializes the application
import { SliderModule } from './modules/slider.js';
import { NavigationModule } from './modules/navigation.js';
import { ScrollModule } from './modules/scroll.js';
import { AnimationModule } from './modules/animation.js';
import { ContactModule } from './modules/contact.js';
import { InteractionModule } from './modules/interaction.js';
import { UtilsModule } from './modules/utils.js';
import { HTMLModule } from './modules/html.js';

class LuxoraApp {
    constructor() {
        this.modules = {};
        this.init();
    }

    init() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.initializeApp());
        } else {
            this.initializeApp();
        }
    }

    async initializeApp() {
        // First load HTML components
        await this.loadHTMLComponents();
        
        // Then initialize all modules
        this.initializeModules();
    }

    async loadHTMLComponents() {
        const htmlModule = new HTMLModule();
        await htmlModule.loadAllComponents();
    }

    initializeModules() {
        // Initialize all modules
        this.modules.slider = new SliderModule();
        this.modules.navigation = new NavigationModule();
        this.modules.scroll = new ScrollModule();
        this.modules.animation = new AnimationModule();
        this.modules.contact = new ContactModule();
        this.modules.interaction = new InteractionModule();
        
        // Initialize global event listeners
        this.initializeGlobalEvents();
        
        // Export to global scope for backward compatibility
        this.exportToGlobal();
    }

    initializeGlobalEvents() {
        // Handle page visibility changes
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                this.modules.slider.stopAutoSlide();
            } else {
                this.modules.slider.startAutoSlide();
            }
        });

        // Handle window resize
        window.addEventListener('resize', UtilsModule.throttle(() => {
            const heroSection = document.querySelector('.hero-section');
            if (heroSection) {
                heroSection.style.height = window.innerHeight + 'px';
            }
        }, 250));
    }

    exportToGlobal() {
        // Export functions for backward compatibility
        window.GRIYO = {
            scrollToSection: this.modules.scroll.scrollToSection,
            nextSlide: () => this.modules.slider.nextSlide(),
            previousSlide: () => this.modules.slider.previousSlide(),
            utils: UtilsModule
        };

        // Export individual functions to global scope
        window.scrollToSection = this.modules.scroll.scrollToSection;
        window.nextSlide = () => this.modules.slider.nextSlide();
        window.previousSlide = () => this.modules.slider.previousSlide();
    }
}

// Initialize the application
new LuxoraApp();