const gradients = [
    'linear-gradient(to bottom, #d520b6, #e60098, #ee007a, #f0005d, #eb1241)',
    'linear-gradient(to right top, #bbde17, #a3e219, #86e523, #61e831, #12eb41)',
    'linear-gradient(to right top, #0fccff, #33d7f2, #5edfe3, #85e6d5, #a8eccc)'
];

const sections = document.querySelectorAll('section');
const navbg = document.getElementsByClassName('navbg')[0];
const options = {threshold : 0.7}
let observer = new IntersectionObserver(scoll_pos, options)
// console.log(sections);
sections.forEach(element => {
    observer.observe(element)
});

function scoll_pos(elems){
    elems.forEach(elem=>{
        const className = elem.target.className;
        // console.log(className)
        const nav_link = document.querySelector(`[data-page="${className}"]`);
        // console.log(`[data-page="${className}"]`);
        const gradient = elem.target.getAttribute('data-index');
        const sizes = nav_link.getBoundingClientRect();

        const values = {
            height:sizes.height,
            width:sizes.width,
            top:sizes.top,
            left:sizes.left,
        };

        if (elem.isIntersecting){
            navbg.style.setProperty("height", `${values.height}px`),
            navbg.style.setProperty("width", `${values.width}px`),
            navbg.style.setProperty("top", `${values.top}px`),
            navbg.style.setProperty("left", `${values.left}px`),
            navbg.style.background = gradients[gradient]
        }
    });
}