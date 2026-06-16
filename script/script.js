    document.addEventListener('DOMContentLoaded', function () {
        const navbarToggle = document.getElementById('navbarToggle');
        const navbarMenu = document.getElementById('navbarMenu');

        if (navbarToggle && navbarMenu) {
            navbarToggle.addEventListener('click', function () {
                navbarToggle.classList.toggle('is-active');
                navbarMenu.classList.toggle('is-active');
                const isExpanded = navbarToggle.getAttribute('aria-expanded') === 'true';
                navbarToggle.setAttribute('aria-expanded', !isExpanded);
            });

            // Permet de fermer le menu quand on clique sur un lien
            const navbarLinks = document.querySelectorAll('.navbar__link');
            navbarLinks.forEach(link => {
                link.addEventListener('click', () => {
                    navbarToggle.classList.remove('is-active');
                    navbarMenu.classList.remove('is-active');
                    navbarToggle.setAttribute('aria-expanded', 'false');
                });
            });
        }
    });
