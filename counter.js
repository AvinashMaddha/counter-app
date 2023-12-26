let counterEl = document.getElementById("counter");
let previousEnteriesEl = document.getElementById("previousEnteries");
let counter = 0

function increment(){
    counter += 1;
    counterEl.textContent = counter;
}

function save(){
    
    previousEnteriesEl.textContent += counter+" - "
    counter = 0
    counterEl.textContent = 0;
}

