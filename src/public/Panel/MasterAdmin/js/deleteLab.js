
const BtnDeleteLab = document.querySelector('#deleteLab')
BtnDeleteLab.addEventListener('click', async ()=>{
    let dataDiv = document.getElementById("dashBoard");
    dataDiv.innerHTML = '';
    dataDiv.innerHTML = `<h1 class="mt-4">Delete Lab</h1> 
                        <ol class="breadcrumb mb-4"> 
                            <li class="breadcrumb-item"><a href="/Panel/User/issue.html">Dashboard</a></li> 
                            <li class="breadcrumb-item active">Delete Lab</li> 
                        </ol> 
						<div> 
		<div class="card mb-4 updateDiv"  style="visibility:visible; font-size:12px";> 
            <div class="card-header"><i class="fas fa-table mr-1"></i>Delete Lab</div> 
                <div class="card-body"> 
                    <div class="card-body"> 


                    <div class="form-row"> 
                    <div class="col-md-6"> 
                    <div class="form-group"><label class="medium mb-1" for="deleteChoose">Choose Depatment</label></div> 
                    </div>
                    <select id="deleteLabGetDepartment" class="targetDept custom-select" >
                    <option value="Choose">Choose Department</option>
                    </select>
                    </div>
                    <div class="col-md-6"> 
                    <div class="form-group"><label class="medium mb-1" for="deleteChoose">Choose Depatment</label></div> 
                    </div>
                    <select id="deleteGetLab" class="targetDept custom-select" >
                    <option value="Choose">Choose Lab</option>
                    </select>
                    </div>
</div>

                        <form id="delLabForm"> 
                            <div class="form-row"> 
                                <div class="col-md-6"> 
                                <div class="form-group"><label class="small mb-1" for="labName">Lab Name</label><input class="form-control py-4" id="labDeleteName" type="text" placeholder="Lab Name" disabled />
                                </div> 
                                </div>  
								<div class="col-md-6">
                                <label class="small mb-1" for="establishmentDate">Establishment Date</label><input class="form-control py-4" id="LabEstDate" type="text" aria-describedby="emailHelp" placeholder="Establishment Date" disabled />
                                </div> 
                                </div>
                                <div class="form-row"> 
                                                <div class="col-md-6"> 
                                                    <div class="form-group"><label class="small mb-1" for="establishmentSource">Lab Admin</label><input class="form-control py-4" id="labAdmin" type="text" placeholder="Lab Admin" disabled /></div> 
                                                </div> 
                                                 
											
                                              </div> 
                                          <div class="form-group mt-4 mb-0"> 
                                              <button id="dLab" type="button" class="btn btn-primary btn-block">Delete Department</button> 
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

  const selectionBox = document.querySelector("#deleteLabGetDepartment");
  let dataSelect = '<option value="select"> Select </option>';
  result.forEach((element) => {
    dataSelect += `<option value="${element._id}">${element.departmentName}</option>`;
  });
  selectionBox.innerHTML = dataSelect;

})
/****************************Fetch Lab from Department************************************* */

$(document).on("change", "#deleteLabGetDepartment", async (e) => {
 
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
  
    const selectionBox = document.querySelector("#deleteGetLab");
    let dataSelect = '<option value="select"> Select </option>';
    result.forEach((element) => {
      dataSelect += `<option value="${element._id}">${element.labName}</option>`;
    });
    selectionBox.innerHTML = dataSelect;
  });

/****************************Fire  Requet************************************* */


$(document).on('click',"#dLab", async()=>{


    const element = document.getElementById("deleteGetLab");
    const labID = element.options[element.selectedIndex].value;
 
    
    let labDetails = {
        isDeleted: true
    };

    let baseUrl = window.location.origin;
        let deleteLabStatus = await fetch(baseUrl + "/stockpile/v1/lab/update/" + labID, {
            method: "PATCH",
         headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer "+sessionStorage.getItem("Token")
      },
      body: JSON.stringify(labDetails),
          })

if(deleteLabStatus.status==200){

    alert('Lab Deleted Successfully')
}else{

}
        

    
    
})

/****************************FORM PUT DATA************************************* */
$(document).on("change", "#deleteGetLab", async (e) => {
  
    let baseUrl = window.location.origin;
    let resultDel = await fetch(
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

console.log(resultDel)

    document.getElementById("labDeleteName").value= resultDel.labName;
    document.getElementById("LabEstDate").value = resultDel.labEstDate;
    document.getElementById("labAdmin").value= resultDel.labAdmin.name;
    


  });