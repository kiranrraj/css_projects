let side1 = document.querySelector('.side1');
let side2 = document.querySelector('.side2');
let list = document.querySelector('.list');
let overlay = document.querySelector('.menu_overlay');
let open = document.querySelector('.fa-bars');
let close = document.querySelector('.fa-times');


open.addEventListener('click', ()=>{
    list.style.left = "-50%";
    overlay.style.transform = "translateY(0)";
    side2.style.transform = "translateX(0%)";
    side1.style.transform = "translateY(0%)";
})

close.addEventListener('click', ()=>{
    list.style.left = "200%";
    overlay.style.transform = "translateY(-110%)";
    side1.style.transform = "translateY(100%)";
    side2.style.transform = "translateX(-100%)";
})