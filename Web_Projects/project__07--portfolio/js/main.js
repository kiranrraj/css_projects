// Full Screen Menu

const menuBtn = document.querySelector('.hamburger');
const navBar = document.querySelector('.navBar');
menuBtn.addEventListener('click', ()=>{
    navBar.classList.toggle('fullscreen');
})