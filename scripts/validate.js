let signbtn = document.getElementById("emailbtn")//sign up button

function ValidateEmail(event) {
  event.preventDefault(); 

  let input = document.getElementById("email").value//email input

  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input)) {

    alert("Valid email address!");

    //return true;

  } else {

    alert("Invalid email address!");


    //return false;

  }

}
signbtn.addEventListener('click',ValidateEmail);
