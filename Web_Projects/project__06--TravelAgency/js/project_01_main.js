const toggleBtn = document.querySelector(".nav--toggle");
const icon = document.querySelector(".nav--toggle i");
const menu = document.querySelector(".nav--menu");

function toggle(){
    menu.classList.toggle('menuActive');
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-times");
}

toggleBtn.addEventListener('click', toggle);


window.addEventListener('resize', ()=>{
    menu.classList.remove('menuActive');
    icon.classList.add("fa-bars");
    icon.classList.remove("fa-times");
});


const itemList = document.querySelectorAll(".menu--list");
itemList.forEach(elem =>{
    elem.addEventListener('click', toggle);
});


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
    document.querySelector('.nav').style.backgroundColor = "rgba(0,0,0,0.4";
  } else {
    document.querySelector('.nav').style.backgroundColor = "rgba(0,0,0,0";
  }
}


