export class HTMLModule {
    constructor() {
        this.components = {
            navbar: this.getNavbarHTML(),
            hero: this.getHeroHTML(),
            howWorks: this.getHowWorksHTML(),
            discover: this.getDiscoverHTML(),
            about: this.getAboutHTML(),
            projects: this.getProjectsHTML(),
            vision: this.getVisionHTML(),
            contact: this.getContactHTML(),
            footer: this.getFooterHTML()
        };
    }

    async loadAllComponents() {
        // Load all HTML components into their containers
        document.getElementById('navbar-container').innerHTML = this.components.navbar;
        document.getElementById('hero-container').innerHTML = this.components.hero;
        document.getElementById('how-works-container').innerHTML = this.components.howWorks;
        document.getElementById('discover-container').innerHTML = this.components.discover;
        document.getElementById('about-container').innerHTML = this.components.about;
        document.getElementById('projects-container').innerHTML = this.components.projects;
        document.getElementById('vision-container').innerHTML = this.components.vision;
        document.getElementById('contact-container').innerHTML = this.components.contact;
        document.getElementById('footer-container').innerHTML = this.components.footer;
    }

    getNavbarHTML() {
        return `
            <nav class="navbar navbar-expand-lg fixed-top">
                <div class="container">
                    <a class="navbar-brand fw-bold fs-3 me-auto" href="#">
                        <!-- Added logo image here -->
                        <img src="../images/logo.png" alt="Logo" class="navbar-logo img-fluid" style="height:2.7rem; margin-right:0.6rem; vertical-align:middle;">
                        LUXORA
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"><span></span><span></span><span></span></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li class="nav-item"><a class="nav-link" href="#home">Home</a></li>
                            <li class="nav-item"><a class="nav-link" href="#market">Properties</a></li>
                            <li class="nav-item"><a class="nav-link" href="#about">About Us</a></li>
                            <li class="nav-item"><a class="nav-link" href="#projects">Our Projects</a></li>
                            <li class="nav-item"><a class="nav-link" href="#vision">Our Vision</a></li>
                            <li class="nav-item"><a class="nav-link" href="#contact">Contact</a></li>
                        </ul>
                    </div>
                    <div class="ms-4 text-white d-none d-lg-block contact-info">
                        <div class="small">Main Street Plaza, Downtown Business District</div>
                        <div class="fw-medium">+1 (555) 123-4567</div>
                    </div>
                </div>
            </nav>
        `;
    }

    getHeroHTML() {
        return `
            <section id="home" class="hero-section">
                <div class="slider-container">
                    <img class="slider-image active" src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" alt="Slide 1">
                    <img class="slider-image" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" alt="Slide 2">
                    <img class="slider-image" src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" alt="Slide 3">
                </div>
                <div class="hero-content">
                    <h1 class="hero-title">Experience<br>/Elevated<br>Living</h1>
                    <p class="hero-subtitle">
                        Luxurious spaces, refined design, personalized services,<br>
                        and modern amenities for a sophisticated, upscale lifestyle.
                    </p>
                    <button class="btn btn-learn-more" data-scroll-target="properties"><span>Learn more</span></button>
                </div>

                <div class="carousel-controls">
                    <div class="carousel-control" data-action="previous-slide">
                        <i class="fas fa-chevron-left"></i>
                    </div>
                    <div class="carousel-control" data-action="next-slide">
                        <i class="fas fa-chevron-right"></i>
                    </div>
                </div>

                <div class="position-absolute bottom-0 end-0 p-4 text-white">
                    <small>Providing expert guidance and innovative solutions for buying, selling,<br>
                    and investing in prime properties with exceptional service.</small>
                </div>
            </section>
        `;
    }

    getHowWorksHTML() {
        return `
            <section id="properties" class="how-works-section">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4 how-works-step">
                            <div class="step-number">No.1</div>
                            <div class="step-title">Research Market</div>
                            <div class="step-description">Explore neighborhoods, property types, and prices to find the right real estate investment opportunities.</div>
                        </div>
                        <div class="col-md-4 how-works-step">
                            <div class="step-number">No.2</div>
                            <div class="step-title">Secure Financing</div>
                            <div class="step-description">Arrange mortgage options and gather necessary funds to ensure a smooth purchasing process.</div>
                        </div>
                        <div class="col-md-4 how-works-step">
                            <div class="step-number">No.3</div>
                            <div class="step-title">Close Deal</div>
                            <div class="step-description">Finalize paperwork, negotiate terms, and transfer ownership to complete your real estate purchase.</div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    getDiscoverHTML() {
        return `
            <section id="market" class="discover-section-exact">
                <div class="discover-container">
                    <div class="discover-header-row">
                        <div class="discover-header-left">
                            <span class="discover-slash">/</span><span class="discover-title-exact">Discover</span>
                        </div>
                        <div class="discover-header-right">
                            <button class="discover-arrow-btn" aria-label="Next" data-action="scroll-next">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="16" cy="16" r="16" fill="#F5F5F5"/>
                                    <path d="M13 10L19 16L13 22" stroke="#222" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </button>
                            <div class="discover-header-desc">
                                Discover a real estate agency that prioritizes client needs, offering expert guidance, personalized solutions, and seamless property transactions.
                            </div>
                            <button class="discover-learn-btn">
                                <span>Learn more</span>
                                <span class="arrow-svg"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-left:6px;vertical-align:middle;">
                                    <path d="M4 8H12" stroke="#222" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M8 4L12 8L8 12" stroke="#222" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg></span>
                            </button>
                        </div>
                    </div>
                    <div class="discover-cards-row-exact">
                        <div class="discover-card-exact small">
                            <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" alt="Elite Estate Advisors">
                            <div class="discover-card-title-exact">Elite Estate Advisors</div>
                            <div class="discover-card-subtitle-exact">
                                <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align:middle;margin-right:4px;"><path d="M8 14s5-4.33 5-7.5A5 5 0 0 0 3 6.5C3 9.67 8 14 8 14Z" stroke="#888" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="8" cy="6.5" r="1.5" fill="#888"/></svg>
                                Maple Street, Suburbia
                            </div>
                        </div>
                        <div class="discover-card-exact main">
                            <img src="https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=600&q=80" alt="Grand kalijaga">
                            <div class="discover-card-title-exact fw-bold">Grand kalijaga</div>
                            <div class="discover-card-subtitle-exact">
                                <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align:middle;margin-right:4px;"><path d="M8 14s5-4.33 5-7.5A5 5 0 0 0 3 6.5C3 9.67 8 14 8 14Z" stroke="#888" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="8" cy="6.5" r="1.5" fill="#888"/></svg>
                                Seaside Boulevard, Oceanfront Living Space
                            </div>
                        </div>
                        <div class="discover-card-exact small">
                            <img src="https://images.unsplash.com/photo-1460518451285-97b6aa326961?auto=format&fit=crop&w=400&q=80" alt="Skyline Realty Group">
                            <div class="discover-card-title-exact">Skyline Realty Group</div>
                            <div class="discover-card-subtitle-exact">
                                <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align:middle;margin-right:4px;"><path d="M8 14s5-4.33 5-7.5A5 5 0 0 0 3 6.5C3 9.67 8 14 8 14Z" stroke="#888" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="8" cy="6.5" r="1.5" fill="#888"/></svg>
                                Oak Avenue, Downtown
                            </div>
                        </div>
                        <div class="discover-card-exact small">
                            <img src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=400&q=80" alt="Skyline Realty Group">
                            <div class="discover-card-title-exact">Skyline Realty Group</div>
                            <div class="discover-card-subtitle-exact">
                                <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align:middle;margin-right:4px;"><path d="M8 14s5-4.33 5-7.5A5 5 0 0 0 3 6.5C3 9.67 8 14 8 14Z" stroke="#888" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="8" cy="6.5" r="1.5" fill="#888"/></svg>
                                Pine Court, Lakeside
                            </div>
                        </div>
                        <div class="discover-card-exact small">
                            <img src="https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=400&q=80" alt="Vista Luxe Realty">
                            <div class="discover-card-title-exact">Vista Luxe Realty</div>
                            <div class="discover-card-subtitle-exact">
                                <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align:middle;margin-right:4px;"><path d="M8 14s5-4.33 5-7.5A5 5 0 0 0 3 6.5C3 9.67 8 14 8 14Z" stroke="#888" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="8" cy="6.5" r="1.5" fill="#888"/></svg>
                                Cedar Drive, Hilltop
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    getAboutHTML() {
        return `
            <section id="about" class="about-section-exact">
                <div class="about-container">
                    <div class="about-header-row">
                        <div class="about-header-left">
                            <span class="about-slash">/</span><span class="about-title-exact">About us</span>
                        </div>
                        <div class="about-header-right">
                            <div class="about-header-desc">
                                At LUXORA Real Estate, we provide tailored property solutions, expert guidance, and exceptional service to ensure seamless transactions and satisfaction in every real estate deal.
                            </div>
                        </div>
                    </div>
                    <div class="about-divider-row">
                        <div class="about-divider-line"></div>
                        <button class="about-arrow-btn" aria-label="Next" data-action="scroll-next">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="16" cy="16" r="16" fill="#F5F5F5"/>
                                <path d="M13 10L19 16L13 22" stroke="#222" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                    </div>
                    <div class="about-image-row">
                        <div class="about-image-block">
                            <img class="about-main-image img-fluid" src="https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=1200&q=80" alt="About LUXORA Real Estate">
                            <div class="about-caption">Find comprehensive answers to all your Naturely travel questions right here.<br>Whether Find comprehensive answers to all.</div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    getProjectsHTML() {
        return `
            <section id="projects" class="projects-section-exact">
                <div class="projects-container">
                    <div class="projects-header-row">
                        <div class="projects-header-left">
                            <span class="projects-slash">/</span><span class="projects-title-exact">Our Projects</span>
                        </div>
                        <div class="projects-header-right">
                            <div class="projects-header-desc">
                                Our projects showcase innovative designs, prime locations, and sustainable development, offering modern living spaces that elevate lifestyle and comfort.
                            </div>
                            <button class="projects-learn-btn">
                                <span>Learn more</span>
                                <span class="arrow-svg"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-left:6px;vertical-align:middle;">
                                    <path d="M4 8H12" stroke="#222" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M8 4L12 8L8 12" stroke="#222" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg></span>
                            </button>
                        </div>
                    </div>
                    <div class="projects-divider-row">
                        <div class="projects-divider-line"></div>
                        <button class="projects-arrow-btn" aria-label="Next" data-action="scroll-next">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="16" cy="16" r="16" fill="#F5F5F5"/>
                                <path d="M13 10L19 16L13 22" stroke="#222" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                    </div>
                    <div class="projects-grid-row">
                        <div class="projects-main-card">
                            <img class="projects-main-image img-fluid" src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=80" alt="Skyline Residences">
                            <div class="projects-main-meta">
                                <div class="projects-main-year">2024</div>
                                <div class="projects-main-title">Skyline Residences</div>
                                <div class="projects-main-desc">Luxury high-rise apartments with panoramic views, modern amenities, and a prime downtown location.</div>
                            </div>
                        </div>
                        <div class="projects-side-cards">
                            <div class="projects-side-card">
                                <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" alt="2023 Villa in Seminyak" class="img-fluid">
                                <div class="projects-side-meta">
                                    <div class="projects-side-year">2023</div>
                                    <div class="projects-side-title">Villa in Seminyak</div>
                                </div>
                            </div>
                            <div class="projects-side-card">
                                <img src="https://images.unsplash.com/photo-1460518451285-97b6aa326961?auto=format&fit=crop&w=400&q=80" alt="2023 Villa in Seminyak" class="img-fluid">
                                <div class="projects-side-meta">
                                    <div class="projects-side-year">2023</div>
                                    <div class="projects-side-title">Villa in Seminyak</div>
                                </div>
                            </div>
                            <div class="projects-side-card">
                                <img src="https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=400&q=80" alt="2020 Villa in Seminyak" class="img-fluid">
                                <div class="projects-side-meta">
                                    <div class="projects-side-year">2020</div>
                                    <div class="projects-side-title">Villa in Seminyak</div>
                                </div>
                            </div>
                            <div class="projects-side-card">
                                <img src="https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=400&q=80" alt="2019 Villa in Seminyak" class="img-fluid">
                                <div class="projects-side-meta">
                                    <div class="projects-side-year">2019</div>
                                    <div class="projects-side-title">Villa in Seminyak</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    getVisionHTML() {
        return `
            <section id="vision" class="vision-section-exact">
                <div class="vision-container">
                    <div class="vision-header-row">
                        <div class="vision-header-left">
                            <span class="vision-slash">/</span>
                            <span class="vision-title-exact">Our Vision</span>
                        </div>
                        <div class="vision-header-right">
                            <div class="vision-header-desc">
                                Our vision is to create innovative, sustainable communities that enhance lifestyles, prioritize comfort, and deliver lasting value through exceptional real estate solutions and developments.
                            </div>
                        </div>
                    </div>
                    <div class="vision-divider-row">
                        <div class="vision-divider-line"></div>
                        <button class="vision-arrow-btn" aria-label="Next" data-action="scroll-next">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="16" cy="16" r="16" fill="#F5F5F5"/>
                                <path d="M13 10L19 16L13 22" stroke="#222" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                    </div>
                    <div class="vision-content-row">
                        <div class="vision-image-col">
                            <img class="vision-main-image img-fluid" src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=600&q=80" alt="Vision Home">
                        </div>
                        <div class="vision-cards-col">
                            <div class="vision-cards-grid">
                                <div class="vision-card">
                                    <div class="vision-card-title">Innovative Living Spaces</div>
                                    <div class="vision-card-desc">Blending technology with modern design to create exceptional, forward-thinking homes.</div>
                                    <button class="vision-learn-btn"><span class="vision-learn-icon arrow-svg"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="12" fill="#111"/><path d="M10 8l4 4-4 4" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span><span>Learn more</span></button>
                                </div>
                                <div class="vision-card">
                                    <div class="vision-card-title">Sustainable Communities</div>
                                    <div class="vision-card-desc">Building eco-friendly neighborhoods that enhance quality of life and environmental responsibility.</div>
                                    <button class="vision-learn-btn"><span class="vision-learn-icon arrow-svg"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="12" fill="#111"/><path d="M10 8l4 4-4 4" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span><span>Learn more</span></button>
                                </div>
                                <div class="vision-card">
                                    <div class="vision-card-title">Exceptional Real Estate</div>
                                    <div class="vision-card-desc">Delivering top-tier properties and unmatched service for a superior real estate experience.</div>
                                    <button class="vision-learn-btn"><span class="vision-learn-icon arrow-svg"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="12" fill="#111"/><path d="M10 8l4 4-4 4" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span><span>Learn more</span></button>
                                </div>
                                <div class="vision-card">
                                    <div class="vision-card-title">Quality Craftsmanship</div>
                                    <div class="vision-card-desc">Ensuring meticulous attention to detail and superior construction for lasting value.</div>
                                    <button class="vision-learn-btn"><span class="vision-learn-icon arrow-svg"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="12" fill="#111"/><path d="M10 8l4 4-4 4" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span><span>Learn more</span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    getContactHTML() {
        return `
            <section id="contact" class="contact-section-exact">
                <div class="contact-container-exact">
                    <div class="section-header-row">
                        <div class="section-header-left">
                            <span class="section-slash">/</span><span class="section-title">Contact</span>
                        </div>
                        <div class="section-header-right">
                            <div class="section-desc">
                                Get in touch with us for personalized property solutions, expert guidance, and prompt support.
                            </div>
                        </div>
                    </div>
                    <div class="section-divider-row">
                        <div class="section-divider-line"></div>
                        <button class="section-arrow-btn" aria-label="Next" data-action="scroll-next">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="16" cy="16" r="16" fill="#F5F5F5"/>
                                <path d="M13 10L19 16L13 22" stroke="#222" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                    </div>
                    <div class="contact-form-row">
                        <form class="contact-form" autocomplete="off">
                            <div class="contact-form-group">
                                <label for="contact-name">Name</label>
                                <input type="text" id="contact-name" name="name" required>
                            </div>
                            <div class="contact-form-group">
                                <label for="contact-email">Email</label>
                                <input type="email" id="contact-email" name="email" required>
                            </div>
                            <div class="contact-form-group">
                                <label for="contact-message">Message</label>
                                <textarea id="contact-message" name="message" rows="5" required></textarea>
                            </div>
                            <button type="submit" class="contact-submit-btn">Send Message</button>
                        </form>
                    </div>
                </div>
            </section>
        `;
    }

    getFooterHTML() {
        return `
            <footer class="footer-section-exact">
                <div class="footer-container-exact">
                    <div class="footer-top-row">
                        <div class="footer-col address-col">
                            <div>Main Street Plaza, Downtown Business District</div>
                            <div class="footer-phone">+1 (555) 123-4567</div>
                        </div>
                        <div class="footer-col nav-col">
                            <a class="footer-nav-link" href="#home">Home</a>
                            <a class="footer-nav-link" href="#market">Properties</a>
                            <a class="footer-nav-link" href="#about">About Us</a>
                            <a class="footer-nav-link" href="#projects">Our Projects</a>
                            <a class="footer-nav-link" href="#vision">Our Vision</a>
                            <a class="footer-nav-link" href="#contact">Contact</a>
                        </div>
                        <div class="footer-col contact-col">
                            <div class="footer-get-in-touch">Get in Touch</div>
                            <a href="mailto:Luxora@Bussines.com" class="footer-email">Luxora@Bussines.com</a>
                        </div>
                    </div>
                    <div class="footer-brand-row">
                        <span class="footer-slash">/</span><span class="footer-brand">LUXORA</span>
                    </div>
                    <div class="footer-bottom-row">
                        <div class="footer-bottom-links">
                            <a href="#terms">Terms & Conditions</a> &nbsp; | &nbsp;
                            <a href="#privacy">Privacy Policy</a>
                        </div>
                    </div>
                </div>
            </footer>
        `;
    }
}
