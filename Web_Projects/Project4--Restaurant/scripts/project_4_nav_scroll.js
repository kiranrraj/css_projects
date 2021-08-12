
const navBar = document.querySelector('.navBar');
console.log(navBar);

window.addEventListener('scroll', (e)=>{
    const navBar = document.querySelector('.navBar');

    if(this.scrollY >=10) {
        navBar.classList.add('navBar--changed');
    } else{
        navBar.classList.remove('navBar--changed');
    }
})