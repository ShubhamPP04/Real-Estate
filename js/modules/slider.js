export class SliderModule {
    constructor() {
        this.currentSlide = 0;
        this.images = document.querySelectorAll('.slider-image');
        this.totalSlides = this.images.length;
        this.autoSlideInterval = null;
        
        this.init();
    }

    init() {
        if (this.images.length > 0) {
            this.images[0].classList.add('active');
            this.startAutoSlide();
        }
    }

    showSlide(newIndex, direction = 1) {
        if (newIndex === this.currentSlide) return;
        
        const prevIndex = this.currentSlide;
        
        // Remove all classes from previous slide
        this.images[prevIndex].classList.remove('active', 'prev', 'next');
        
        // Remove all classes from new slide
        this.images[newIndex].classList.remove('active', 'prev', 'next');
        
        // Add appropriate classes based on direction
        this.images[prevIndex].classList.add(direction === 1 ? 'prev' : 'next');
        this.images[newIndex].classList.add('active');
        
        // Clean up after animation
        setTimeout(() => {
            this.images[prevIndex].classList.remove('prev', 'next');
        }, 800);
        
        this.currentSlide = newIndex;
    }

    nextSlide() {
        const newIndex = (this.currentSlide + 1) % this.totalSlides;
        this.showSlide(newIndex, 1);
    }

    previousSlide() {
        const newIndex = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
        this.showSlide(newIndex, -1);
    }

    startAutoSlide() {
        this.autoSlideInterval = setInterval(() => this.nextSlide(), 5000);
    }

    stopAutoSlide() {
        if (this.autoSlideInterval) {
            clearInterval(this.autoSlideInterval);
        }
    }

    initCarouselInteraction() {
        const carouselControls = document.querySelector('.carousel-controls');
        const heroSection = document.querySelector('.hero-section');
        
        if (carouselControls && heroSection) {
            // Pause auto-slide on hover
            heroSection.addEventListener('mouseenter', () => this.stopAutoSlide());
            heroSection.addEventListener('mouseleave', () => this.startAutoSlide());
            
            // Pause auto-slide when controls are clicked
            carouselControls.addEventListener('click', () => {
                this.stopAutoSlide();
                // Resume after 10 seconds
                setTimeout(() => this.startAutoSlide(), 10000);
            });
        }

        // Initialize keyboard navigation
        this.initKeyboardNavigation();
    }

    initKeyboardNavigation() {
        document.addEventListener('keydown', (e) => {
            switch(e.key) {
                case 'ArrowLeft':
                    if (e.target.closest('.hero-section')) {
                        e.preventDefault();
                        this.previousSlide();
                    }
                    break;
                case 'ArrowRight':
                    if (e.target.closest('.hero-section')) {
                        e.preventDefault();
                        this.nextSlide();
                    }
                    break;
                case 'Escape':
                    // Close any open modals or menus
                    const navbarCollapse = document.querySelector('.navbar-collapse.show');
                    if (navbarCollapse) {
                        navbarCollapse.classList.remove('show');
                    }
                    break;
            }
        });
    }
}