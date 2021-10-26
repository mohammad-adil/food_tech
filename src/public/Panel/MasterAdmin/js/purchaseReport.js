let purchaseReport = document.querySelector("#purchaseReport");
purchaseReport.addEventListener("click", async () => {
  let dataDiv = document.getElementById("dashBoard");
  dataDiv.innerHTML = "";
  dataDiv.innerHTML = `
   <ol class="breadcrumb mb-4"> 
       <li class="breadcrumb-item"><a href="/Panel/User/issue.html">Dashboard</a></li> 
       <li class="breadcrumb-item active">Reports</li> 
   </ol> 
   
<div class="card mb-4" style="visibility:visible; font-size:12px";> 
<div class="card-header"><i class="fas fa-table mr-1"></i>Reports</div> 
<div class="card-body"> 
<div class="card-body" style="padding:0;margin-left: 15px"> 
  
<button type="button" id="exports" value=".xls" class="btn export btn-link input-sm" disabled>Export to Excel</button>



<div class="form-row">

<div class="col-md-4">
<label class="small mb-1" for="establishmentDate">Start Date</label>
<input class="form-control  input-sm" id="purchaseStartDate" type="date" aria-describedby="report" placeholder="Choose Date" />
</div>
<div class="col-md-4">
<label class="small mb-1" for="establishmentDate">End Date</label>
<input class="form-control input-sm" id="purchaseEndDate" type="date" aria-describedby="report" placeholder="Choose Date" />
</div>

<button type="button" id="getPurchaseReportByDate" class="btn btn-link input-sm">Get Report</button>
</div>






<table class="ui striped table" id="purchaseTableReport">
  <thead>
    <tr>
    <th>Item Name </th>
      <th>Department</th>
      <th>Lab</th>
      <th>Entered By</th>
      <th>Supplier</th>
      <th>Purchased On</th>
      <th>itemQuantity</th>
      <th>unitPrice</th>
      <th>Total Price</th>
      <th>purchaseOrder</th>
      <th>Entered On</th>

      
    
  
    </tr>
  </thead>
  <tbody id="purchaseItemR">
   </tr>
  </tbody>
</table>
           </div> 
       </div> 
     </div> 
</div> 
 <div></div> 
</div>`;
});

$(document).on("click", "#getPurchaseReportByDate", async () => {
  const startDate = document.getElementById("purchaseStartDate").value;
  const endDate = document.getElementById("purchaseEndDate").value;

  let baseUrl = window.location.origin;
  let result = await fetch(
    baseUrl + `/stockpile/v1/reports/purchase/${startDate}/${endDate}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + sessionStorage.getItem("Token"),
      },
    }
  )
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else if (response.status === 404) {
        return Promise.reject("404");
      } else {
        return Promise.reject("some other error: " + response.status);
      }
    })
    .catch((err) => {
      return err;
    });

  console.log("response", result);

  if (result == "404") {
    document.getElementById("purchaseItemR").innerHTML = "";
    $("#exports").attr("disabled"), "disabled";
    alert("No Data Found");
    result = null;
  }

  if (result != "404") {
    generatePurchaseReportTable(result.data);
  }
});
const generatePurchaseReportTable = async (result) => {
  document.getElementById("purchaseItemR").innerHTML = "";
  let tableRow = "";
  result.forEach((element) => {
    tableRow += `  <tr>
      <td>${element.item.itemName}</td>
      <td>${element.department.departmentName}</td>
      <td>${element.lab.labName}</td>
      <td>${element.enteredBy.name}</td>
      <td>${element.suppliedBy}</td>
      <td>${element.purchaseDate}</td>
      <td>${element.itemQuantity} ${element.unit}</td>
      <td>${element.unitPrice}</td>
      <td>${element.totalPrice}</td>
      <td>${element.purchaseOrder}</td>
      <td>${new Date(element.createdAt)}</td>
 
    </tr>`;
  });

  document.getElementById("purchaseItemR").innerHTML = tableRow;
  $("#exports").removeAttr("disabled");
};

$(document).on("click", ".export", function (event) {
  $("#purchaseTableReport").table2excel({
    // exclude CSS class
    exclude: ".noExl",
    name: "Purchase",
    filename: `Purchase_${new Date()}`,
    fileext: ".xls",
  });
});
