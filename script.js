// COUNTER PROGRAM

const decreaseBtn = document.getElementById("decreaseBtn")
const resetBtn = document.getElementById("resetBtn")
const increaseBtn = document.getElementById("increaseBtn")
const countLabel = document.getElementById("countLabel")
let count=0;

increaseBtn.onclick = function(){
    count++;
    if(count > 9){
        count = 0;
    }
    countLabel.textContent = count;
}
decreaseBtn.onclick = function (){
    count--;
    if(count < 0){
        count=9;
    }
    countLabel.textContent=count;
}

resetBtn.onclick = function (){
    count = 0;
    countLabel.textContent=count;
}

