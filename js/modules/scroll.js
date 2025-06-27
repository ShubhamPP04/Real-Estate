import { UtilsModule } from './utils.js';

export class ScrollModule {
    constructor() {
        this.init();
    }

    init() {
        this.initScrollEvents();
        this.initParallaxEffect();
    }

    initScrollEvents() {
        // Throttled scroll handler for navbar
        window.addEventListener('scroll', UtilsModule.throttle(() => {
            this.handleNavbarScroll();
            this.handleScrollTopArrow();
        }, 16)); // ~60fps
        
        // Initial call
        this.handleNavbarScroll();
        this.handleScrollTopArrow();
    }

    handleNavbarScroll() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(44, 62, 80, 0.95)';
            navbar.classList.add('scrolled');
        } else {
            navbar.style.background = 'rgba(255,255,255,0.15)';
            navbar.classList.remove('scrolled');
        }
    }

    handleScrollTopArrow() {
        const arrow = document.querySelector('.scroll-top-arrow');
        const homeSection = document.getElementById('home');
        if (!arrow || !homeSection) return;
        
        const homeRect = homeSection.getBoundingClientRect();
        if (homeRect.bottom <= 0) {
            arrow.classList.add('show');
        } else {
            arrow.classList.remove('show');
        }
    }

    initParallaxEffect() {
        const heroSection = document.querySelector('.hero-section');
        const heroContent = document.querySelector('.hero-content');
        
        if (heroSection && heroContent) {
            window.addEventListener('scroll', UtilsModule.throttle(() => {
                const scrolled = window.pageYOffset;
                const parallax = scrolled * 0.5;
                
                if (scrolled < window.innerHeight) {
                    const activeImage = document.querySelector('.slider-image.active');
                    if (activeImage) {
                        activeImage.style.transform = `translateY(${parallax}px)`;
                    }
                    
                    heroContent.style.transform = `translateY(${parallax * 0.3}px)`;
                }
            }, 16));
        }
    }

    scrollToSection(sectionId) {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth'
            });
        }
    }
}