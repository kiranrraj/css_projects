let overlay = document.querySelector('.menu_overlay');
let open = document.querySelector('.fa-bars');
let close = document.querySelector('.fa-times');

open.addEventListener('click', () => {
    overlay.style.transform = "translateY(0)";
})

close.addEventListener('click', () => {
    overlay.style.transform = "translateY(-110%)";
})


function findObjectCoords(e) {
    let dot = document.querySelector(".dot");
    dot.style.left = `${e.clientX - 20}px`;
    dot.style.top = `${e.clientY - 20}px`;
}

document.querySelector(".menu_overlay").addEventListener("mousemove", (e) => {
    findObjectCoords(e);
});