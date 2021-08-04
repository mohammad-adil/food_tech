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
  let dob = "22-1-2021";
  //let userRole = document.getElementById('#userRole').value
  let gender = "Male";
  //let address = document.getElementById('#address').value

  let UserDetails = {
    name,
    dob,
    department,
    universityId,
    userRole: "user",
    phone,
    gender,
    address: {
      Landmark: "Shah ssfil",
      pin: 19113,
      street: "google steeet",
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

  console.log("data is " + results);
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
    window.location.href = data.url;
  });

  // if(result.status===200)
  // {let response=(await result.json())
  //    window.location.assign(`${response.url}?token=${response.token}`)
  // }
});
