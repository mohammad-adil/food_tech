

$(document).on('click', '#signup', function() {
   let name = document.getElementById('#name').value
   let email = document.getElementById('#email').value
   let phone = document.getElementById('#phone').value
   let password = document.getElementById('#password').value
   let department = document.getElementById('#department').value
   let id = document.getElementById('#id').value

let UserDetails ={
    name,
    email,
    phone,
    password,
    department,
    id
}


/// Validate Email then password
var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
if(UserDetails.email.match(mailformat)){


} else{
    alert('Please provide a valid email address')
    email.focus;
    return false;
    
}
if(name==null || name=="" ){
    alert("Name can't be blank");
    return false;
}
if(password.lenght<6){
    alert("Password must be atleast 6 character long");
    return false;
}
("(0/91)?[7-9][0-9]{9}")

var phoneformat = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
if(UserDetails.phone.match(phoneformat)){


} else{
    alert('Please provide a valid phone number')
    phone.focus;
    return false;
    
}



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

})







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