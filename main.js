let btn_toreg = document.getElementById("btn_toreg");
let btn_tolog = document.getElementById("btn_tolog");
let sigin = document.getElementById("signin");
let signup = document.getElementById("signup");


btn_toreg.onclick = function(){
    signin.classList.add("none");
    signup.classList.remove("signup_none");
}

btn_tolog.onclick = function(){
    signin.classList.remove("none");
    signup.classList.add("signup_none");
}

let pass_control = document.getElementById("pass_control");
let password = document.getElementById("password");


pass_control.onclick = function(){
    if(password.getAttribute("type") == "text"){
        password.setAttribute("type", "password");
        pass_control.classList.remove("closeEye");
        pass_control.classList.add("openEye");
    }   
    else{
        password.setAttribute("type", "text");
        pass_control.classList.add("closeEye");
        pass_control.classList.remove("openEye");
    }
}