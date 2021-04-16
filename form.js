let email = document.getElementById("email");

let error= document.getElementById("error");
let password=document.getElementById("pwd");

function validate()
{
    let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
    if(regexp.test(email.value))
{
    error.innerHTML = "valid";
    error.style.color ="green";
    return true;

}
else{
    error.innerHTML="Invalid";
    error.style.color ="red";
    return false;
}
}
function CheckPassword() 
{ 
let pwd=  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
if(pwd.test(password.value)) 
{ 
alert('Correct, try another...')
return true;
}
else
{ 
alert('Wrong...!')
return false;
}
}  

// function phonenumber(inputtxt)
// {
//   var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
//   if(inputtxt.value.match(phoneno))
//      {
// 	   return true;      
// 	 }
//    else
//      {
//         error.innerHTML="Invalid";
//          error.style.color ="red";
// 	//   alert("Not a valid Phone Number");
// 	   return false;
//      }
// }
// function phonenumber(inputtxt)
// {
//     var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
//   if(inputtxt.value.match(phoneno))
//   {
//       return true;
//   }
//   else
//   {
//      alert("Not a valid Phone Number");

//      return false;
//      <a href="validate.html"> </a>
//   }
//   }
  

//     if(email.value.trim()==""||pwd.value.trim()=="")
//     {
//         alert("fields cannot be empty");
//         return false;
//     }
// else
// {

//     return true;
//     //alert("validation is proper");
// }
// if(email.value=="")
// {
// alert("email cannot be empty");
// return false;
// }
// else if(pwd.value=="")
// {
//     alert("password cannot be blank");
//     return false;
    
// }
// else if(pwd.value.length<=5)
// {
//     alert("password is too short");
//     pwd.style.border="2px solid red";
//     return false;

// }
// else{
//     return true;
// }
