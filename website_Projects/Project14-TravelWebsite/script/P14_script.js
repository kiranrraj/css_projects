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

const iconLeft = document.querySelector('.icon--left');
const iconRight = document.querySelector('.icon--right');
const slides = document.querySelectorAll('.slide');
let i = 0;
slides[i].classList.add('active');

function moveForward(slides){
    if(i == 2){
        i = -1
    }
    i++;
    displaySlide(slides)
}


function moveBackwards(slides){
    i--;
    if(i <0){
        i=2;
    }
    displaySlide(slides) 
}

function displaySlide(array){
    array.forEach(elem=>{
        elem.classList.remove('active')
    })
    array[i].classList.add('active');
}

iconLeft.addEventListener('click', ()=>{
    moveBackwards(slides);
});

iconRight.addEventListener('click', ()=>{
    moveForward(slides);
});
