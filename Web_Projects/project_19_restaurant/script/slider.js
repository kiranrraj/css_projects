let slides = document.getElementsByClassName("slide");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let index = 0;

function slideShow(n){
    index = index + n;
    console.log(index, n)
    if(index >= slides.length){
        index = 0;
    }
    
    if(index < 0){
        index = slides.length-1;
    }

    for(let i=0; i<slides.length; i++){
        slides[i].classList.remove('active');
    }

    slides[index].classList.add('active');

}

function moveForwards(){
    slideShow(1);
    // console.log("Working");
}

function moveBackwards(){
    slideShow(-1);
    console.log(index);
}

next.addEventListener('click', moveForwards);
prev.addEventListener('click', moveBackwards);