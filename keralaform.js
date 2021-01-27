let email = document.getElementById("email");
let password= document.getElementById("password");
 function validate()
{
	if(email.value.trim()==""||password.value.trim()==""){
		alert("fields cannot be empty");
		return false;
	}
	else{
		return true;
	}
}