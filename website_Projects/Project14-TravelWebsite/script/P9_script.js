const home = document.querySelector('.home');
const headerContainer = document.querySelector('.header--navBar');
const iconContainer = document.querySelector('.header--hamburgerIcon');
const icon = document.querySelector('.header--hamburgerIcon i');


iconContainer.addEventListener('click', ()=>{
    headerContainer.classList.toggle('header--active');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
    home.classList.toggle('homeSlide');
})