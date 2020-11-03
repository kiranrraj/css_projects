const modal = document.querySelector('.modal');
const gallery = document.querySelector('.gallery');
const prev_img = document.querySelectorAll('.img-container img');
const modal_img = document.querySelector('.full_img');
const caption = document.querySelector('.caption')

prev_img.forEach(prev => {
    prev.addEventListener('click', ()=>{
        modal.classList.add("open");
        modal_img.classList.add('open');
        const org_src = prev.getAttribute("data-org");
        console.log(org_src)
        modal_img.src=`./img/org/${org_src}`
        console.log(modal_img.src)

    })
})

modal.addEventListener('click', (e)=>{
    if(e.target.classList.contains('modal')){
        modal.classList.remove('open')
        modal_img.classList.remove('open')
    }
})

