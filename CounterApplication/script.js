let count = 0;

let countChange = document.querySelector(".count");
let increase = document.querySelector("#increase");
let decrease = document.querySelector("#decrease");
let reset = document.querySelector("#reset");

// countChange.addEventListener("click", function(){
//     count
// })

increase.addEventListener("click", function(){
    count++;
    countChange.textContent = count;
    countChange.style.color = "green";
    if(count == 10){
        alert("You hit the limit.")
        count = countChange.textContent = 0;
    }
    document.querySelector("#h1").textContent = "Increasing Count";

});

decrease.addEventListener("click", function(){
    count--;
    countChange.textContent = count;
    countChange.style.color = "red";

    if(count < 0){
        alert("cannot count in negative numbers.")
        count = countChange.textContent = 0;
    }
    
    document.querySelector("#h1").textContent = "Decreasing Count";
});

reset.addEventListener("click", function(){
    count = 0;
    countChange.textContent = count;
    
    document.querySelector("#h1").textContent = "Reset to Initial";
});