let emailInput = document.getElementById("eInput");
let passInput = document.getElementById("pInput");
let = document.getElementsByClassName("eInput")

let button = document.getElementById("myBtn");

button.addEventListener('click',function(){
    if(emailInput.value === "Elvi" && passInput.value === "Elvi.123"){
        alert(`Login successfully`);
    }else{
        emailInput.classList.toggle("failed");
        passInput.classList.toggle("failed");
    };

})



