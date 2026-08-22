let form = document.querySelector("form");
let email = document.querySelector("#email");
let password = document.querySelector("#password");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    document.querySelector("#emailerror").textContent = "";
    document.querySelector("#passworderror").textContent = "";

    let flag = true;
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
    let emailans = emailRegex.test(email.value);
    let passwordans = passwordRegex.test(password.value);

    if(!emailans){
        document.querySelector("#emailerror").textContent = "Email is incorrect";
        document.querySelector("#emailerror").style.display = "initial";
        flag = false;
    }

    if(!passwordans){
        document.querySelector("#passworderror").textContent = "Password is incorrect";
        document.querySelector("#passworderror").style.display = "initial";
        flag = false;
    }

    if(flag){
        let res = document.querySelector("#resultmessage").textContent = "Matched";
        
    }else{
        let res = document.querySelector("#resultmessage");
        res.style.color = "red";
    }
});