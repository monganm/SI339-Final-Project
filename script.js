// Dynamic Year in Footer
document.getElementById("year").textContent = new Date().getFullYear();

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href]').forEach(link => {
    link.addEventListener('click', (e) => {
        const href = e.target.getAttribute('href');
        
        // Only proceed if href exists and starts with #
        if (href && href.startsWith('#')) {
            e.preventDefault(); // Prevent default action
            const targetElement = document.querySelector(href);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        } else if (href) {
            // Allow normal navigation for external/internal links
            window.location.href = href;
        }
    });
});

// Apply fade-in animation when sections come into view
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("fade-in");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.2 }
    );

    sections.forEach((section) => observer.observe(section));
});

// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav ul');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('show');
        if (navMenu.classList.contains('show')) {
            navMenu.style.position = 'absolute';
            navMenu.style.top = '100%';
            navMenu.style.left = '0';
            navMenu.style.width = '100%';
        } else {
            navMenu.style.position = ''; // Reset to default when hidden
        }
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            navMenu.classList.remove('show');
            navMenu.style.position = 'static';
        }
    });
}

// Handle Newsletter Subscription Form Submission
document.querySelector(".footer-container form").addEventListener("submit", (e) => {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;
    alert(`Thank you for subscribing with ${email}!`);
    e.target.reset(); // Clear the form after submission
});
