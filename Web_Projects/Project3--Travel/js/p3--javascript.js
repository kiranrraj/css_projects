// Login Form Open / Close
const loginClose = document.querySelector('.login--close');
const user = document.querySelector('.fa-user');
const loginForm = document.querySelector('.form--login');

user.addEventListener('click', ()=>{
    loginForm.classList.add('active');
    searchDiv.classList.remove('active');
})

loginClose.addEventListener('click', ()=>{
    loginForm.classList.remove('active');
})

// Login Form Open / Close -- Ends

const search = document.querySelector('.fa-search');
const searchDiv = document.querySelector('.navBar--search');
const searchClose = document.querySelector('.search--close');

search.addEventListener('click', ()=>{
    searchDiv.classList.toggle('active');
});

searchClose.addEventListener('click', ()=>{
    searchDiv.classList.remove('active'); 
})


// Full Screen Navigation Menu
const navBar = document.querySelector('.navBar--content');
const menuIcon = document.querySelector('.fa-bars');

menuIcon.addEventListener('click', ()=>{
    navBar.classList.toggle('activeNav');
})

