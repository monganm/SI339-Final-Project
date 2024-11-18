document.getElementById("year").textContent = new Date().getFullYear();

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
