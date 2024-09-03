let menuIcon = document.querySelector('#menu-icon');
let header = document.querySelector('.header');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    header.classList.toggle('active');
};
