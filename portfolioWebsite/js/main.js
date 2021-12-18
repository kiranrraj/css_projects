const menu = document.querySelector('#nav__menu');
const toggleBtn = document.querySelector('#nav__toggle');
const closeBtn = document.querySelector('#nav__close');

const navLinks = document.querySelectorAll('.nav__link');

toggleBtn.addEventListener('click', () => {
    menu.classList.add('nav__menu-show');
});

closeBtn.addEventListener('click', () => {
    menu.classList.remove('nav__menu-show');
});

navLinks.forEach(n =>{
    n.addEventListener('click', ()=>{
        menu.classList.remove('nav__menu-show');
    })
})

// skills__list
const skillHeading = document.querySelectorAll('.skills__heading');
const skillLists= document.querySelectorAll('.skills__list');
const arrows= document.querySelectorAll('.arrow');

skillHeading.forEach(n =>{
    n.addEventListener('click', (e)=>{
        skillLists[n.dataset.listnum -1].classList.toggle('close');
        arrows[n.dataset.listnum -1].classList.toggle('close')
    });

})