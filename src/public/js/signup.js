

$(document).on('click', '#signup', function() {
   let name = document.getElementById('#name').value
   let email = document.getElementById('#email').value
   let phone = document.getElementById('#phone').value
   let password = document.getElementById('#password').value
   let confirmpassword = document.getElementById('#confirmpassword').value
   let department = document.getElementById('#department').value
   let eid = document.getElementById('#eid').value

let UserDetails ={
    name,
    email,
    phone,
    password,
    confirmpassword,
    department,
    eid,
}

var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
var phoneformat = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
if(UserDetails.name ==""){
    document.getElementById('Nameid').innerHTML= "**Please fill Name";
  }

 else if(!isNaN(UserDetails.name)){
    document.getElementById('Nameid').innerHTML= "**Please enter character";
  }
 else if(UserDetails.email ==""){
    document.getElementById('emailid').innerHTML= "**Please fill Email";
  }
 
 else if(!(UserDetails.email.match(mailformat))){
    document.getElementById('emailid').innerHTML="**Please provide a valid email address";
  }

 else if(UserDetails.phone ==""){
    document.getElementById('phoneid').innerHTML= "**Please fill Phone Number";
  }

 else if(!(UserDetails.phone.match(phoneformat))){

    document.getElementById('phoneid').innerHTML="Please provide a valid phone number";
  }

 else if(UserDetails.password =="" && ((UserDetails.password.length<5)||(UserDetails.passsword.length>20))){
    document.getElementById('passwordid').innerHTML= "****Please fill Password between 6 and 20";
  }

 else if(UserDetails.confirmpassword =="" && (!(UserDetails.password==UserDetails.confirmpassword))){
    document.getElementById('cpasswordid').innerHTML= "**Passwords do not match";
  }

 else if(UserDetails.eid ==""){
    document.getElementById('empid').innerHTML= "**Please fill Employee ID";
  }
  else {
    SendData(UserDetails);
  }



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