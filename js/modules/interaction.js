export class InteractionModule {
    constructor() {
        this.init();
    }

    init() {
        // Use setTimeout to ensure DOM is loaded from HTMLModule
        setTimeout(() => {
            this.initPropertyCards();
            this.initButtonEffects();
            this.initArrowButtons();
            this.initDataActionHandlers();
        }, 100);
    }

    initDataActionHandlers() {
        // Handle all data-action attributes
        document.addEventListener('click', (e) => {
            const action = e.target.closest('[data-action]')?.getAttribute('data-action');
            if (!action) return;

            switch(action) {
                case 'next-slide':
                    if (window.GRIYO?.nextSlide) window.GRIYO.nextSlide();
                    break;
                case 'previous-slide':
                    if (window.GRIYO?.previousSlide) window.GRIYO.previousSlide();
                    break;
                case 'scroll-next':
                    this.scrollToNextSection(e.target);
                    break;
                case 'scroll-to-top':
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    break;
            }
        });

        // Handle scroll target buttons
        document.addEventListener('click', (e) => {
            const scrollTarget = e.target.closest('[data-scroll-target]')?.getAttribute('data-scroll-target');
            if (scrollTarget && window.GRIYO?.scrollToSection) {
                window.GRIYO.scrollToSection(scrollTarget);
            }
        });
    }

    scrollToNextSection(element) {
        const currentSection = element.closest('section');
        const nextSection = currentSection?.nextElementSibling;
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
        }
    }

    initPropertyCards() {
        const propertyCards = document.querySelectorAll('.property-card');
        propertyCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-15px)';
                this.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
                this.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
            });
        });
    }

    initButtonEffects() {
        const buttons = document.querySelectorAll('.discover-learn-btn, .projects-learn-btn, .vision-learn-btn');
        buttons.forEach(button => {
            button.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-2px)';
            });
            
            button.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
            });
        });
    }

    initArrowButtons() {
        const arrowButtons = document.querySelectorAll('.section-arrow-btn');
        arrowButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Add click animation
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                }, 150);
            });
        });
    }
}