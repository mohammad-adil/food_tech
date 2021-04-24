$(document).on('click', '#signup', function() {
  let name = document.getElementById('#name').value
  let email = document.getElementById('#email').value
  let phone = document.getElementById('#phone').value
  let password = document.getElementById('#password').value
<<<<<<< Updated upstream
  let department = document.getElementById('#department').value
  let id = document.getElementById('#eid').value
let UserDetails ={
   'name': name,
   'email':email,
   'phone':phone,
   'password':password,
   'department':department,
   'id':id,
   'role':"user"
}


=======
  let confirmpassword = document.getElementById('#confirmpassword').value
  let department = document.getElementById('#department').value
  let id = document.getElementById('#eid').value
let UserDetails ={
   name,
   email,
   phone,
   password,
   confirmpassword,
   department,
   id,
   role:"user"
}
var ver= formValidate(UserDetails);
var pas= checkPasswordMatch(UserDetails);
if(ver==true && pas==true){
   SendData(UserDetails);
}
>>>>>>> Stashed changes
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

/*$(document).on('click','#LoginBtn', function(){


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




}) */