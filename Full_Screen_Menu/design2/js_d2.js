let side1 = document.querySelector('.side1');
let side2 = document.querySelector('.side2');
let overlay = document.querySelector('.menu_overlay');
let open = document.querySelector('.fa-bars');
let close = document.querySelector('.fa-times');
let list = document.querySelectorAll('.item');

open.addEventListener('click', ()=>{
    overlay.style.transform = "translateX(0)";
    side2.style.transform = "translateX(0)";
})

close.addEventListener('click', ()=>{
    overlay.style.transform = "translateX(110%)";
    side2.style.transform = "translateX(-110%)";
});

list.forEach(elem =>{
    elem.addEventListener('mouseover', ()=>{
        let anchor = elem.getElementsByTagName('a')[0];
        let anchorColor = window.getComputedStyle(anchor).getPropertyValue('color');
        console.log(anchor, anchorColor);
        side2.style.background = `linear-gradient(to left, #4b134f, ${anchorColor})`;
    });
    elem.addEventListener('mouseleave', ()=>{
        side2.style.background = `linear-gradient(to left, #4b134f, #c94b4b`;
    })
})