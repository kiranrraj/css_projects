let position = 1; i=0;
let slides = document.querySelectorAll(".slideShow--content");
let indicator = document.querySelectorAll(".indicator span");
let indicatorBtn = document.querySelectorAll(".indicator");

function slideShow(n) {

  if (n > slides.length) { position = 1 }
  if (n < 1) { position = slides.length }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < indicator.length; i++) {
    indicator[i].classList.remove("activeDot");
  }

  slides[position - 1].style.display = "block";
  indicator[position - 1].classList.add("activeDot");
  // console.log(slides[position - 1], indicator[position - 1]);
}

function changeSlide(n) {
  slideShow(position += n);
}

function currentSlide(n) {
  slideShow(position = n);
}

slideShow();

let left = document.querySelector('.btn--left');
let right = document.querySelector('.btn--right');

left.addEventListener('click', () => {
  changeSlide(-1);
});

right.addEventListener('click', () => {
  changeSlide(1);
});

for (i = 0; i < indicatorBtn.length; i++) {
  indicatorBtn[i].addEventListener('click', (e) => {
    let slideId = getComputedStyle(e.target).getPropertyValue('--id');
    // console.log(parseInt(slideId)+1);
    currentSlide(parseInt(slideId)+1);
  })
}
