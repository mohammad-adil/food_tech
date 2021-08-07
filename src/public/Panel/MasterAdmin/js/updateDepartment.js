const btnUpdateDepartment = document.querySelector('#updateDeparment')
btnUpdateDepartment.addEventListener('click', async ()=>{
    let dataDiv = document.getElementById("dashBoard");
    dataDiv.innerHTML = '';
    dataDiv.innerHTML = `<h1 class="mt-4">Update</h1> 
                        <ol class="breadcrumb mb-4"> 
                            <li class="breadcrumb-item"><a href="/Panel/User/issue.html">Dashboard</a></li> 
                            <li class="breadcrumb-item active">Update Department</li> 
                        </ol> 
						<div> 


                        <select id="updateGetDepartment" class="targetDept" >
                        <option value="Choose">Choose Department</option>
                        </select>


		<div class="card mb-4" style="visibility:visible; font-size:12px";> 
            <div class="card-header"><i class="fas fa-table mr-1"></i>Update Department</div> 
                <div class="card-body"> 
                    <div class="card-body"> 
                        <form id = "updateDepartmentForm"> 
                            <div class="form-row"> 
                                <div class="col-md-6"> 
                                <div class="form-group"><label class="small mb-1" for="departmentName">Depatment Name</label><input class="form-control py-4" id="depttName" type="text" placeholder="Enter Department Name" /></div> 
                                </div> 
                                    <div class="col-md-6"> 
                                      <div class="form-group"><label class="small mb-1" for="totalLabs">Total Labs</label><input class="form-control py-4" id="totalLabs" type="number" placeholder="Enter Total Labs" /></div> 
                                         </div> 
                                            </div> 
											<div class="form-group"><label class="small mb-1" for="establishmentDate">Establishment Date</label><input class="form-control py-4" id="estDate" type="email" aria-describedby="emailHelp" placeholder="Enter Establishment Date" /></div> 
                                            <div class="form-row"> 
                                                <div class="col-md-6"> 
                                                    <div class="form-group"><label class="small mb-1" for="establishmentSource">Establishment Source</label><input class="form-control py-4" id="estSource" type="text" placeholder="Enter Establishment Source" /></div> 
                                                </div> 
                                                 
											
                                              </div> 
                                          <div class="form-group mt-4 mb-0"> 
                                              <button id="uDepartment" type="button" class="btn btn-primary btn-block">Update</button> 
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

  const selectionBox = document.querySelector("#updateGetDepartment");
  let dataSelect = '<option value="select"> Select </option>';
  result.forEach((element) => {
    dataSelect += `<option value="${element._id}">${element.departmentName}</option>`;
  });
  selectionBox.innerHTML = dataSelect;


})






$(document).on('click',"#uDepartment", async()=>{



    let department = document.getElementById("depttName").value;
    let totalLabs = Number (document.getElementById("totalLabs").value);
    let estDate = document.getElementById("estDate").value;
    let estSource = document.getElementById("estSource").value;
    
    let departmentDetails = {
        departmentName: department,
        totalLabs,
        estDate,
        estSource,
    };
    let baseUrl = window.location.origin;
        let results = await fetch(baseUrl + "/stockpile/v1/department/addDepartment", {
            method: "POST",
         headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(departmentDetails),
          })
          if(results.status==200){

            alert('Department Updated Successfully')
            $('#updateDepartmentForm')[0].reset()
        }else{
        
        }        


    
    
})