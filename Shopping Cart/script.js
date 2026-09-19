let buttons = document.querySelectorAll(".productButton")

buttons.forEach((b) => {
    b.addEventListener("click", function() {

        let card = this.parentElement.parentElement;
        let name = card.querySelector(".productname");
        let fname = name.textContent;

        alert(`${fname} was added to cart`);
        
    });
});