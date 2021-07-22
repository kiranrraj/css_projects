const btn = document.querySelectorAll('.btn');
const main = document.querySelector('.main');
const overlay = document.querySelector('.overlay');

const closeBtn1 = document.querySelector('.one .closeBtn');
const navBar1 = document.querySelector('.one');


const closeBtn2 = document.querySelector('.two .closeBtn');
const navBar2 = document.querySelector('.two');


const closeBtn3 = document.querySelector('.three .closeBtn');
const navBar3 = document.querySelector('.three');


const closeBtn4 = document.querySelector('.four .closeBtn');
const navBar4 = document.querySelector('.four');


btn.forEach((elem)=>{
    elem.addEventListener('click',()=>{
        if(elem.dataset.num == 1){
            navBar1.style.width = '200px';
        }else if(elem.dataset.num == 2){
            navBar2.style.width = '200px';
        }else if(elem.dataset.num == 3){
            navBar3.style.width = '200px';
            main.style.left = "200px"

        }else if(elem.dataset.num == 4){
            navBar4.style.width = '200px';
            overlay.style.width = `calc(100% - 200px)`;
            overlay.style.left = `200px`;
        }
    })
})

closeBtn1.addEventListener('click', ()=>{
    navBar1.style.width = '0px';
});

closeBtn2.addEventListener('click', ()=>{
    navBar2.style.width = '0px';
});

closeBtn3.addEventListener('click', ()=>{
    navBar3.style.width = '0px';
    main.style.left = "0px";
    main.style.width="100%";
});

closeBtn4.addEventListener('click', ()=>{
    navBar4.style.width = '0px';
    overlay.style.width = '0px';
    overlay.style.left = `0px`;
});