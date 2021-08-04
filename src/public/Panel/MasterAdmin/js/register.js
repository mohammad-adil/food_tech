
const addUser = document.querySelector('#addUser')
addUser.addEventListener('click',()=>{
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
                                <div class="form-group"><label class="small mb-1" for="inputFirstName">First Name</label><input class="form-control py-4" id="txtFname" type="text" placeholder="Enter first name" /></div> 
                                </div> 
                                    <div class="col-md-6"> 
                                      <div class="form-group"><label class="small mb-1" for="inputLastName">Last Name</label><input class="form-control py-4" id="txtLname" type="text" placeholder="Enter last name" /></div> 
                                         </div> 
                                            </div> 
											<div class="form-group"><label class="small mb-1" for="inputEmailAddress">Email</label><input class="form-control py-4" id="txtEmail" type="email" aria-describedby="emailHelp" placeholder="Enter email address" /></div> 
                                            <div class="form-row"> 
                                                <div class="col-md-6"> 
                                                    <div class="form-group"><label class="small mb-1" for="phone">Phone</label><input class="form-control py-4" id="txtphone" type="text" placeholder="Enter Phone Number" /></div> 
                                                </div> 
                                                <div class="col-md-6"> 
                                                    <div class="form-group"><label class="small mb-1" for="address">Address</label><input class="form-control py-4" id="txtAddress" type="text" placeholder="Enter Address" /></div> 
                                               </div> 
											<div class="col-md-6"> 
                                                   <div class="form-group"><label class="small mb-1" for="txtPin">Pin Code</label><input class="form-control py-4" id="txtPin" type="text" placeholder="Enter Pin Code" /></div> 
                                                    <div class="form-group"><label class="small mb-1" for="txtPin">Password</label><input class="form-control py-4" id="txtPassword" type="password" placeholder="Enter Password" /></div> 
                                              <select id="role" name="Title" class="custom-select form-control-lg" style="width:80px;"> 
                                                     <option selected>Role</option> 
                                                     <option value="Office">Office</option> 
                                                     <option value="Master">Master</option> 
                                                   </select>  
											</div> 
                                              </div> 
                                          <div class="form-group mt-4 mb-0"> 
                                              <button id="registerAgent" type="button" class="btn btn-primary btn-block">Register</button> 
                                          </div> 
                                      </form> 
                                  </div> 
							</div> 
                          </div> 
                     </div> 
                      <div></div> 
                  </div>`
})

