var navbar = document.getElementsByClassName('navbar')[0];
var sticky = navbar.offsetTop;
var menu_btn = document.getElementsByClassName('menu-btn')[0];
var menu = document.getElementsByClassName('menu')[0]
var icon = document.getElementsByClassName('fas')[0]

function myFunction() {
    // console.log('navTop = ' + sticky);
    // console.log('scrollY = ' + window.scrollY)

    if(window.scrollY > sticky){
        navbar.classList.add('sticky')
    }else {
        navbar.classList.remove('sticky')
    }
}

function toggleIcon(){
    // console.log(menu)
    menu.classList.toggle('active');
    icon.classList.toggle('active')

}

window.addEventListener('scroll', myFunction)
menu_btn.addEventListener('click', toggleIcon)