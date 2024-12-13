const menuToggle = document.querySelector('.menu-toggle');
const overlayMenu = document.querySelector('.overlay-menu');
const closeMenu = document.querySelector('.close-menu');

// Basculer l'affichage du menu
menuToggle.addEventListener('click', () => {
    overlayMenu.classList.toggle('show');
});

// Fermer le menu avec le bouton de fermeture
closeMenu.addEventListener('click', () => {
    overlayMenu.classList.remove('show');
});

const menuLinks = document.querySelectorAll('.menu-link');

// Gérer le clic sur les liens du menu
menuLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const pageName = link.getAttribute('data-link');
        console.log(`Lien cliqué : ${pageName}`);
        const url = link.getAttribute('href');
        overlayMenu.classList.remove('show'); // Fermer le menu après un clic
        window.location.href = url;
    });
});
