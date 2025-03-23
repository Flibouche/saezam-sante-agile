// Menu burger
document.addEventListener('DOMContentLoaded', function () {
    const mobileNavToggle = document.getElementById('mobile-nav-toggle');
    const mobileNavMenu = document.getElementById('mobile-nav-menu');
    const mobileNavClose = document.getElementById('mobile-nav-close');

    mobileNavToggle.addEventListener('click', () => {
        mobileNavMenu.classList.remove('translate-x-full');
    });

    mobileNavClose.addEventListener('click', () => {
        mobileNavMenu.classList.add('translate-x-full');
    });
});

// Copyright Year
document.addEventListener('DOMContentLoaded', function () {
    const copyrightYear = document.getElementById('year');
    const currentYear = new Date().getFullYear();
    copyrightYear.innerHTML = currentYear;
});