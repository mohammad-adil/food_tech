let userProfile = document.querySelector("#userProfile");
userProfile.addEventListener("click", async () => {
  let dataDiv = document.getElementById("dashBoard");
  dataDiv.innerHTML = "";
  dataDiv.innerHTML = `
   <ol class="breadcrumb mb-4"> 
       <li class="breadcrumb-item"><a href="/Panel/MasterAdmin/index.html">Dashboard</a></li> 
       <li class="breadcrumb-item active">User Profile</li> 
   </ol> 
   
<div class="card mb-4" style="visibility:visible; font-size:12px";> 
<div class="card-header"><i class="fas fa-table mr-1"></i>User Profile</div> 
<div class="card-body"> 
<div class="card-body" style="padding:0;margin-left: 15px"> 
<div class="form-row">
<div class="col-md-4">
<label class="small mb-1" for="establishmentDate">Name</label>
<input class="form-control  input-sm" id="userName"  aria-describedby="report" placeholder=" Name"  disabled/>
</div>
<div class="col-md-4">
<label class="small mb-1" for="establishmentDate">Email</label>
<input class="form-control input-sm" id="userEmail"  aria-describedby="report" placeholder="Email"disabled />
</div>
<div class="col-md-4">
<label class="small mb-1" for="establishmentDate">phone</label>
<input class="form-control input-sm" id="userPhone"  aria-describedby="report" placeholder="phone" disabled />
</div>
<div class="col-md-4">
<label class="small mb-1" for="establishmentDate">universityId</label>
<input class="form-control input-sm" id="userUID"  aria-describedby="report" placeholder="UUID" disabled />
</div>
<div class="col-md-4">
<label class="small mb-1" for="establishmentDate">gender</label>
<input class="form-control input-sm" id="userGender"  aria-describedby="report" placeholder="gender"  disabled />
</div>
</div>
<div class="form-row">
<div class="col-md-4">
<label class="small mb-1" for="establishmentDate">Change Password</label>
<input class="form-control  input-sm" id="UserPassword"  aria-describedby="report" placeholder=" password" />
</div>
</div>
<div class="form-row">
<div class="col-md-4">
<button type="button" id="ChangeUserPassword" class="btn btn-link input-sm">Change Password</button>
</div>
</div>
           </div> 
       </div> 
     </div> 
</div> 
 <div></div> 
</div>`;
  getUserProfile();
});

let getUserProfile = async () => {
  let baseUrl = window.location.origin;
  let result = await fetch(baseUrl + `/stockpile/v1/getUser`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + sessionStorage.getItem("Token"),
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else if (response.status === 404) {
        return Promise.reject("404");
      } else {
        return Promise.reject("some other error: " + response.status);
      }
    })
    .catch((err) => {
      return err;
    });

  if (result == "404") {
    alert(result);
    result = null;
  }

  if (result != "404") {
    setUserProfile(result);
  }
};
const setUserProfile = async (user) => {
  document.getElementById("userName").value = user.data.name;
  document.getElementById("userEmail").value = user.data.email;
  document.getElementById("userPhone").value = user.data.phone;
  document.getElementById("userUID").value = user.data.universityId;
  document.getElementById("userGender").value = user.data.gender;
};

$(document).on("click", "#ChangeUserPassword", async () => {
  const password = document.getElementById("UserPassword").value;

  if (password == "") {
    alert("Enter a Password to Change");
    return;
  }
  changeUserPassword(password);
});

const changeUserPassword = async (password) => {
  let baseUrl = window.location.origin;
  let result = await fetch(baseUrl + `/stockpile/v1/changePassword`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + sessionStorage.getItem("Token"),
    },
    body: JSON.stringify({ Password: password }),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else if (response.status === 500) {
        return Promise.reject("500");
      } else {
        return Promise.reject("some other error: " + response.status);
      }
    })
    .catch((err) => {
      return err;
    });

  console.log(result);
  if (result == "500") {
    alert(result.Message);
    result = null;
  }

  if (result != "500") {
    alert(result.Message);
    document.getElementById("UserPassword").value = "";
  }
};
