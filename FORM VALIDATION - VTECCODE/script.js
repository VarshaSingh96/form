const submitbtn = document.getElementById('submitbtn');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passError = document.getElementById('passError');
let name = document.getElementById('name');
let email = document.getElementById('email');
let password = document.getElementById('password');

submitbtn.addEventListener('click',(e) =>{
    e.preventDefault();

    if(validateName() && validateEmail() && validatePassword()){
        alert("Form Submitted Successfully"); 
        name .value = "";
        email.value = "";
        password.value = "";
    }
    
});

function validateName(){
   let Name = name.value;

    if(Name.length == 0 ){
         nameError.innerHTML = "Name is required";
         nameError.previousElementSibling.classList.add('fa-xmark');
         return false;
    }

    if(!Name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = "Write Full Name";
        nameError.previousElementSibling.classList.add('fa-xmark');
         return false;
    }
    nameError.innerHTML = "";
    nameError.previousElementSibling.classList.add('fa-check');
    return true;   
    
}

function validateEmail(){
    let Email = email.value;

    if(Email.length == 0 ){
         emailError.innerHTML = "Email is required";
         emailError.previousElementSibling.classList.add('fa-xmark');
         return false;
    }

    if(!Email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
        emailError.innerHTML = "Enter Valid Email";
        emailError.previousElementSibling.classList.add('fa-xmark');
         return false;
    }
    emailError.innerHTML = "";
    emailError.previousElementSibling.classList.add('fa-check');
    return true;
}

function validatePassword(){
    let Password = password.value;

    if(Password.length == 0 ){
         passError.innerHTML = "Password is required";
         passError.previousElementSibling.classList.add('fa-xmark');
         return false;
    }

    if(!Password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,30}$/)){
        passError.innerHTML = "Password should contain uppercase, 1 Lowercase, 1 Digit & 1 Alphabet";
        passError.previousElementSibling.classList.add('fa-xmark');
         return false;
    }
    passError.innerHTML = "";
    passError.previousElementSibling.classList.add('fa-check');
    return true;
}
