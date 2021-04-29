let count = 0, prev = 4;
let arr = document.querySelectorAll('.item');
arr[count].classList.add('active');

function incrementCounter(){
    count++;
    prev = count - 1;
    if (count == arr.length){
        count = 0;
        prev = 4;
    }
    
    arr[count].classList.add('active');
    setInterval(arr[prev].classList.remove('active'), 3000);
}

setInterval(incrementCounter, 3000);
