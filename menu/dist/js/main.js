let btn = document.querySelector('.header__toggle');
let menu = document.querySelector('.header');

btn.onclick = function() {
    menu.classList.toggle('active-menu');
    
}