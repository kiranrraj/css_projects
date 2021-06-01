let overlay = document.querySelector('.menu_overlay');
let parts = document.querySelector('.parts');
let part = document.querySelectorAll('.part');
let list = document.querySelectorAll('.list li');
let open = document.querySelector('.fa-bars');
let close = document.querySelector('.fa-times');

reset();

open.addEventListener('click', () => {
    overlay.style.transform = "translateY(0)";
    parts.style.transform = "translateY(0)";
    part.forEach(elem => {
        elem.style.transform = "translateY(0)";
    });

    setTimeout(()=>{
        list.forEach(elem => {
            elem.style.transform="translateY(0%)";
            elem.style.opacity = "1";
        });
    }, 500)

    open.style.opacity = 0;
});

close.addEventListener('click', () => {
    reset()
});

function reset(){
    open.style.opacity = 1;
    list.forEach(elem => {
        elem.style.opacity = "0";
        elem.style.transform="translateY(-200%)";
    });
    
    part.forEach(elem => {
        elem.style.transform = "translateY(-200%)";
    });

    parts.style.transform = "translateY(-110%)";
    overlay.style.transform = "translateY(-110%)";

}

