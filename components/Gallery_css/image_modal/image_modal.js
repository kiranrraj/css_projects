const img = document.querySelector('.img');
let url = window.getComputedStyle(img).background.split(' ')[4];
let alt_text = img.getAttribute('alt');
const modal_img = document.querySelector('.modal--img');
const modal_text = document.querySelector('.modal--text');
const close = document.querySelector('.modal--btn');
const modal = document.querySelector('.modal');
const btn = document.querySelector('.btn');

btn.addEventListener('click', ()=>{
    modal_img.style.backgroundImage = `${url}`;
    modal.style.display = "flex";
    modal_text.textContent = alt_text;
    console.log(url);
});

close.addEventListener('click', ()=>{
    modal_img.style.backgroundImage = `${url}`;
    modal.style.display = "none"
    console.log(url);
});