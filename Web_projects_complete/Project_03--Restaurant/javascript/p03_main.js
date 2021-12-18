const nav = document.querySelector('.nav');

document.addEventListener('scroll', ()=>{
    nav.classList.toggle("bgClass", window.scrollY > 0);
})