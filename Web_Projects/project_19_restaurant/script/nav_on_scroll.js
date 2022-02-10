window.addEventListener('scroll', function(){
    const navBar = document.querySelector('.navBar');
    navBar.classList.toggle("collapse", window.scrollY > 0);
    console.log(window.scrollY)
})