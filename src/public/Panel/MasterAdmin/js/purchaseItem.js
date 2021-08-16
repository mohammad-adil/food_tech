const btnItemPurchase = document.querySelector("#purchaseItem");
btnItemPurchase.addEventListener("click", async () => {
    let dataDiv = document.getElementById("dashBoard");
    dataDiv.innerHTML = '';
   dataDiv.innerHTML = `<h1 class="mt-4">Purchase Item</h1> 
                        <ol class="breadcrumb mb-4"> 
                            <li class="breadcrumb-item"><a href="/Panel/User/issue.html">Dashboard</a></li> 
                            <li class="breadcrumb-item active">Purchase Item</li> 
                        </ol> 
						<div> 
		<div class="card mb-4" style="visibility:visible; font-size:12px";> 
            <div class="card-header"><i class="fas fa-table mr-1"></i>Purchase Item</div> 
                <div class="card-body"> 
                    <div class="card-body"> 
                        <form id="purchaseItemForm"> 

            
                            <div class="form-row"> 
                                 
                                    <div class="col-md-6"> 
                                      <div class="form-group">
                                            <label class="small mb-1" for="department Select">Department</label>
                            
                                <select id="itemGetDepartment" class="targetDept custom-select" >
                                <option value="Choose">Choose Department</option>
                                </select>
                                
                                      </div> 
                                         </div> 

                                         <div class="col-md-6"> 
                                         <div class="form-group">
                                                   <label class="small mb-1" for="inputAddItem">ChooseLab</label>
                                                   <select id="itemGetLabFromDepartment" class="targetDept custom-select" >
                                                   <option value="Choose">Choose Lab</option>
                                                   </select>
                                         </div> 
                                         </div>
                                            </div> 





                                            <div class="form-row">  

                                <div class="col-md-6"> 
                                <div class="form-group">
                                          <label class="small mb-1" for="inputAddItem">Item Name</label>
                                       
                                          <select id="addItemId" class="targetDept custom-select" >
                                <option value="Choose">Choose Item</option>
                                </select>
                                       
                                </div> 
                                </div>
                                    <div class="col-md-6"> 
                                      <div class="form-group">
                                            <label class="small mb-1" for="inputAddItem">Item Source</label>
                                            <select id="sourceItem" class="targetDept custom-select" >
                                          <option value="Choose">Choose Source</option>
                                          <option value="University">University</option>
                                          <option value="Department">Department</option>
                                          <option value="External">External</option>
                                          </select>
                                      </div> 
                                         </div> 
                                            </div> 








                                            <div class="form-row"> 
                                <div class="col-md-6"> 
                                <div class="form-group">
                                          <label class="small mb-1" for="categorySelect">Select Category</label>
                                          <select id="categorySelect" class="targetDept custom-select" >
                                          <option value="Choose">Select Category</option>
                                          </select>
                                </div> 
                                </div> 
                                    <div class="col-md-6"> 
                                      <div class="form-group">
                                            <label class="small mb-1" for="subCategorySelect">Choose Sub Category</label>
                                            <select id="subCategorySelect" class="targetDept custom-select" >
                                          <option value="Choose">Choose Sub Category</option>
                                          </select>
                                      </div> 
                                         </div> 
                                            </div> 











                                            <div class="form-row"> 
                                <div class="col-md-6"> 
                                <div class="form-group">
                                          <label class="small mb-1" for="itemQuantity">Item Quantity</label>
                                         <input class="form-control py-4" id="itemQuantity" type="number" placeholder="Enter Quantity" />
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
















                                            <div class="form-row"> 
                                <div class="col-md-6"> 
                                <div class="form-group">
                                          <label class="small mb-1" for="unitPrice">Unit Price</label>
                                         <input class="form-control py-4" id="unitPrice" type="Number" placeholder="Enter Unit Price" />
                                </div> 
                                </div> 
                                    <div class="col-md-6"> 
                                      <div class="form-group">
                                            <label class="small mb-1" for="totalPrice">Total Price</label>
                                            <input class="form-control py-4" id="totalPrice" type="Number" placeholder="Enter total quantity" disabled/>
                                      </div> 
                                         </div> 
                                            </div> 



                                            <div class="form-row"> 
                                <div class="col-md-6"> 
                                <div class="form-group">
                                          <label class="small mb-1" for="chooseCurrency">Currency</label>
                                          <select id="currency" class="targetDept custom-select" >
                                          <option value="Choose">Choose Currency</option>
                                          <option value="INR">INR</option>
                                          <option value="USD">USD</option>
                                          <option value="AUD">AUD</option>
                                          <option value="EUR">EUR</option>
                                          <option value="GBP">GBP</option>
                                          </select>
                                </div> 
                                </div> 
                                    <div class="col-md-6"> 
                                      <div class="form-group">
                                            <label class="small mb-1" for="suppliedBy">Supplier</label>
                                            <input class="form-control py-4" id="suppliedBy" type="text" placeholder="Enter Supplier Name" />
                                      </div> 
                                         </div> 
                                            </div> 







                                            <div class="form-row"> 
                                <div class="col-md-6"> 
                                <div class="form-group">
                                          <label class="small mb-1" for="itemAvailable">Item Availibility</label>
                                         <input class="form-control py-4" id="itemAvailable" type="text" placeholder="Item Availibility" disabled/>
                                </div> 
                                </div> 
                                    <div class="col-md-6"> 
                                      <div class="form-group">
                                            <label class="small mb-1" for="purchaseDate">Purchase Date</label>
                                            <input class="form-control py-4" id="purchaseDate" type="date" placeholder="Purchase Date" />
                                      </div> 
                                         </div> 
                                            </div> 






                                            <div class="form-row"> 
                                <div class="col-md-6"> 
                                <div class="form-group">
                                          <label class="small mb-1" for="purchaseOrderNumber">Purchase Order Number</label>
                                         <input class="form-control py-4" id="purchaseOrderNumber" type="text" placeholder="Purchase Order Number" />
                                </div> 
                                </div> 
                                </div> 






                                          <div class="form-group mt-4 mb-0"> 
                                              <button id="btnPurchseItem" type="button" class="btn btn-primary btn-block">Add Item</button> 
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

  const selectionBox = document.querySelector("#itemGetDepartment");
  let dataSelect = '<option value="select"> Select </option>';
  result.forEach((element) => {
    dataSelect += `<option value="${element._id}">${element.departmentName}</option>`;
  });
  selectionBox.innerHTML = dataSelect;




  await addCategory1()
  


});

$(document).on("change", "#itemGetDepartment", async (e) => {
 
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
  
    const selectionBox = document.querySelector("#itemGetLabFromDepartment");
    let dataSelect = '<option value="select"> Select </option>';
    result.forEach((element) => {
      dataSelect += `<option value="${element._id}">${element.labName}</option>`;
    });
    selectionBox.innerHTML = dataSelect;
  });


  const addCategory1 = async () => {
 
    let baseUrl = window.location.origin;
    let result = await fetch(baseUrl + "/stockpile/v1/category/getCategory", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer "+sessionStorage.getItem("Token")
      },
    }).then((data) => {
      return data.json();
    });
  
    const selectionBox = document.querySelector("#categorySelect");
    let dataSelect = '<option value="select"> Select </option>';
    result.forEach((element) => {
      dataSelect += `<option value="${element._id}">${element.categoryName}</option>`;
    });
    selectionBox.innerHTML = dataSelect;
  };



  $(document).on("change", "#categorySelect", async (e) => {

  let baseUrl = window.location.origin;
  let result = await fetch(baseUrl + "/stockpile/v1/category/getSubCategory", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer "+sessionStorage.getItem("Token")
    },
  }).then((data) => {
    return data.json();
  });

  const selectionBox = document.querySelector("#subCategorySelect");
  let dataSelect = '<option value="select"> Select </option>';
  result.forEach((element) => {
    dataSelect += `<option value="${element._id}">${element.subCategoryName}</option>`;
  });
  selectionBox.innerHTML = dataSelect;
});




/****************************Call Item from LAb****************************************************** */


$(document).on("change", "#itemGetLabFromDepartment", async (e) => {

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

  const selectionBox = document.querySelector("#addItemId");
  let dataSelect = '<option value="select"> Select </option>';
  result.forEach((element) => {
    dataSelect += `<option value="${element._id}">${element.itemName}</option>`;
  });
  selectionBox.innerHTML = dataSelect;
});


/******************************Calculating Total Price from Unit Price********************************************************** */

    $(document).on("keyup", "#unitPrice", async (e) => {

        let quantity = $("#itemQuantity").val()
        let uprice = e.target.value
        let totalPrice=quantity *  uprice
        $("#totalPrice").val()
        $("#totalPrice").val(totalPrice)
        
});


/******************************Calculating Item Availl********************************************************** */

$(document).on("keyup", "#itemQuantity", async (e) => {

    let totalAvail = e.target.value
    $("#itemAvailable").val(totalAvail)
    
});

/*********************************Fire Request******************************************************** */


$(document).on("click", "#btnPurchseItem", async () => {
    item = document.getElementById("addItemId").value;
    let itemQuantity = parseInt (document.getElementById("itemQuantity").value);
    const element = document.getElementById("itemGetDepartment");
    const departmentId = element.options[element.selectedIndex].value;
    let suppliedBy = document.getElementById("suppliedBy").value;
  
    let source = document.getElementById("sourceItem").value;
    let lab = document.getElementById("itemGetLabFromDepartment").value;
    let unitPrice = parseInt(document.getElementById("unitPrice").value);
    let totalPrice = parseInt(document.getElementById("totalPrice").value);
    let currency = document.getElementById("currency").value;
    let unit = document.getElementById("unit").value;
    let purchaseDate = document.getElementById("purchaseDate").value;
    let purchaseOrder = document.getElementById("purchaseOrderNumber").value;

    let purchasePayLoad = {
      item,
      itemQuantity,
      department: departmentId,
      suppliedBy,
      source,
      lab,
      unitPrice,
      totalPrice,
      currency,
      unit,
      purchaseDate,
      purchaseOrder,
    };
    let baseUrl = window.location.origin;
    let res = await fetch(baseUrl + "/stockpile/v1/purchase/purchaseItem", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer "+sessionStorage.getItem("Token")
      },
      
      body: JSON.stringify(purchasePayLoad),
    });

    console.log(res)

    if (res.status == 201) {
      alert("Item Purchase Complete");
      $("#purchaseItemForm")[0].reset();
    } else {
      alert("Something went Wrong");
    }
  });