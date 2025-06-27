export class ContactModule {
    constructor() {
        this.init();
    }

    init() {
        this.handleContactForm();
    }

    handleContactForm() {
        const form = document.querySelector('.contact-form');
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                
                // Get form data
                const formData = new FormData(form);
                const name = formData.get('name');
                const email = formData.get('email');
                const message = formData.get('message');
                
                // Simple validation
                if (!name || !email || !message) {
                    alert('Please fill in all fields');
                    return;
                }
                
                // Email validation
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(email)) {
                    alert('Please enter a valid email address');
                    return;
                }
                
                // Simulate form submission
                alert('Thank you for your message! We will get back to you soon.');
                form.reset();
            });
        }
    }
}