let buttons = document.querySelectorAll(".productButton")
let cart = [];

let total = 0;

buttons.forEach((b) => {
    b.addEventListener("click", function() {

        let card = this.parentElement.parentElement;
        let name = card.querySelector(".productname");
        let fname = name.textContent;
        let price = card.querySelector(".productPrice");
        let pprice = price.textContent;

        let numprice = parseFloat(pprice.replace("$",""));
        cart.push({
            name : fname,
            cost : numprice
        })
        console.log(cart);
        
        total = total + numprice;
        console.log(total);
        
        let carttotal = document.querySelector(".cartTotal");

        let createLi = document.createElement("li");
        let ol = document.querySelector(".listOfFruits");
        ol.appendChild(createLi);

        createLi.textContent = `Fruit Name : ${fname} Value : $${numprice}`;
        carttotal.textContent = `Total Cart Value : $${total}`;

        let removebutton = document.createElement("button");
        removebutton.textContent = "remove item";

        createLi.appendChild(removebutton);

        removebutton.addEventListener("click", function() {
            this.parentElement.remove();
            total = total - numprice;
            carttotal.textContent = `Total Cart Value : $${total}`;
        })

    });
});