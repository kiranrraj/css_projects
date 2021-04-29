let count = 0;
let arr = document.querySelectorAll('.item');
let leftBtn = document.querySelector('.left');
let rightBtn = document.querySelector('.right');
let max = arr.length
showImage(count);

function showImage(index){
    
    if (index < 0) count = max-1;

    if (index >= max) count = 0;

    for( var i=0; i<max; i++){
        arr[i].style.display = "none";
    }

    arr[count].style.display = "block"
}

function nextBtn(){
    count++;
    showImage(count);
}

function prevBtn(){
    count--;
    showImage(count);
}

leftBtn.addEventListener('click', nextBtn);
rightBtn.addEventListener('click', prevBtn);
