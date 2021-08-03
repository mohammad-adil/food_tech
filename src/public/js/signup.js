

$(document).on('click', '#signup', function () {
   let name = document.getElementById('#name').value
   let email = document.getElementById('#email').value
   let phone = document.getElementById('#phone').value
   let password = document.getElementById('#password').value
   let department = document.getElementById('#department').value
   let id = document.getElementById('#eid').value
   let UserDetails = {
      'name': name,
      'email': email,
      'phone': phone,
      'password': password,
      'department': department,
      'id': id,
      'role': "user"
   }


   let confirmpassword = document.getElementById('#confirmpassword').value

   var ver = formValidate(UserDetails);
   var pas = checkPasswordMatch(UserDetails);

   /// send data to server
   UserDetails = JSON.stringify(UserDetails)
   var xhr = new XMLHttpRequest();
   //xhr.withCredentials = true;
   xhr.addEventListener("readystatechange", function () {
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

$(document).on('click', '#LoginBtn', async function () {


   let email = document.getElementById('Sname').value
   let password = document.getElementById('Spassword').value


   let data = {
      email,
      password
   }



   /// send data to server
   data = JSON.stringify(data)

   console.log(data)

   let result = await fetch("/loginUser", {
      method: "POST",
      redirect: "follow",
      headers: new Headers({
         'Content-Type': "application/json"
      }),
      body: data
   })

   if (result.redirected) {
      window.location.assign(result.url)
   }

   // if(result.status===200)
   // {let response=(await result.json())
   //    window.location.assign(`${response.url}?token=${response.token}`)
   // }
})



   /// get department
   data = JSON.stringify(data)

   console.log(data)

   let result = await fetch("/stockpile/v1/department/getDepartment", {
      method: "GET",
      headers: new Headers({
         'Content-Type': "application/json"
      }),
      body: data
   })

   if (result.redirected) {
     // window.location.assign(result.url)
     console.log("i am here")
   }




