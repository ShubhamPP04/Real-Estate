export class NavigationModule {
    constructor() {
        this.init();
    }

    init() {
        this.initNavigation();
        this.initMobileMenu();
    }

    initNavigation() {
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const href = link.getAttribute('href');
                
                // Handle different navigation scenarios
                if (href === '#') {
                    // Scroll to top for home
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    });
                } else if (href.startsWith('#')) {
                    // Handle anchor links
                    const targetId = href.substring(1);
                    this.scrollToSection(targetId);
                }
            });
        });
    }

    initMobileMenu() {
        const navbar = document.querySelector('.navbar');
        const navbarToggler = document.querySelector('.navbar-toggler');
        const navbarCollapse = document.querySelector('.navbar-collapse');
        
        if (navbarToggler && navbarCollapse) {
            navbarToggler.addEventListener('click', () => {
                navbarCollapse.classList.toggle('show');
                navbarToggler.classList.toggle('active');
            });
            
            // Close menu when clicking outside
            document.addEventListener('click', (e) => {
                if (!navbar.contains(e.target)) {
                    navbarCollapse.classList.remove('show');
                    navbarToggler.classList.remove('active');
                }
            });
            
            // Close menu when clicking on nav links
            const navLinks = document.querySelectorAll('.nav-link');
            navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    navbarCollapse.classList.remove('show');
                    navbarToggler.classList.remove('active');
                });
            });
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