
const addLab = document.querySelector('#addLab')
addLab.addEventListener('click',()=>{
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
                                      <div class="form-group"><label class="small mb-1" for="totalLabs">Department</label><input class="form-control py-4" id="labDepartment" type="text" placeholder="Enter Department Labs" /></div> 
                                         </div> 
                                            </div> 
											<div class="form-group"><label class="small mb-1" for="establishmentDate">Establishment Date</label><input class="form-control py-4" id="estDate" type="email" aria-describedby="emailHelp" placeholder="Enter Establishment Date" /></div> 
                                            <div class="form-row"> 
                                                <div class="col-md-6"> 
                                                    <div class="form-group"><label class="small mb-1" for="establishmentSource">Lab Admin</label><input class="form-control py-4" id="labAdminn" type="text" placeholder="Lab Admin" /></div> 
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
})




$(document).on('click',"#rLab", async()=>{



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
        let results = await fetch(baseUrl + "/stockpile/v1/addLab", {
            method: "POST",
         headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(departmentDetails),
          })

if(results.status==200){

    alert('Lab Added Successfully')
    $('#addLabForm')[0].reset()
}else{

}
        

    
    
})