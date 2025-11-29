// main.js - Optional interactivity for CV

// Tab switching functionality
function initTabs() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');

            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Add active class to clicked button and corresponding content
            button.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });
}

// Initialize tabs when DOM is loaded
document.addEventListener('DOMContentLoaded', initTabs);

// Example: Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Example: Print button functionality (if you add one)
function printResume() {
    window.print();
}

// Return to top button
const returnToTopBtn = document.getElementById('return-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        returnToTopBtn.classList.add('visible');
    } else {
        returnToTopBtn.classList.remove('visible');
    }
});

returnToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
