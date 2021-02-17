





const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const phonenumber = document.getElementById('phonenumber');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
	
});

function checkInputs() {
	 //trim to remove the whitespaces
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();
	const phonenumberValue = phonenumber.value.trim();

	
	
	if(usernameValue === '') {
	 	setErrorFor(username, 'Username cannot be blank');
	 } else {
	 	setSuccessFor(username);
	 }
	
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}
	
	if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
	}else if (!isPassword(passwordValue)) {
		setErrorFor(password, 'Not a valid password');
	}
	 else {
		setSuccessFor(password);
	}
	
	if(password2Value === '') {
		setErrorFor(password2, 'Password2 cannot be blank');
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Passwords does not match');
	} else{
		setSuccessFor(password2);
	}

	if(phonenumberValue === '') {
		setErrorFor(phonenumber, 'Phone number cannot be blank');
	} else if (!isPhonenumber(phonenumberValue)) {
		setErrorFor(phonenumber, 'Not a valid phonenumber');
	} else {
		setSuccessFor(phonenumber);
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
function isPassword(password) {
	return /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/.test(password);
}
 function isPhonenumber(phonenumber) {
	 return /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(phonenumber);
 }



 //password strength
const indicator=document.querySelector(".indicator");
const input=document.querySelector(".input");
const weak=document.querySelector(".weak");
const medium=document.querySelector(".medium");
const strong=document.querySelector(".strong");
const itext=document.querySelector(".text");
let regExpWeak = /[a=z]/;
let regExpMedium = /\d+/;
let regExpStrong = /[!,@,#,$,%,^,&,*,?,_,-,(,)]/;

function trigger(){
	if(input.value !="")
	{
		indicator.style.display ="block";
		indicator.gstyle.display ="flex";
		if(input.value.length <= 3 &&(input.value.match(regExpWeak) || input.value.match(regExpMedium) || input.value.match(regExpStrong)))no=1;
		if(input.value.length >= 6 &&(input.value.match(regExpWeak) && input.value.match(regExpMedium) || input.value.match(regExpMedium)&& input.value.match(regExpStrong)))no=1;
		if(no == 1)
	{
		weak.classList.add("active");
		Text.style.display("block");
		Text.textContent
}
	}
	else{

	}
}