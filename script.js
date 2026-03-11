let score = 0

function selectScore(value){

score += value

alert("Current Score: " + score)

}
function registerUser(){

let firstName=document.getElementById("firstName").value
let lastName=document.getElementById("lastName").value
let email=document.getElementById("email").value
let password=document.getElementById("password").value

if(firstName=="" || lastName=="" || email=="" || password==""){

Swal.fire({
title:"Fill all fields",
icon:"warning",
customClass:{popup:'small-popup'},
showConfirmButton:false,
timer:1500
})

return
}

localStorage.setItem("firstName",firstName)
localStorage.setItem("lastName",lastName)
localStorage.setItem("email",email)
localStorage.setItem("password",password)

Swal.fire({

title:"Registration Successful",
icon:"success",

customClass:{popup:'small-popup'},

showConfirmButton:false,
timer:1800

}).then(()=>{

window.location.href="login.html"

})

}

function loginUser(){

let email=document.getElementById("loginEmail").value
let password=document.getElementById("loginPassword").value

let savedEmail=localStorage.getItem("email")
let savedPassword=localStorage.getItem("password")

if(email===savedEmail && password===savedPassword){

Swal.fire({

title:"Login Successful",

customClass:{popup:'small-popup'},

showConfirmButton:false,

timer:1500

}).then(()=>{

window.location.href="index.html"

})

}

else{

Swal.fire({

title:"Invalid Credentials",

customClass:{popup:'small-popup'},

showConfirmButton:false,

timer:1500

})

}

}