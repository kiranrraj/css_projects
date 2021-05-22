const slides = document.querySelectorAll('.slide');
const thumbs = document.querySelectorAll('.thumb');
const left = document.querySelector('.left');
const right = document.querySelector('.right');

let index = 1;

left.addEventListener('click', ()=>{
    index--;
    showSlide(index)
})

right.addEventListener('click', ()=>{
    index++;
    showSlide(index)
})

function showSlide(n){
    index = n;
    if(n < 1){
        index = slides.length;
    }

    if(n > slides.length){
        index = 1;
    }
    clearActive();
    slides[index-1].classList.add('active');
    thumbs[index-1].classList.add('active_t');
}


function clearActive(){
    for (var i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
    }

    for (var i = 0; i < thumbs.length; i++) {
        thumbs[i].classList.remove('active_t');
    }
}

thumbs.forEach((elem, idx)=>{
    elem.addEventListener('click', ()=>{
        showSlide(idx+1);
    })
})