// Menu burger
document.addEventListener('DOMContentLoaded', function () {
    const mobileNavToggle = document.getElementById('mobile-nav-toggle');
    const mobileNavMenu = document.getElementById('mobile-nav-menu');
    const navClose = document.getElementById('mobile-nav-close');

    mobileNavToggle.addEventListener('click', () => {
        mobileNavMenu.classList.remove('translate-x-full');
    });

    navClose.addEventListener('click', () => {
        mobileNavMenu.classList.add('translate-x-full');
    });
});