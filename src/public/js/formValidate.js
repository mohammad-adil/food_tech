var formValidate = function(UserDetails){



    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var phoneformat = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if(UserDetails.name ==""){
        document.getElementById('Nameid').innerHTML= "**Please fill Name";
        return false;
      }
    
     else if(!isNaN(UserDetails.name)){
        document.getElementById('Nameid').innerHTML= "**Please enter character";
        return false;
      }
     else if(UserDetails.email ==""){
        document.getElementById('emailid').innerHTML= "**Please fill Email";
        return false;
      }
     
     else if(!(UserDetails.email.match(mailformat))){
        document.getElementById('emailid').innerHTML="**Please provide a valid email address";
        return false;
      }
    
     else if(UserDetails.phone ==""){
        document.getElementById('phoneid').innerHTML= "**Please fill Phone Number";
        return false;
      }
    
     else if(!(UserDetails.phone.match(phoneformat))){
    
        document.getElementById('phoneid').innerHTML="Please provide a valid phone number";
        return false;
      }
    
     else if(UserDetails.password =="" && ((UserDetails.password.length<5)||(UserDetails.passsword.length>20))){
        document.getElementById('passwordid').innerHTML= "**Please fill Password between 6 and 20";
        return false;
      }
    
     else if(UserDetails.confirmpassword =="" && UserDetails.password != UserDetails.confirmpassword){
        document.getElementById('cpasswordid').innerHTML= "**Passwords do not match";
        return false;
      }
    
     else if(UserDetails.eid ==""){
        document.getElementById('empid').innerHTML= "**Please fill Employee ID";
        return false;
      }
    else{
      document.getElementById('phoneid').innerHTML=".";
      document.getElementById('emailid').innerHTML=".";
      document.getElementById('Nameid').innerHTML=".";
      document.getElementById('passwordid').innerHTML=".";
      document.getElementById('cpasswordid').innerHTML=".";
      document.getElementById('empid').innerHTML=".";
      return checkPasswordMatch();
    }
}
function checkPasswordMatch() {
  var passsword = document.getElementById('#password').value;
  var confirmpassword = document.getElementById('#confirmpassword').value;
  
  if (passsword != confirmpassword){
   $("#errorid").html("Passwords do not match!");
  return false;
  }
  else{
   $("#errorid").html("Passwords match.");
  return true;
  }
  }

$(document).ready(function () {
 $("#password, #confirmpassword").keyup(checkPasswordMatch);
});