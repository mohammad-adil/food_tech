$(document).on("click", "#sign-up-btn", async function () {
  let baseUrl = window.location.origin;
  let result = await fetch(baseUrl + "/stockpile/v1/department/getDepartment", {
    method: "GET",
  }).then((data) => {
    return data.json();
  });

  const selectionBox = document.querySelector("#department");
  let dataSelect = '<option value="select"> Select </option>';
  result.forEach((element) => {
    console.log(element);
    dataSelect += `<option value="${element._id}">${element.departmentName}</option>`;
  });

  selectionBox.innerHTML = dataSelect;
});

$(document).on("click", "#signup", async function () {
  let name = document.getElementById("#name").value;
  let email = document.getElementById("#email").value;
  let phone = document.getElementById("#phone").value;
  let password = document.getElementById("#password").value;
  let department = $("#department :selected").val();
  let universityId = document.getElementById("#eid").value;
  let dob = document.getElementById("#dob").value;
  //let userRole = document.getElementById('#userRole').value
  let gender = document.getElementById("gender").value;
console.log(gender)

  let street = document.getElementById('#street').value;
  let pin = document.getElementById('#pin').value;
  let Landmark = document.getElementById('#Landmark').value;
  let UserDetails = {
    name,
    dob,
    department,
    universityId,
    userRole: "user",
    phone,
    gender,
    address: {
      Landmark,
      pin ,
      street,
    },
    email,
    password,
  };

  let baseUrl = window.location.origin;
  let results = await fetch(baseUrl + "/stockpile/v1/signUp", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(UserDetails),
  }).then((data) => {
    return data.json();
  });

  console.log(results);
});

/////////////////////////////////////////// Sign in Code for the user

$(document).on("click", "#LoginBtn", async function () {
  let email = document.getElementById("Sname").value;
  let password = document.getElementById("Spassword").value;

  let data = {
    email,
    password,
  };

  /// send data to server
  data = JSON.stringify(data);
  console.log(data);
  let baseUrl = window.location.origin;
  let result = await fetch(baseUrl + "/stockpile/v1/signin", {
    method: "POST",
    redirect: "follow",
    headers: new Headers({
      "Content-Type": "application/json",
    }),
    body: data,
  }).then((data) => {
    if (data.status == 200) {
      window.location.href = data.url;
    } else {
      alert("User Does Not Exist");
    }
  });

  // if(result.status===200)
  // {let response=(await result.json())
  //    window.location.assign(`${response.url}?token=${response.token}`)
  // }
});
