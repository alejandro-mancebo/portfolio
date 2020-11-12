const menuBTn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn_burger');
//const hamburgerHome = document.querySelector('.menu-btn_burger-home');

const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.menu-nav_item');
const menuHome = document.querySelector('.menu-nav-home');


let showMenu = false;

function toggleMenu() {
    if(!showMenu) {
        hamburger.classList.add('open');
        nav.classList.add('open');
        menuNav.classList.add('open');
        navItems.forEach(item => item.classList.add('open'));

        if(window.innerWidth < 767) {
            menuNav.classList.add('menu-over');
            menuNav.classList.remove('menu-nav-home');
        }

        showMenu = true;  
             
    } else {
        hamburger.classList.remove('open');
        nav.classList.remove('open');
        menuNav.classList.remove('open');
        navItems.forEach(item => item.classList.remove('open'));
        menuNav.classList.remove('menu-over');
        menuNav.classList.add('menu-nav-home');
        showMenu= false;
    }
}

menuBTn.addEventListener('click', toggleMenu);