const header = document.querySelector('.header');
const toggleIcon = document.querySelector('.fa-bars');
toggleIcon.addEventListener('click', ()=>{
    header.classList.toggle('toggle');
})

// Scroll Top

const scrollToTop = document.querySelector('.scrollToTop');

window.addEventListener('scroll', (e)=>{
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        scrollToTop.style.display = "block";
    } else{
        scrollToTop.style.display = "none";
    }
});

console.log(scrollToTop);

scrollToTop.addEventListener('click', ()=>{
    document.documentElement.scrollTop = 0;
})
