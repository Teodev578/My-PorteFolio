document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.main-nav');

    hamburger.addEventListener('click', () => {
        // Ajoute/retire la classe 'is-active' au bouton pour l'animation
        hamburger.classList.toggle('is-active');

        // Ajoute/retire la classe 'is-open' au menu pour le faire apparaître/disparaître
        navMenu.classList.toggle('is-open');

        // Met à jour l'attribut ARIA pour l'accessibilité
        const isOpened = hamburger.getAttribute('aria-expanded') === 'true';
        hamburger.setAttribute('aria-expanded', !isOpened);
    });
});