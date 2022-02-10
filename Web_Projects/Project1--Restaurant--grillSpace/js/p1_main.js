const showMenu = (toggle, list) => {
    const toggleBtn = document.querySelector(`.${toggle}`);
    const menu = document.querySelector(`.${list}`);

    if (toggleBtn && menu) {
        toggleBtn.addEventListener('click', () => {
            menu.classList.toggle('showMenu');
        })
    }
}

showMenu('nav__toggle', 'nav__menu');


const menuLinks = document.querySelectorAll('.menu--links');
menuLinks.forEach(link => link.addEventListener('click', () => {
    document.querySelector('.nav__menu').classList.remove('showMenu');
}));



const sections = document.querySelectorAll('.section');


function scrollActive() {
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 48;

        let sectionId = section.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(`.menu--item a[href*="${sectionId}"]`).classList.add('activeItem');
        } else {
            document.querySelector(`.menu--item a[href*="${sectionId}"]`).classList.remove('activeItem');
        }
    })
}

window.addEventListener('scroll', scrollActive);


const scrollTopBtn = document.querySelector('.scrollTop');
scrollTopBtn.addEventListener('click', () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
})

function scrollTop() {
    if(this.scrollY >= 560){
        scrollTopBtn.classList.add('showArrow');
    } else {
        scrollTopBtn.classList.remove('showArrow');
    }
}

window.addEventListener('scroll', scrollTop);