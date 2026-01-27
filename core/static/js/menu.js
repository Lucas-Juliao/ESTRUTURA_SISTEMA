document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');
    const userInfo = document.querySelector('.user-info');
    const userDropdown = document.querySelector('.user-dropdown');

    menuToggle.addEventListener('click', function(event) {
        event.stopPropagation();
        sidebar.classList.toggle('active');
        mainContent.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    userInfo.addEventListener('click', function(event) {
        event.stopPropagation();
        userDropdown.classList.toggle('active');
    });

    document.addEventListener('click', function(event) {
        // Close sidebar if click is outside
        const isClickInsideSidebar = sidebar.contains(event.target);
        const isClickOnMenuToggle = menuToggle.contains(event.target);
        if (!isClickInsideSidebar && !isClickOnMenuToggle && sidebar.classList.contains('active')) {
            sidebar.classList.remove('active');
            mainContent.classList.remove('active');
            menuToggle.classList.remove('active');
        }

        // Close user dropdown if click is outside
        if (!userInfo.contains(event.target) && userDropdown.classList.contains('active')) {
            userDropdown.classList.remove('active');
        }
    });

    // Accordion menu logic
    const menuModules = document.querySelectorAll('.menu-module > a, .submenu-module > a');
    menuModules.forEach(function(module) {
        module.addEventListener('click', function(event) {
            event.preventDefault();
            const submenu = this.nextElementSibling;
            if (submenu && (submenu.classList.contains('submenu') || submenu.classList.contains('submenu-level2'))) {
                // Toggle active class for arrow rotation
                this.classList.toggle('active');

                // Toggle display of the submenu
                if (submenu.style.display === 'block') {
                    submenu.style.display = 'none';
                } else {
                    submenu.style.display = 'block';
                }
            }
        });
    });
});
