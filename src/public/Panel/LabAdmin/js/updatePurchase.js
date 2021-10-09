const btnUpdatePurchase = document.querySelector('#updatePurchaseItem')
btnUpdatePurchase.addEventListener('click', async ()=>{
    let dataDiv = document.getElementById("dashBoard");
    dataDiv.innerHTML = '';
    dataDiv.innerHTML = `<h1 class="mt-4">Update Purchase</h1> 
    <ol class="breadcrumb mb-4"> 
        <li class="breadcrumb-item"><a href="/Panel/User/issue.html">Dashboard</a></li> 
        <li class="breadcrumb-item active">Update Purchase</li> 
    </ol> 
    <div> 
<div class="card mb-4" style="visibility:visible; font-size:12px";> 
<div class="card-header"><i class="fas fa-table mr-1"></i>Update Purchase</div> 
<div class="card-body"> 
<div class="card-body"> 
    <form id="updatePurchaseForm"> 


        <div class="form-row"> 
             
                <div class="col-md-6"> 
                  <div class="form-group">
                        <label class="small mb-1" for="department Select">Department</label>
        
            <select id="updatePurchaseGetDepartment" class="targetDept custom-select" >
            <option value="Choose">Choose Department</option>
            </select>
            
                  </div> 
                     </div> 

                     <div class="col-md-6"> 
                     <div class="form-group">
                               <label class="small mb-1" for="inputAddItem">ChooseLab</label>
                               <select id="updatePurchaseGetLabFromDepartment" class="targetDept custom-select" >
                               <option value="Choose">Choose Lab</option>
                               </select>
                     </div> 
                     </div>
                     </div>
                     
                     

                     

                     <div class="form-row">
                     <div class="form-group">
                               <label class="small mb-1" for="purchaseUpdateSelect">Select Purchased Item to Update</label>
                               <select id="purchaseUpdateSelect" class="targetDept custom-select" >
                               <option value="Choose">Select Purchased Item to Update</option>
                               </select>
                     </div> 
                     </div> 





                        <div class="form-row">  

            <div class="col-md-6"> 
            <div class="form-group">
                      <label class="small mb-1" for="inputAddItem">Item Name</label>
                      <input class="form-control py-4" id="addItemId" type="text" placeholder=" " disabled />
                   
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
                      <label class="small mb-1" for="itemQuantity">Item Quantity</label>
                     <input class="form-control py-4" id="itemQuantity" type="number" placeholder=" " disabled/>
            </div> 
            </div> 
                <div class="col-md-6"> 
                  <div class="form-group">
                        <label class="small mb-1" for="unit">Unit</label>
                        <select id="unit" class="targetDept custom-select" disabled>
                        <option value="Choose"></option>
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
                     <input class="form-control py-4" id="unitPrice" type="Number" placeholder=" " disabled />
            </div> 
            </div> 
                <div class="col-md-6"> 
                  <div class="form-group">
                        <label class="small mb-1" for="totalPrice">Total Price</label>
                        <input class="form-control py-4" id="totalPrice" type="Number" placeholder=" " disabled/>
                  </div> 
                     </div> 
                        </div> 


























                        <div class="form-row"> 
            <div class="col-md-6"> 
            <div class="form-group">
                      <label class="small mb-1" for="chooseCurrency">Currency</label>
                      <select id="currency" class="targetDept custom-select" disabled >
                      <option value="Choose"></option>
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
                        <input class="form-control py-4" id="suppliedBy" type="text" placeholder=" " />
                  </div> 
                     </div> 
                        </div> 







                        <div class="form-row"> 
            <div class="col-md-6"> 
            <div class="form-group">
                        <label class="small mb-1" for="purchaseDate">Purchase Date</label>
                        <input class="form-control py-4" id="purchaseDate" type="date" placeholder="Purchase Date" />
                  </div> 
                     </div> 
                     <div class="col-md-6"> 
                     <div class="form-group">
                               <label class="small mb-1" for="purchaseOrderNumber">Purchase Order Number</label>
                              <input class="form-control py-4" id="purchaseOrderNumber" type="text" placeholder="Purchase Order Number" />
                     </div> 
                        </div> 






                      <div class="form-group mt-4 mb-0"> 
                          <button id="btnUpdatePurchaseItem" type="button" class="btn btn-primary btn-block">Update Purchase Details</button> 
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

const selectionBox = document.querySelector("#updatePurchaseGetDepartment");
let dataSelect = '<option value="select"> Select </option>';
result.forEach((element) => {
dataSelect += `<option value="${element._id}">${element.departmentName}</option>`;
});
selectionBox.innerHTML = dataSelect;




});

$(document).on("change", "#updatePurchaseGetDepartment", async (e) => {

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


const selectionBox = document.querySelector("#updatePurchaseGetLabFromDepartment");
let dataSelect = '<option value="select"> Select </option>';
result.forEach((element) => {
dataSelect += `<option value="${element._id}">${element.labName}</option>`;
});
selectionBox.innerHTML = dataSelect;
});






/****************************Call Purchased Items from LAb****************************************************** */


$(document).on("change", "#updatePurchaseGetLabFromDepartment", async (e) => {

    let baseUrl = window.location.origin;
    let result = await fetch(baseUrl + "/stockpile/v1/purchase/getPurchasebyLab/" + $(e.target).val(), {
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


   await  result.forEach((element) => {
    dataSelect += `<option value="${element._id}">${element.item.itemName}</option>`;
    });
    selectionBox.innerHTML = dataSelect;
    });


/****************************Call Item from LAb****************************************************** */


$(document).on("change", "#updatePurchaseGetLabFromDepartment", async (e) => {

let baseUrl = window.location.origin;
let result = await fetch(baseUrl + "/stockpile/v1/purchase/getPurchasebyLab/" + $(e.target).val(), {
method: "GET",
headers: {
"Content-Type": "application/json",
"Authorization": "Bearer "+sessionStorage.getItem("Token")
},
}).then((data) => {
return data.json();
});

const selectionBox = document.querySelector("#purchaseUpdateSelect");
let dataSelect = '<option value="select"> Select </option>';
result.forEach((element) => {
dataSelect += `<option value="${element._id}">${element.item.itemName}</option>`;
});
selectionBox.innerHTML = dataSelect;
});


/******************************Put details in form********************************************************** */

$(document).on("change", "#purchaseUpdateSelect", async (e) => {
  
  let baseUrl = window.location.origin;
  let result1 = await fetch(baseUrl + "/stockpile/v1/purchase/getPurchasebyId/" + $(e.target).val(),
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
  document.getElementById("addItemId").value= result1.item.itemName;
  $('#addItemId').attr('value', result1.item._id);
  document.getElementById("sourceItem").value= result1.source;
  document.getElementById("itemQuantity").value = result1.itemQuantity;
  document.getElementById("unit").value= result1.unit;
  document.getElementById("unitPrice").value= result1.unitPrice;
  document.getElementById("totalPrice").value= result1.totalPrice;
  document.getElementById("currency").value= result1.currency;
  document.getElementById("suppliedBy").value= result1.suppliedBy;
  document.getElementById("purchaseDate").value= result1.purchaseDate;
  document.getElementById("purchaseOrderNumber").value= result1.purchaseOrder;
  
  
  


});




/*********************************Fire Request******************************************************** */


$(document).on("click", "#btnUpdatePurchaseItem", async () => {
item = document.getElementById("addItemId").getAttribute("value");
let itemQuantity = parseInt (document.getElementById("itemQuantity").value);
const element = document.getElementById("updatePurchaseGetDepartment");
const departmentId = element.options[element.selectedIndex].value;
let suppliedBy = document.getElementById("suppliedBy").value;

let source = document.getElementById("sourceItem").value;
let lab = document.getElementById("updatePurchaseGetLabFromDepartment").value;
let unitPrice = parseInt(document.getElementById("unitPrice").value);
let totalPrice = parseInt(document.getElementById("totalPrice").value);
let currency = document.getElementById("currency").value;
let unit = document.getElementById("unit").value;
let purchaseDate = document.getElementById("purchaseDate").value;
let purchaseOrder = document.getElementById("purchaseOrderNumber").value;

let updatePurchasePayLoad = {
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
const uPurchase = document.getElementById("purchaseUpdateSelect");
const updatePurchaseID = uPurchase.options[uPurchase.selectedIndex].value;


let baseUrl = window.location.origin;
let res = await fetch(baseUrl + "/stockpile/v1/purchase/update/" + updatePurchaseID, {
method: "PATCH",
headers: {
"Content-Type": "application/json",
"Authorization": "Bearer "+sessionStorage.getItem("Token")
},

body: JSON.stringify(updatePurchasePayLoad),
});
if (res.status == 200) {
  alert("Purchase Updated Successfully");
  $("#updatePurchaseForm")[0].reset();
} else {
  alert("Something went Wrong");
}
});