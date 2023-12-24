let container = documnet.querySelector(".container");
documnetEventListener("keyup", function (e) {
    let password = documnet.querySelector("#YourPassword").value;

    let strength = Strength(passWord);
    if(strength <2){
        container.classList.add("weak");
        container.classList.remove("moderate");
        container.classList.remove("strong");
    } else if(strength > 2 && strength < 4){
        container.classList.remove("weak");
        container.classList.remove("moderate");
        container.classList.add("strong");
    }
});