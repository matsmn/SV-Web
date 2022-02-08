window.onload = function () {
    /* const menu_btn = document.querySelector('.btn-dropdown'); */
    const menu_btn = document.querySelector('.hamburger');
    const sidebar = document.querySelector('.sideMenu');

    menu_btn.addEventListener('click', function () {
        menu_btn.classList.toggle('is-active');
        sidebar.classList.toggle('is-active');
    });
}

