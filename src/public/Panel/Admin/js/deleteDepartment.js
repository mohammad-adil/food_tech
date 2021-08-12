
const BtnDeleteDepartment = document.querySelector('#deleteDeparment')
BtnDeleteDepartment.addEventListener('click', async ()=>{
    let dataDiv = document.getElementById("dashBoard");
    dataDiv.innerHTML = '';
    dataDiv.innerHTML = `<h1 class="mt-4">Delete Department</h1> 
                        <ol class="breadcrumb mb-4"> 
                            <li class="breadcrumb-item"><a href="/Panel/User/issue.html">Dashboard</a></li> 
                            <li class="breadcrumb-item active">Delete Department</li> 
                        </ol> 
						<div> 
		<div class="card mb-4 updateDiv"  style="visibility:visible; font-size:12px";> 
            <div class="card-header"><i class="fas fa-table mr-1"></i>Delete Department</div> 
                <div class="card-body"> 
                    <div class="card-body"> 



                    <div class="col-md-6"> 
                    <div class="form-group"><label class="medium mb-1" for="deleteChoose">Choose Depatment to Delete</label></div> 
                    </div>
                    <div class="custom-select" style="width:200px;">
                    <select id="deleteGetDepartment" class="targetDept" >
                    <option value="Choose">Choose Department</option>
                    </select>
                    </div>


                        <form id="delDepartmentForm"> 
                            <div class="form-row"> 
                                <div class="col-md-6"> 
                                <div class="form-group"><label class="small mb-1" for="departmentName">Depatment Name</label><input class="form-control py-4" id="depttName" type="text" placeholder="Enter Department Name" disabled /></div> 
                                </div> 
                                    <div class="col-md-6"> 
                                      <div class="form-group"><label class="small mb-1" for="totalLabs">Total Labs</label><input class="form-control py-4" id="totalLabs" type="number" placeholder="Enter Total Labs" disabled /></div> 
                                         </div> 
                                            </div> 
											<div class="form-group"><label class="small mb-1" for="establishmentDate">Establishment Date</label><input class="form-control py-4" id="estDate" type="text" aria-describedby="emailHelp" placeholder="Enter Establishment Date" disabled /></div> 
                                            <div class="form-row"> 
                                                <div class="col-md-6"> 
                                                    <div class="form-group"><label class="small mb-1" for="establishmentSource">Establishment Source</label><input class="form-control py-4" id="estSource" type="text" placeholder="Enter Establishment Source" disabled /></div> 
                                                </div> 
                                                 
											
                                              </div> 
                                          <div class="form-group mt-4 mb-0"> 
                                              <button id="dDepartment" type="button" class="btn btn-primary btn-block">Delete Department</button> 
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

  const selectionBox = document.querySelector("#deleteGetDepartment");
  let dataSelect = '<option value="select"> Select </option>';
  result.forEach((element) => {
    dataSelect += `<option value="${element._id}">${element.departmentName}</option>`;
  });
  selectionBox.innerHTML = dataSelect;

})




$(document).on('click',"#dDepartment", async()=>{


    const element = document.getElementById("deleteGetDepartment");
    const deptID = element.options[element.selectedIndex].value;
 
    
    let departmentDetails = {
        isdeleted: true
    };

    let baseUrl = window.location.origin;
        let results = await fetch(baseUrl + "/stockpile/v1/department/update/" + deptID, {
            method: "PATCH",
         headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer "+sessionStorage.getItem("Token")
      },
      body: JSON.stringify(departmentDetails),
          })

if(results.status==200){

    alert('Department Deleted Successfully')
    $('#deleteDepartmentForm')[0].reset()
}else{

}
        

    
    
})


$(document).on("change", "#deleteGetDepartment", async (e) => {
  
    let baseUrl = window.location.origin;
    let result1 = await fetch(
      baseUrl + "/stockpile/v1/department/getDepartment/" + $(e.target).val(),
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



    document.getElementById("depttName").value= result1.departmentName;
    document.getElementById("totalLabs").value= result1.totalLabs;
    document.getElementById("estDate").value = result1.estDate;
    document.getElementById("estSource").value= result1.estSource;
    


  });