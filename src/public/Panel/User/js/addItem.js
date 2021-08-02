$(document).on('click', '#addItem', function () {
    let dataDiv = document.getElementById("dashBoard");
    dataDiv.innerHTML = '';
   dataDiv.innerHTML = `<h1 class="mt-4">Add Item</h1> 
                        <ol class="breadcrumb mb-4"> 
                            <li class="breadcrumb-item"><a href="/Panel/User/issue.html">Dashboard</a></li> 
                            <li class="breadcrumb-item active">addItem</li> 
                        </ol> 
						<div> 
		<div class="card mb-4" style="visibility:visible; font-size:12px";> 
            <div class="card-header"><i class="fas fa-table mr-1"></i>Add Item</div> 
                <div class="card-body"> 
                    <div class="card-body"> 
                        <form> 
                            <div class="form-row"> 
                                <div class="col-md-6"> 
                                <div class="form-group"><label class="small mb-1" for="inputAddItem">Item Name</label><input class="form-control py-4" id="txtFname" type="text" placeholder="Enter item name" /></div> 
                                </div> 
                                    <div class="col-md-6"> 
                                      <div class="form-group"><label class="small mb-1" for="inputAddItem">Total Quantity</label><input class="form-control py-4" id="txtLname" type="text" placeholder="Enter total quantity" /></div> 
                                         </div> 
                                            </div> 
											<div class="form-group"><label class="small mb-1" for="inputAddItem">Supplied By</label><input class="form-control py-4" id="txtEmail" type="email" aria-describedby="emailHelp" placeholder="Enter supplied by" /></div> 
                                            <div class="form-row"> 
                                                <div class="col-md-6"> 
                                                    <div class="form-group"><label class="small mb-1" for="inputAddItem">Unit</label>
                                                    <select id="unit type" name="Title" class="custom-select form-control-lg" style="width:80px;"> 
                                                    <option selected>Select</option> 
                                                    <option value="Number">Number</option> 
                                                    <option value="Kg">kg</option> 
                                                  </select> 
                                                    </div> 
                                                </div> 
                                                <div class="col-md-6"> 
                                                    <div class="form-group"><label class="small mb-1" for="category">Category</label>
                                                    
                                                    <select id="category" name="Title" class="custom-select form-control-lg" style="width:80px;"> 
                                                    <option selected>Select</option> 
                                                    <option value="Equipment">Equipment</option> 
                                                    <option value="Consumable">Consumable</option> 
                                                    <option value="Non Consumable">Non Consumable</option> 
                                                  </select>  
                                                    
                                                    </div> 
                                               </div> 
											<div class="col-md-6"> 
                                                   <div class="form-group"><label class="small mb-1" for="unitPrice">Unit Price</label><input class="form-control py-4" id="txtPin" type="text" placeholder="Enter Unit Price" /></div> 
                                                    <div class="form-group"><label class="small mb-1" for="source">Source</label><input class="form-control py-4" id="txtPassword" type="password" placeholder="Enter Source" /></div>
											</div> 
                                              </div> 
                                          <div class="form-group mt-4 mb-0"> 
                                              <button id="registerAgent" type="button" class="btn btn-primary btn-block">AddItem</button> 
                                          </div> 
                                      </form> 
                                  </div> 
							</div> 
                          </div> 
                     </div> 
                      <div></div> 
                  </div>

   
   
   `






});