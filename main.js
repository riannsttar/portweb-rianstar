let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclik = () => {
    menuIcont.classList.toggle('bx-x')
    navbar.classList.toggle('active');
}