
$(document).ready(function () {
 
    let dataDiv = document.getElementById("dashBoard");
    dataDiv.innerHTML='';
dataDiv.innerHTML = `<h1 class="mt-4">Dashboard</h1> 
                    <div class="row"> 
    <div class="col-xl-3 col-md-6"> 
       <div class="card bg-primary text-white mb-4"> 
          <div class="card-body">Total Users 
                <span id="totalAgents" class="small badge badge-danger"></span> 
          </div> 
          <div class="card-footer d-flex align-items-center justify-content-between"> 
              <a class="small text-white stretched-link" href="#">View Details</a> 
              <div class="small text-white"><i class="fas fa-angle-right"></i></div> 
          </div> 
      </div> 
  </div> 
  <div class="col-xl-3 col-md-6"> 
      <div class="card bg-warning text-white mb-4"> 
          <div class="card-body">Office Agents 
              <span id="officeAgents" class="small badge badge-danger"></span> 
          </div> 
          <div class="card-footer d-flex align-items-center justify-content-between"> 
              <a class="small text-white stretched-link" href="#">View Details  
              </a> 
              <div class="small text-white"><i class="fas fa-angle-right"></i></div> 
                                </div> 
                            </div> 
                        </div> 
                        <div class="col-xl-3 col-md-6"> 
                            <div class="card bg-success text-white mb-4"> 
                                <div class="card-body">Master Users 
                                     <span id="masterUser" class="small badge badge-danger"></span> 
                                </div> 
                                <div class="card-footer d-flex align-items-center justify-content-between"> 
                                    <a class="small text-white stretched-link" href="#">View Details</a> 
                                    <div class="small text-white"><i class="fas fa-angle-right"></i></div> 
                                </div> 
                            </div> 
                        </div> 
                       <div class="col-xl-3 col-md-6"> 
                            <div class="card bg-danger text-white mb-4"> 
                                <div class="card-body">Last Logged IN</div> 
                                <div class="card-footer d-flex align-items-center justify-content-between"> 
                                    <a class="small text-white stretched-link" href="#">View Details</a> 
                                    <div class="small text-white"><i class="fas fa-angle-right"></i></div> 
                                </div> 
                            </div> 
                        </div> 	'				<div class="col-xl-3 col-md-6"> 
                            <div class="card bg-warning text-white mb-4"> 
                                <div class="card-body">Total Tickets 
                                    <span id="totaltickets" class="small badge badge-danger"></span> 
                                </div> 
                                <div class="card-footer d-flex align-items-center justify-content-between"> 
                                    <a class="small text-white stretched-link" href="#">View Details</a> 
                                    <div class="small text-white"><i class="fas fa-angle-right"></i></div> 
                                </div> 
                            </div> 
                        </div> 			'		<div class="col-xl-3 col-md-6"> 
                            <div class="card bg-success text-white mb-4"> 
                                <div class="card-body">Tickets Sold 
                                    <span id="purchasetickets" class="small badge badge-danger"></span> 
                                </div> 
                                <div class="card-footer d-flex align-items-center justify-content-between"> 
                                    <a class="small text-white stretched-link" href="#">View Details</a> 
                                    <div class="small text-white"><i class="fas fa-angle-right"></i></div> 
                                </div> 
                            </div> 
                        </div> 
					<div class="col-xl-3 col-md-6"> 
                            <div class="card bg-danger text-white mb-4"> 
                                <div class="card-body">Accounts</div> 
                                <div class="card-footer d-flex align-items-center justify-content-between"> 
                                    <a class="small text-white stretched-link" href="#">View Details</a> 
                                    <div class="small text-white"><i class="fas fa-angle-right"></i></div> 
                                </div> 
                            </div> 
                        </div> 
					<div class="col-xl-3 col-md-6"> 
                            <div class="card bg-primary text-white mb-4"> 
                                <div class="card-body">Remaining Tickets 
                                    <span id="remainTickets" class="small badge badge-danger"></span> 
                                </div> 
                                <div class="card-footer d-flex align-items-center justify-content-between"> 
                                    <a class="small text-white stretched-link" href="#">View Details</a> 
                                 <div class="small text-white"><i class="fas fa-angle-right"></i></div> 
                                </div> 
                           </div> 
                       </div> 
                   </div>`
                        
  

});
