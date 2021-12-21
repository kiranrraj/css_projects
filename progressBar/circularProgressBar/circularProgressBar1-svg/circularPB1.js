const circle = document.querySelector('.circle')
const text = document.querySelector('.text')
const radius = circle.r.baseVal.value;
const circumference = radius * 2 * Math.PI; 
const root = document.documentElement;
let percentage = 0;

root.style.setProperty('--strokeDashArray', circumference);
// console.log(radius, circumference);

function progress(val) {
    const strokeDashOffset = circumference - val / 100 * circumference;
    root.style.setProperty('--strokeDashOffset', strokeDashOffset);
    text.textContent = `${val}%`
}

const intervalVariable = setInterval(()=>{
    progress(percentage);
    percentage++;
    // console.log(percentage)

    if(percentage> 100) {
        clearInterval(intervalVariable);
    };
}, 100)

