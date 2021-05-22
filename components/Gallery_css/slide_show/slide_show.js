const dots = document.querySelectorAll('.indicator');
const dot_click = document.querySelectorAll('.dot');
const slides = document.querySelectorAll('.slide');
const left = document.querySelector('.left');
const right = document.querySelector('.right');
let index = 1;


left.addEventListener('click', ()=>{
    index--;
    showSlide(index)
});


right.addEventListener('click', ()=>{
    index++;
    showSlide(index)
});


function showSlide(n){
    if(n < 1){
        index = slides.length;
    }

    if(n > slides.length){
        index = 1;
    }

    for (var i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("dot_active", "");
    }

    slides[index-1].classList.add('active');
    dots[index-1].classList.add("dot_active");
}

