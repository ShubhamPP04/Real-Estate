# LUXORA - Experience Elevated Living

LUXORA is a modern and responsive web application designed for a real estate business, focusing on showcasing properties and providing an elevated living experience. The platform is built with a modular and scalable architecture, ensuring a smooth user experience across various devices.

## Features

*   **Responsive Design:** Optimized for seamless viewing and interaction on desktops, tablets, and mobile devices.
*   **Dynamic Content Loading:** Utilizes JavaScript modules to load HTML components, improving maintainability and performance.
*   **Interactive Slider:** Engaging image slider for showcasing properties or key visuals.
*   **Smooth Scrolling:** Enhanced navigation experience with smooth scroll to sections.
*   **Modular CSS:** Well-organized and maintainable stylesheets with a clear separation of concerns.
*   **Contact Form:** Integrated contact section for user inquiries.
*   **Accessibility:** Includes features like scroll-to-top button and considerations for print and high contrast modes.

## Technologies Used

*   **HTML5:** For structuring the web content.
*   **CSS3:** For styling and layout, including:
    *   **Modular CSS:** `base.css`, `responsive.css`, and component-specific stylesheets (e.g., `navbar.css`, `hero.css`, `buttons.css`).
*   **JavaScript (ES6+):** For interactive functionalities and application logic, organized into modules:
    *   `main.js`: Main application entry point.
    *   `slider.js`: Handles image slider functionality.
    *   `navigation.js`: Manages navigation behaviors.
    *   `scroll.js`: Implements smooth scrolling.
    *   `animation.js`: For various animations.
    *   `contact.js`: Manages contact form interactions.
    *   `interaction.js`: General user interaction handling.
    *   `utils.js`: Utility functions.
    *   `html.js`: Handles loading of HTML components.
*   **Bootstrap 5:** A popular CSS framework for responsive, mobile-first front-end web development.
*   **Font Awesome:** Icon library for scalable vector icons.
*   **Google Fonts:** Custom typography using the 'Inter' font.

## Installation

To set up the project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/ShubhamPP04/Real-Estate.git
    cd Real-Estate
    ```
2.  **Open `html/index.html` in your web browser.** This project does not require a local server to run, as it's a static site.

## Usage

Simply open the `html/index.html` file in any modern web browser to view the application.

## Project Structure

```
.
├── css/
│   ├── base.css
│   ├── responsive.css
│   └── components/
│       ├── buttons.css
│       ├── cards.css
│       ├── footer.css
│       ├── forms.css
│       ├── hero.css
│       ├── navbar.css
│       └── sections.css
├── html/
│   └── index.html
├── images/
│   └── logo.png
└── js/
    ├── main.js
    └── modules/
        ├── animation.js
        ├── contact.js
        ├── html.js
        ├── interaction.js
        ├── navigation.js
        ├── scroll.js
        ├── slider.js
        └── utils.js
```

## Contributing

Contributions are welcome! Please feel free to fork the repository and submit pull requests.

## License

This project is open source and available under the [MIT License](LICENSE).