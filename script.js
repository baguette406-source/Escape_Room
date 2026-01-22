// COUNTER PROGRAM

const decreaseBtn = document.getElementById("decreaseBtn")
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


const decreaseBtn2 = document.getElementById("decreaseBtn2");
const increaseBtn2 = document.getElementById("increaseBtn2");
const countLabel2 = document.getElementById("countLabel2");
let count2 = 0;

increaseBtn2.onclick = function(){
    count2++;
    if(count2 > 9){
        count2 = 0;
    }
    countLabel2.textContent = count2;
}

decreaseBtn2.onclick = function(){
    count2--;
    if(count2 < 0){
        count2 = 9;
    }
    countLabel2.textContent = count2;
}


