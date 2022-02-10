const  landingImg = document.querySelectorAll('.Landing--img');
let landing_bg = document.querySelector('.landing');
let newBg;

landingImg.forEach(elem =>{
    elem.addEventListener("mouseenter", ()=>{
       newBg = `linear-gradient(to bottom, rgba(0,0,0,0.6) 60%, rgba(0,0,0,0.2)), url('./image/${elem.classList[0]}.jpg')`;
        landing_bg.style.background = newBg;
        landing_bg.style.backgroundPosition = "center";
        landing_bg.style.backgroundSize = "cover";
        landing_bg.style.backgroundRepeat= "no-repeat";
    });
    elem.addEventListener("mouseleave", ()=>{
        newBg = `linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.3)), url('./image/hero.jpg')`;
        landing_bg.style.background = newBg;
        landing_bg.style.backgroundPosition = "center";
        landing_bg.style.backgroundSize = "cover";
        landing_bg.style.backgroundRepeat= "no-repeat";
    })
});


