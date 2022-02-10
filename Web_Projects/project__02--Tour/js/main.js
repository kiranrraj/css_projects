const toggleBtn = document.querySelector('.toggleBtn');
const closeBtn = document.querySelector('.closeBtn');
const navbar = document.querySelector('.navbar');

toggleBtn.addEventListener('click', () => {
    navbar.style.transform = 'translateX(0%)';
    console.log("working");
})

closeBtn.addEventListener('click', () => {
    navbar.style.transform = 'translateX(-200%)';
    console.log("working");
});


// Search
const searchBtn = document.querySelector('.searchBtn');
const closeSearch = document.querySelector('.closeSearch');
const searchWindow = document.querySelector('.search');

searchBtn.addEventListener('click', () => {
    searchWindow.style.transform = 'translateX(0%)';
});

closeSearch.addEventListener('click', () => {
    searchWindow.style.transform = 'translateX(-200%)';
});