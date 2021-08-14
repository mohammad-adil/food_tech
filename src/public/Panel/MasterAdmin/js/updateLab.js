const btnUpdateLab = document.querySelector('#updateLab')
btnUpdateLab.addEventListener('click', async ()=>{
    let dataDiv = document.getElementById("dashBoard");
    dataDiv.innerHTML = '';
    dataDiv.innerHTML = `<h1 class="mt-4">Update</h1> 
                        <ol class="breadcrumb mb-4"> 
                            <li class="breadcrumb-item"><a href="/Panel/User/issue.html">Dashboard</a></li> 
                            <li class="breadcrumb-item active">Update Lab</li> 
                        </ol> 
						<div> 

                        <div class="col-md-6"> 
                        <div class="form-group"><label class="medium mb-1" for="updateChoose">Choose Department</label></div> 
                        </div>
                        <select id="updateGetLab" class="targetDept custom-select" >
                        <option value="Choose">Choose Lab</option>
                        </select>
                        </div>


                        
                        <div class="col-md-6"> 
                        <div class="form-group"><label class="medium mb-1" for="updateLabChoose">Choose Lab to Update</label></div> 
                        </div>
                        <select id="updateGetLabFromDepartment" class="targetLab custom-select" >
                        <option value="Choose">Choose Lab</option>
                        </select>
                        </div>


		<div class="card mb-4" style="visibility:visible; font-size:12px";> 
            <div class="card-header"><i class="fas fa-table mr-1"></i>Update Lab</div> 
                <div class="card-body"> 
                    <div class="card-body"> 
                        <form id = "updateLabForm"> 
                            <div class="form-row"> 
                                <div class="col-md-6"> 
                                <div class="form-group"><label class="small mb-1" for="labName">Lab Name</label><input class="form-control py-4" id="labName" type="text" placeholder="Enter Lab Name" disabled /></div> 
                                </div> 
                                    <div class="col-md-6"> 
                                      <div class="form-group"><label class="small mb-1" for="totalLabs">Department</label><input class="form-control py-4" id="labDepartments" type="text" placeholder="Lab Department" disabled /></div> 
                                         </div> 
                                            </div> 
										                      
                                          
                                            <div class="form-row"> 
                                            <div class="col-md-6"> 
                                            <div class="form-group">
                                            <label class="small mb-1" for="EstdDate">Establishment Date</label><input class="form-control py-4" id="labEstDate" type="text" aria-describedby="emailHelp" placeholder="Enter Establishment Date" disabled /></div> 
                                            </div> 
                                                <div class="col-md-6"> 
                                                  <div class="form-group"><label class="small mb-1" for="currentAdmin">Current Admin</label><input class="form-control py-4" id="currentAdmin" type="text" placeholder="Current Admin" disabled /></div> 
                                                     </div> 
                                                        </div>



                                                        <div class="form-row"> 
                                                        <div class="col-md-6"> 
                                                        <div class="form-group">
                                                        <label class="small mb-1" for="EstdDate">Choose New Admin</label>
                                                        </div>
          
                                            <select id="labAdminName" class="targetLab custom-select" >
                                            <option value="Choose">Choose New Lab Admin</option>
                                            </select>
                                                
                                            </div> 
                                            </div> 
                                            </div>



                                   
                                            
                                                 
											
                                              </div> 
                                          <div class="form-group mt-4 mb-0"> 
                                              <button id="uLab" type="button" class="btn btn-primary btn-block">Update</button> 
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
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer "+sessionStorage.getItem("Token")
    },
  }).then((data) => {
    return data.json();
  });

  const selectionBox = document.querySelector("#updateGetLab");
  let dataSelect = '<option value="select"> Select </option>';
  result.forEach((element) => {
    dataSelect += `<option value="${element._id}">${element.departmentName}</option>`;
  });
  selectionBox.innerHTML = dataSelect;


})

$(document).on("change", "#updateGetLab", async (e) => {
 
  let baseUrl = window.location.origin;
  let result = await fetch(
    baseUrl + "/stockpile/v1/lab/getLabByDepartmentId/" + $(e.target).val(),
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer "+sessionStorage.getItem("Token")
      },
    }
  ).then((data) => {
    return data.json();
  });

  const selectionBox = document.querySelector("#updateGetLabFromDepartment");
  let dataSelect = '<option value="select"> Select </option>';
  result.forEach((element) => {
    dataSelect += `<option value="${element._id}">${element.labName}</option>`;
  });
  selectionBox.innerHTML = dataSelect;
});

$(document).on('click',"#uLab", async()=>{
    let labAdmin = document.getElementById("labAdminName").value;
    const element = document.getElementById("updateGetLabFromDepartment");
    const checkValue = element.options[element.selectedIndex].value;
    let labDetails = {
        labAdmin,
    };
    let baseUrl = window.location.origin;
        let results = await fetch(baseUrl + "/stockpile/v1/lab/update/" + checkValue , {
            method: "PATCH",
         headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer "+sessionStorage.getItem("Token")
      },
      body: JSON.stringify(labDetails),
          })

          if(results.status==200){

            alert('Lab Updated Successfully')
        }else{
        
        }     
})
$(document).on("change", "#updateGetLabFromDepartment", async (e) => {
  
  let baseUrl = window.location.origin;
  let result2 = await fetch(
    baseUrl + "/stockpile/v1/lab/getlab/" + $(e.target).val(),
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer "+sessionStorage.getItem("Token")
      },
    }
  ).then((data) => {
    return data.json();
  });

  document.getElementById("labDepartments").value= result2.department.departmentName  ;
  document.getElementById("labName").value= result2.labName;
  document.getElementById("labEstDate").value = result2.labEstDate;
  document.getElementById("currentAdmin").value= result2.labAdmin.name;
  


let selectDepartmet = document.querySelector("#updateGetLab").value


  let getUsers = await fetch(
    baseUrl + "/stockpile/v1/getUser/"+selectDepartmet,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer "+sessionStorage.getItem("Token")
      },
    }
  ).then((data) => {
    return data.json();
  });
  
});


$(document).on("change", "#updateGetLab", async (e) => {
  
  let baseUrl = window.location.origin;
  let result1 = await fetch(
    baseUrl + "/stockpile/v1/getUser/" + $(e.target).val(),
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer "+sessionStorage.getItem("Token")
      },
    }
  ).then((data) => {
    return data.json();
  });

  
  const selectLabAdmin = document.querySelector("#labAdminName");
  let dataSelect = '<option value="select"> Select </option>';
  result1.forEach((element) => {
    dataSelect += `<option value="${element._id}">${element.name}</option>`;
  });
  selectLabAdmin.innerHTML = dataSelect;

});