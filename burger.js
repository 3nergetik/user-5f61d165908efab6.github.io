const headerBurger = document.querySelector('.header-burger');
const headerMenu = document.querySelector('.header-menu');
const body = document.querySelector('body');

headerBurger.onclick = function () {
    headerBurger.classList.toggle('open-menu');
    headerMenu.classList.toggle('active');
    body.classList.toggle('lock');
}
