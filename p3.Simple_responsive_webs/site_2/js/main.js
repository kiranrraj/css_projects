const icons = document.getElementsByClassName('icons')[0];
const navbar = document.getElementsByClassName('navbar')[0];
const i = document.getElementsByTagName('i')[0]

icons.addEventListener('click', ()=>{
    navbar.classList.toggle('show')
    icons.classList.toggle('left_move')
    i.classList.toggle('fa-times')
    i.classList.toggle('fa-bars')
});