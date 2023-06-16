let input = document.getElementById("input");
let button = document.getElementById("button");
let show = document.getElementById("show");
let hide = document.getElementById("hide");
let password_message = document.getElementById("password_message");
function myFunc() {
  if (input.type == "password" && input.value.length > 0) {
    input.type = "text";
    show.style.display = "none";
    hide.style.display = "inline-block";
  } else if (input.type == "text") {
    input.type = "password";
    show.style.display = "inline-block";
    hide.style.display = "none";
  }
}

function passwordCheck(){
  if(input.value.length==0){
    password_message.innerHTML = "";
    password_message.style.backgroundColor = "white";
  }
  else if(input.value.length<8){
    password_message.innerHTML="Password is weak";
    password_message.style.backgroundColor = "red";
  }
  else{
    password_message.innerHTML = "Password is strong";
    password_message.style.backgroundColor = "green";
  }
}