const btnIssueItem = document.querySelector("#issueItem");
btnIssueItem.addEventListener("click", async () => {
    let dataDiv = document.getElementById("dashBoard");
    dataDiv.innerHTML = '';
   dataDiv.innerHTML = `<h1 class="mt-4">Issue Item</h1> 
                        <ol class="breadcrumb mb-4"> 
                            <li class="breadcrumb-item"><a href="/Panel/User/issue.html">Dashboard</a></li> 
                            <li class="breadcrumb-item active">Issue Item</li> 
                        </ol> 
						<div> 
		<div class="card mb-4" style="visibility:visible; font-size:12px";> 
            <div class="card-header"><i class="fas fa-table mr-1"></i>Issue Item</div> 
                <div class="card-body"> 
                    <div class="card-body"> 
                        <form id="issueItemForm"> 

            
                        <div class="form-row"> 
                                 
                        <div class="col-md-6"> 
                          <div class="form-group">
                                <label class="small mb-1" for="department Select">Department</label>
                
                    <select id="issueGetDepartment" class="targetDept custom-select" >
                    <option value="Choose">Choose Department</option>
                    </select>
                    
                          </div> 
                             </div> 

                             <div class="col-md-6"> 
                             <div class="form-group">
                                       <label class="small mb-1" for="inputAddItem">ChooseLab</label>
                                       <select id="issueGetLabFromDepartment" class="targetDept custom-select" >
                                       <option value="Choose">Choose Lab</option>
                                       </select>
                             </div> 
                             </div>
                                </div> 

                            <div class="form-row"> 
                                 
                                    <div class="col-md-6"> 
                                      <div class="form-group">
                                            <label class="small mb-1" for="itemChoose">Item</label>
                            
                                <select id="itemChoose" class="targetDept custom-select" >
                                <option value="Choose">Choose Itemt</option>
                                </select>
                                
                                      </div> 
                                         </div> 

                                         <div class="col-md-6"> 
                                         <div class="form-group">
                                                   <label class="small mb-1" for="inputAddItem">Quantity Issued</label>
                                                   <input class="form-control py-4" id="issuedQuantity" type="number" placeholder="Quantity Issued" />
                                         </div> 
                                         </div>
                                            </div> 





                                            <div class="form-row">  

                                <div class="col-md-6"> 
                                <div class="form-group">
                                          <label class="small mb-1" for="issuedTo">Issued To</label>
                                       
                                          <select id="issuedTo" class="targetDept custom-select" >
                                <option value="Choose">Choose</option>
                                </select>
                                       
                                </div> 
                                </div>
                                    <div class="col-md-6"> 
                                      <div class="form-group">
                                            <label class="small mb-1" for="itemReturnable">Is Item Returnable</label>
                                            <select id="itemReturnable" class="targetDept custom-select" >
                                          <option value="Choose">Choose Option</option>
                                          <option value="True">Yes</option>
                                          <option value="False">No</option>
                                          </select>
                                      </div> 
                                         </div> 
                                            </div> 




                                            <div class="form-row"> 
                                <div class="col-md-6"> 
                                <div class="form-group">
                                          <label class="small mb-1" for="returnDate">Return Date</label>
                                         <input class="form-control py-4" id="returnDate" type="date" placeholder="Choose Return Date" />
                                </div> 
                                </div> 
                                    <div class="col-md-6"> 
                                      <div class="form-group">
                                            <label class="small mb-1" for="unit">Unit</label>
                                            <select id="unit" class="targetDept custom-select" >
                                            <option value="Choose">Choose Unit</option>
                                            <option value="Kgs">Kgs</option>
                                            <option value="Liters">Liters</option>
                                            <option value="Milligrams">Milligrams</option>
                                            <option value="Grams">Grams</option>
                                            <option value="Uints">Uints</option>
                                            </select>
                                      </div> 
                                         </div> 
                                            </div> 




                                          <div class="form-group mt-4 mb-0"> 
                                              <button id="btnIssueItem" type="button" class="btn btn-primary btn-block">Issue</button> 
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
                      Authorization: "Bearer " + sessionStorage.getItem("Token"),
                    },
                  }).then((data) => {
                    return data.json();
                  });
                
                  const selectionBox = document.querySelector("#issueGetDepartment");
                  let dataSelect = '<option value="select"> Select </option>';
                  result.forEach((element) => {
                    dataSelect += `<option value="${element._id}">${element.departmentName}</option>`;
                  });
                  selectionBox.innerHTML = dataSelect;
                  
                



});


$(document).on("change", "#issueGetDepartment", async (e) => {
 
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
  
    const selectionBox = document.querySelector("#issueGetLabFromDepartment");
    let dataSelect = '<option value="select"> Select </option>';
    result.forEach((element) => {
      dataSelect += `<option value="${element._id}">${element.labName}</option>`;
    });
    selectionBox.innerHTML = dataSelect;
  });



/****************************Issued to****************************************************** */
$(document).on("change", "#issueGetDepartment", async (e) => {
 
    let baseUrl = window.location.origin;
    let result = await fetch(
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
  
    const selectionBox = document.querySelector("#issuedTo");
    let dataSelect = '<option value="select"> Select </option>';
    result.forEach((element) => {
      dataSelect += `<option value="${element._id}">${element.name}</option>`;
    });
    selectionBox.innerHTML = dataSelect;
  });


/****************************Choose Item from LAb****************************************************** */


$(document).on("change", "#issueGetLabFromDepartment", async (e) => {

  let baseUrl = window.location.origin;
  let result = await fetch(baseUrl + "/stockpile/v1/item/getItemsByLab/" + $(e.target).val(), {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer "+sessionStorage.getItem("Token")
    },
  }).then((data) => {
    return data.json();
  });

  const selectionBox = document.querySelector("#itemChoose");
  let dataSelect = '<option value="select"> Select </option>';
  result.forEach((element) => {
    dataSelect += `<option value="${element._id}">${element.itemName}</option>`;
  });
  selectionBox.innerHTML = dataSelect;
});


/*********************************Fire Request******************************************************** */


$(document).on("click", "#btnIssueItem", async () => {
    let itemQuantity = parseInt (document.getElementById("issuedQuantity").value);
    const element = document.getElementById("issueGetDepartment");
    const departmentId = element.options[element.selectedIndex].value;
    let lab = document.getElementById("issueGetLabFromDepartment").value;
    let unit = document.getElementById("unit").value;
    let issuedTo = document.getElementById("issuedTo").value;

    let returnable = document.getElementById("itemReturnable").value;
    let returnDate = document.getElementById("returnDate").value;

    const elmItem = document.getElementById("itemChoose");
    const itemChoose = elmItem.options[elmItem.selectedIndex].value;

let returnAble=false
if(returnable=='True'){
    returnAble = true
}



    let issuePayLoad = {
      itemQuantity,
      department: departmentId,
      lab,
      unit,
      returnable:returnAble,
      returnDate,
      issuedTo,
    };
    let baseUrl = window.location.origin;
    let res1 = await fetch(baseUrl + "/stockpile/v1/issue/issueItem/"+itemChoose, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer "+sessionStorage.getItem("Token")
      },
      
      body: JSON.stringify(issuePayLoad),

    });

    if (res1.status == 200) {
      alert("Issued Successfully");
      $("#issueItemForm")[0].reset();
    } else {
      alert("Something went Wrong");
    }

  });