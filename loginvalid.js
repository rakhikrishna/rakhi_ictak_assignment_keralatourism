

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
	
	const usernameValue = username.value.trim();
	const passwordValue = password.value.trim();
	
	
	if(usernameValue === ''&& passwordValue === '') {
		setErrorFor(username, 'username cannot be blank');
		setErrorFor(password, 'Password cannot be blank');
	} else if (usernameValue=='admin'&& passwordValue == '12345') {
		setSuccessFor(username);
		setSuccessFor(password);
		window.open('newtrialcopy.html');
		
	} else {
		
		setErrorFor(username, 'Not a valid username');
		setErrorFor(password, 'Not a valid password');
	}
	
	// if(passwordValue === '') {
	// 	setErrorFor(password, 'Password cannot be blank');
	// }else if (passwordValue!=12345) {
	// 	setErrorFor(password, 'Not a valid password');
	// }
	//  else {
	// 	setSuccessFor(password);
	// 	window.open('newtrial.html')
	// }
	
	
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
	

// const submit =document.getElementById('submit');
// submit.addEventListener('submit', e => {
// 	e.preventDefault();
// 	submit();
	
// });


 function submit()
  {
	  document.location.href="keralatourism.html";
  }
