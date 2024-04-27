// Sign In Page code

//Start

let signupBtn = document.getElementById("signupBtn");
let signinBtn = document.getElementById("signinBtn");
let namefield = document.getElementById("namefield");
let title = document.getElementById("title");

signinBtn.onclick =function(){
    namefield.style.maxHeight = "0";
    title.innerHTML="sign in";
    signupBtn.classList.add("disable");
    signinBtn.classList.remove("disable")
}
signupBtn.onclick =function(){
    namefield.style.maxHeight = "35px";
    title.innerHTML="sign Up";
    signupBtn.classList.remove("disable");
    signinBtn.classList.add("disable")
}

//End

// Code to popup a sign In Page

var signInButton1=document.getElementById("signInButton");
var signInContainer1=document.querySelector(".SignInContainer");

signInButton1.onclick=function(){

    signInContainer1.style.display="block";

}

var crosIcon=document.getElementById("crosIcon");

crosIcon.onclick=function(){

    signInContainer1.style.display="none";
}