let inp = document.querySelector("input");
let span = document.querySelector("span");

inp.addEventListener("input", () => {
   let remaining = 20 - inp.value.length;

   if (remaining <= 1){
    span.textContent = remaining;
    span.style.color = "red";
   }else {
    span.textContent = remaining;
    span.style.color = "green";
   }

});
