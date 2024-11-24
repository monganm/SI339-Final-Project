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
    hamburger.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent interference with other elements
        navMenu.classList.toggle('show');
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            navMenu.classList.remove('show'); // Reset for larger screens
        }
    });

    // Close menu if clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            navMenu.classList.remove('show');
        }
    });
} else {
    console.error('Hamburger menu or nav ul is missing on this page.');
}

// Handle Newsletter Subscription Form Submission
const form = document.querySelector(".footer-container form");
if (form) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = e.target.querySelector('input[type="email"]').value;
        alert(`Thank you for subscribing with ${email}!`);
        e.target.reset(); // Clear the form after submission
    });
} else {
    console.error('Newsletter form is missing on this page.');
}
