
const addLab = document.querySelector('#addLab')
addLab.addEventListener('click', async ()=>{
    let dataDiv = document.getElementById("dashBoard");
    dataDiv.innerHTML = '';
    dataDiv.innerHTML = `<h1 class="mt-4">Add Lab</h1> 
                        <ol class="breadcrumb mb-4"> 
                            <li class="breadcrumb-item"><a href="/Panel/User/issue.html">Dashboard</a></li> 
                            <li class="breadcrumb-item active">Add Lab</li> 
                        </ol> 
						<div> 
		<div class="card mb-4 updateDiv"  style="visibility:visible; font-size:12px";> 
            <div class="card-header"><i class="fas fa-table mr-1"></i>Add Lab</div> 
                <div class="card-body"> 
                    <div class="card-body"> 
                        <form id="addDLabForm"> 
                            <div class="form-row"> 
                                <div class="col-md-6"> 
                                <div class="form-group"><label class="small mb-1" for="labName">Lab Name</label><input class="form-control py-4" id="labName" type="text" placeholder="Enter Lab Name" /></div> 
                                </div> 
                                <div class="col-md-6"> 
                                <div class="form-group"><label class="small mb-1" for="updateChoose">Choose Depatment</label></div> 
                                </div>
                                <div class="custom-select" style="width:200px;">
                                <select id="labGetDepartment" class="targetDept" >
                                <option value="Choose">Choose Department</option>
                                </select>
                                </div>
                                            </div> 
											<div class="form-group"><label class="small mb-1" for="establishmentDate">Establishment Date</label><input class="form-control py-4" id="labEstDate" type="email" aria-describedby="emailHelp" placeholder="Enter Establishment Date" /></div> 
                                            <div class="form-row"> 
                                            <div class="col-md-6"> 
                                            <div class="form-group"><label class="small mb-1" for="updateChooseAdmin">Select Lab Admin</label></div> 
                                            </div>
                                            <div class="custom-select" style="width:200px;">
                                            <select id="labGetAdmin" class="targetDept" >
                                            <option value="Choose">Choose Lab Admin</option>
                                            </select>
                                            </div> 
                                                 
											
                                              </div> 
                                          <div class="form-group mt-4 mb-0"> 
                                              <button id="rLab" type="button" class="btn btn-primary btn-block">Add Lab</button> 
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
                
                  const selectionBox = document.querySelector("#labGetDepartment");
                  let dataSelect = '<option value="select"> Select </option>';
                  result.forEach((element) => {
                    dataSelect += `<option value="${element._id}">${element.departmentName}</option>`;
                  });
                  selectionBox.innerHTML = dataSelect;


})

$(document).on("change", "#labGetDepartment", async (e) => {
  
    let baseUrl = window.location.origin;
    let result1 = await fetch(
      baseUrl + "/stockpile/v1/getUser/" + $(e.target).val(),
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((data) => {
      return data.json();
    });

    
    const selectLabAdmin = document.querySelector("#labGetAdmin");
    let dataSelect = '<option value="select"> Select </option>';
    result1.forEach((element) => {
      dataSelect += `<option value="${element._id}">${element.name}</option>`;
    });
    selectLabAdmin.innerHTML = dataSelect;

  });
  




$(document).on('click',"#rLab", async()=>{


    let department = document.getElementById("labGetDepartment").value;
    let labName = document.getElementById("labName").value;
    let labEstDate = document.getElementById("labEstDate").value;
    let labAdmin = document.getElementById("labGetAdmin").value;
    
    let departmentDetails = {
        department,
        labName,
        labEstDate,
        labAdmin,
    };


    console.log('object', departmentDetails)

    let baseUrl = window.location.origin;
        let results = await fetch(baseUrl + "/stockpile/v1/lab/addLab", {
            method: "POST",
         headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(departmentDetails),
          })

if(results.status==200){
    alert('Lab Added Successfully')
    $('#addDLabForm')[0].reset()
}else{

    alert("Something went Wrong")
}
        

    
    
})