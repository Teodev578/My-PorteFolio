document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.getElementById('burger-menu');
    const navLinks = document.getElementById('nav-links');

    burgerMenu.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
        burgerMenu.classList.toggle('toggle');

        // Animate links
        navLinks.querySelectorAll('li').forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
    });
});

// Animation for nav links
const navLinkFade = `
@keyframes navLinkFade {
    from {
        opacity: 0;
        transform: translateX(50px);
    }
    to {
        opacity: 1;
        transform: translateX(0px);
    }
}
`;

// Append the keyframes to the style sheet
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = navLinkFade;
document.head.appendChild(styleSheet);
