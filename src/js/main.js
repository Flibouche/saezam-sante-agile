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

// Scroll Reveal Animation
document.addEventListener('DOMContentLoaded', function () {
    const scrollReveal = ScrollReveal({
        origin: 'left',
        distance: '80px',
        duration: 2500,
        delay: 300,
    });

    scrollReveal.reveal(`#hero, #reseau-sante-agile, #nos-partenaires, #mot-du-fondateur`);
    scrollReveal.reveal(`#cabinet-medical`, { origin: 'right', distance: '180px' });
    scrollReveal.reveal(`.first-part`, { origin: 'left' });
    scrollReveal.reveal(`.second-part`, { origin: 'right', delay: 700 });
    scrollReveal.reveal(`.third-part`, { origin: 'left', delay: 1000 });
    scrollReveal.reveal(`.card`, { origin: 'top', interval: 500 });
});