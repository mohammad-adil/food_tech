let getDetails = async function () {
  let baseUrl = window.location.origin;
  let result = await fetch(baseUrl + "/stockpile/v1/general/getDetails", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + sessionStorage.getItem("Token"),
    },
  }).then((data) => {
    return data.json();
  });

  return result;
};

$(document).ready(async function () {
  let dataDiv = document.getElementById("dashBoard");
  dataDiv.innerHTML = "";

  dataDiv.innerHTML = `<h1 class="mt-4">Dashboard</h1> 
                    <div class="row"> 
    <div class="col-xl-3 col-md-6"> 
       <div class="card bg-primary text-white mb-4"> 
          <div class="card-body"> Total Users 
               
          </div> 
          <div class="card-footer d-flex align-items-center justify-content-between"> 
          <span id="totalUsers" class="big badge badge-danger"></span> 
           
          </div> 
      </div> 
  </div> 
  <div class="col-xl-3 col-md-6"> 
      <div class="card bg-warning text-white mb-4"> 
          <div class="card-body">Total Admins 
               
          </div> 
          <div class="card-footer d-flex align-items-center justify-content-between"> 
          <span id="totalAdmins" class="small badge badge-danger"></span>
                                </div> 
                            </div> 
                        </div> 
                        <div class="col-xl-3 col-md-6"> 
                            <div class="card bg-success text-white mb-4"> 
                                <div class="card-body">Total Master Admins
                                
                                </div> 
                                <div class="card-footer d-flex align-items-center justify-content-between"> 
                                <span id="totalMasterAdmins" class="small badge badge-danger"></span> 
                                </div> 
                            </div> 
                        </div> 
                    			<div class="col-xl-3 col-md-6"> 
                            <div class="card bg-warning text-white mb-4"> 
                                <div class="card-body"> Total Labs
                                    
                                </div> 
                                <div class="card-footer d-flex align-items-center justify-content-between"> 
                                    <span id="totalLabs" class="small badge badge-danger"></span> 
                                </div> 
                            </div> 
                        </div> 	
                        <div class="col-xl-3 col-md-6"> 
                            <div class="card bg-success text-white mb-4"> 
                                <div class="card-body"> Total Verified Users 

                                </div> 
                                <div class="card-footer d-flex align-items-center justify-content-between"> 
                                <span id="activeUsers" class="small badge badge-danger"></span> 
                                </div> 
                            </div> 
                        </div> 

                        <div class="col-xl-3 col-md-6"> 
                        <div class="card bg-primary text-white mb-4"> 
                        <div class="card-body"> Items Issued 
                                
                            </div> 
                            <div class="card-footer d-flex align-items-center justify-content-between"> 
                            <span id="itemsIssued" class="small badge badge-danger"></span>  
                            </div> 
                        </div> 
                    </div> 				
                   </div>`;

  let result = await getDetails();
  console.log(result);
  document.getElementById("totalUsers").innerHTML = result.totalUsers;
  document.getElementById("totalAdmins").innerHTML = result.admin;
  document.getElementById("totalMasterAdmins").innerHTML = result.superAdmin;
  document.getElementById("totalLabs").innerHTML = result.totalLabs;
  document.getElementById("activeUsers").innerHTML = result.activeUsers;
  document.getElementById("itemsIssued").innerHTML = result.TotalIssuedItems;
});
