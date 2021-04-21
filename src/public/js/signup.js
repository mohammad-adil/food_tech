

$(document).on('click', '#signup', function() {
   let name = document.getElementById('#name').value
   let email = document.getElementById('#email').value
   let phone = document.getElementById('#phone').value
   let password = document.getElementById('#password').value
   let confirmpassword = document.getElementById('#confirmpassword').value
   let department = document.getElementById('#department').value
   let id = document.getElementById('#id').value

let UserDetails ={
    name,
    email,
    phone,
    password,
    confirmpassword,
    department,
    id
}

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
    email.focus;
    return false;
    
}
  else if(USerDetails.id ==""){
    document.getElementById('Empid').innerHTML= "**Please fill Employee ID";
    return false
  }
  else if(UserDetails.phone ==""){
    document.getElementById('phoneid').innerHTML= "**Please fill Phone Number";
    return false;
  }
  if(!(UserDetails.phone.match(phoneformat))){

    document.getElementById('phoneid').innerHTML="Please provide a valid phone number";
    phone.focus;
    return false;
    
}
  else if(UserDetails.password ==""){
    document.getElementById('passwordid').innerHTML= "**Please fill Password";
    return false;
  }

  else if((UserDetails.password.length<5)||(UserDetails.passsword.length>20)){
    document.getElementById('passwordid').innerHTML= "**Please fill Password between 6 and 20";
    return false;
  }
  else if(UserDetails.password!=UserDetails.confirmpassword){
    document.getElementById('cpasswordid').innerHTML= "**Passwords do not match";
  }
  else if(UserDetails.confirmpassword ==""){
    document.getElementById('cpasswordid').innerHTML= "**Please fill Confirm Password";
  }
SendData(UserDetails);
})




var SendData = function(){

  /// send data to server
UserDetails = JSON.stringify(UserDetails)
var xhr = new XMLHttpRequest();
//xhr.withCredentials = true;
xhr.addEventListener("readystatechange", function() {
    if (this.readyState === 4) {
        let jsonobj = JSON.parse(this.responseText)

        console.log(jsonobj)
        

        }
});
let url = window.location.origin
xhr.open("POST", url + "/createUser");
xhr.setRequestHeader("content-type", "application/json");
//xhr.setRequestHeader("x-auth-token", token);
//xhr.setRequestHeader("cache-control", "no-cache");
xhr.send(UserDetails)  

}







/////////////////////////////////////////// Sign in Code for the user 

$(document).on('click','#LoginBtn', function(){


    let email = document.getElementById('Sname').value
    let password = document.getElementById('Spassword').value


 let data = {
     email,
     password
 }



/// send data to server
data = JSON.stringify(data)

console.log(data)


var xhr = new XMLHttpRequest();
//xhr.withCredentials = true;
xhr.addEventListener("readystatechange", function() {
    if (this.readyState === 4) {
    

        console.log(this.responseText)
        

        }
});
let url = window.location.origin
xhr.open("POST", url + "/loginUser");
xhr.setRequestHeader("content-type", "application/json");
//xhr.setRequestHeader("x-auth-token", token);
//xhr.setRequestHeader("cache-control", "no-cache");
xhr.send(data)




})