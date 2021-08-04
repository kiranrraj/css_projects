const closeBtn = document.querySelector('.header--close i');
const toggleBtn = document.querySelector('.header--toggle i');
const nav = document.querySelector('.header--nav');

closeBtn.addEventListener('click', ()=>{
    nav.classList.remove('toggle');
});

toggleBtn.addEventListener('click', ()=>{
    nav.classList.toggle('toggle');
});

toggleBtn.addEventListener('click', ()=>{
    nav.classList.toggle('active');
});