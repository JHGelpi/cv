// main.js - Optional interactivity for CV

// Example: Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
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
