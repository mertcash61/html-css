let password = document.querySelector("#YourPassword");
let show = documnet.querySelector(".show");
show.onclick = function(){
    if(password.type == "password"){
        password.setAttribute("type", "text");
        show.classList.remove("hide");
    }
};