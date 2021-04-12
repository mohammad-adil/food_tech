

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


alert('Vaid Mail')

} else{
    alert('Enter Vaid Mail')
    document.signupForm.name.focus();
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