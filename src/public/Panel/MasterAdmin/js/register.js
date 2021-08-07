
const addUser = document.querySelector('#addUser')
addUser.addEventListener('click', async ()=>{
    let dataDiv = document.getElementById("dashBoard");
    dataDiv.innerHTML = '';
    dataDiv.innerHTML = `<h1 class="mt-4">Register</h1> 
                        <ol class="breadcrumb mb-4"> 
                            <li class="breadcrumb-item"><a href="/Panel/User/issue.html">Dashboard</a></li> 
                            <li class="breadcrumb-item active">Register</li> 
                        </ol> 
						<div> 
		<div class="card mb-4" style="visibility:visible; font-size:12px";> 
            <div class="card-header"><i class="fas fa-table mr-1"></i>Register User</div> 
                <div class="card-body"> 
                    <div class="card-body"> 
                        <form> 
                            <div class="form-row"> 
                                <div class="col-md-6"> 
                                <div class="form-group"><label class="small mb-1" for="inputName">Name</label><input class="form-control py-4" id="txtName" type="text" placeholder="Enter Name" />
                                </div> 
                                </div> 
                                </div>
                                <div class="form-group"><label class="small mb-1" for="inputEmailAddress">Email</label><input class="form-control py-4" id="txtEmail" type="email" aria-describedby="emailHelp" placeholder="Enter email address" />
                                </div> 
                                <div class="form-row"> 
                                <div class="col-md-6"> 
                                <div class="form-group"><label class="small mb-1" for="phone">Phone</label>
                                <input class="form-control py-4" id="txtphone" type="text" placeholder="Enter Phone Number" />
                                </div> 
                                <div class="col-md-6">
                                <div class="form-group">
                                <label class="small mb-1" for="gender">Gender</label> 
                                <div class="custom-select" style="width:200px;">
                                <select id= "gender" name="gender">
                                <option value="Choose">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Others">Others</option>
                                </select>
                                </div> 
                                </div>
                                </div> 
                                </div>
                                </div>

                                <div class="form-row">
                                <div class="col-md-6">
                                <div class="form-group">
                                </div>
                                </div>
                                </div>
                                </div> 
                                <div class="col-md-6"> 
                                <div class="form-group"><label class="small mb-1" for="UniversityID">University ID</label><input class="form-control py-4" id="eid" type="text" placeholder="UID" /></div> 
                                </div> 
                                <div class="col-md-6"> 
                                <div class="custom-select" style="width:200px;">
                                <input type = "date" placeholder="Date of Birth" id="dob" name="dob" >
                                </div> 
                                </div>
                                             
                                <div class="custom-select" style="width:200px;">
                                <select id="department" name="depts" style="background: none; outline: none; border: none; line-height: 1; font-weight: 600; font-size: 1.1rem;  color: #333;">
                                <option value="Choose">Choose Department</option>
                                </select>
                                </div>
											


                                <div class="col-md-6"> 
                                                    
                                <div class="form-group"><label class="small mb-1" for="street">Street</label><input class="form-control py-4" id="street" type="text" placeholder="Enter Street" /></div> 
                                </div> 
								<div class="col-md-6"> 
                                <div class="form-group"><label class="small mb-1" for="txtPin">Pin Code</label><input class="form-control py-4" id="pin" type="text" placeholder="Enter Pin Code" /></div> 
                                <div class="col-md-6"> 
                                <div class="form-group"><label class="small mb-1" for="Landmark">Landmark</label><input class="form-control py-4" id="Landmark" type="text" placeholder="Enter Landmark" /></div> 
                                </div> 
                                <div class="form-group"><label class="small mb-1" for="txtPin">Password</label><input class="form-control py-4" id="txtPassword" type="password" placeholder="Enter Password" /></div> 
                                <select id="role" name="Title" class="custom-select form-control-lg" style="width:80px;"> 
                                <option selected>Role</option> 
                                <option value="admin">Admin</option> 
                                <option value="labAdmin">Lab Admin</option>
                                <option value="user">User</option> 
                                </select>  
								</div> 
                                </div> 
                                <div class="form-group mt-4 mb-0"> 
                                <button id="rUser" type="button" class="btn btn-primary btn-block">Register</button> 
                                </div> 
                                </form> 
                                </div> 
							</div> 
                          </div> 
                     </div> 
                      <div></div> 
                  </div>`

                  let baseUrl = window.location.origin;
  let result = await fetch(baseUrl + "/stockpile/v1/department/getDepartment", {
    method: "GET",
  }).then((data) => {
    return data.json();
  });

  const selectionBox = document.querySelector("#department");
  let dataSelect = '<option value="select"> Select </option>';
  result.forEach((element) => {

    dataSelect += `<option value="${element._id}">${element.departmentName}</option>`;
  });

  selectionBox.innerHTML = dataSelect;
})



$(document).on('click',"#rUser", async()=>{

        let name = document.getElementById("txtName").value;
        let email = document.getElementById("txtEmail").value;
        let phone = document.getElementById("txtphone").value;
        let password = document.getElementById("txtPassword").value;
        const element = document.getElementById("department");
        const checkValue = element.options[element.selectedIndex].value;
        //let department = $("department :selected").val();
        let universityId = document.getElementById("eid").value;
        let dob = document.getElementById("dob").value;
        let userRole = document.getElementById('role').value
        let gender = document.getElementById("gender").value;
      
        let street = document.getElementById('street').value;
        let pin = document.getElementById('pin').value;
        let Landmark = document.getElementById('Landmark').value;
        let UserDetails = {
          name,
          dob,
          department:checkValue,
          universityId,
          userRole,
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
        let resultz = await fetch(baseUrl + "/stockpile/v1/signUp", {
            method: "POST",
         headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(UserDetails),
          })

        


    
    
})