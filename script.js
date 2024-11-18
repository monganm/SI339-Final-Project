// Dynamic Year in Footer
document.getElementById("year").textContent = new Date().getFullYear();

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const href = e.target.getAttribute('href');
        if (href.startsWith('#')) {
            document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
        } else {
            window.location.href = href;
        }
    });
});

// Select the hamburger button and navigation
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav ul');

// Add event listener to toggle navigation visibility
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('show');

    // Ensure the menu always appears in the correct position
    if (navMenu.classList.contains('show')) {
        navMenu.style.position = 'absolute';
        navMenu.style.top = '100%';
        navMenu.style.left = '0';
        navMenu.style.width = '100%';
    } else {
        navMenu.style.position = ''; // Reset to default when hidden
    }
});

// Prevent the hamburger menu from overlapping other elements on larger screens
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navMenu.classList.remove('show'); // Close menu on larger screens
        navMenu.style.position = 'static'; // Reset menu position
    }
});
