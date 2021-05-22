const menu_icon = document.querySelector('.menuBtn i');
const menu_list = document.querySelector('.navBar__full');

menu_icon.addEventListener('click', ()=>{
    menu_list.classList.toggle('menuActive');
    menu_icon.classList.toggle('fa-bars');
    menu_icon.classList.toggle('fa-times');
    console.log("clicked")
})