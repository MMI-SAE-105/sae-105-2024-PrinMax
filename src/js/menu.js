const menuToggle = document.querySelector('.menu-toggle');
const overlayMenu = document.querySelector('.overlay-menu');
const closeMenu = document.querySelector('.close-menu');

// Ouvrir le menu
menuToggle.addEventListener('click', () => {
    overlayMenu.classList.add('show');
});

// Fermer le menu
closeMenu.addEventListener('click', () => {
    overlayMenu.classList.remove('show');
});

const menuLinks = document.querySelectorAll('.menu-link');

menuLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const pageName = link.getAttribute('data-link');
        console.log(`Lien cliqué : ${pageName}`);
        const url = link.getAttribute('href');
        window.location.href = url;
    });
});
