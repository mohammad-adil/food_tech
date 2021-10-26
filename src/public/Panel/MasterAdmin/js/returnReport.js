let assetReport = document.querySelector("#returnReport");
assetReport.addEventListener("click", async () => {
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
<input class="form-control  input-sm" id="returnStartDate" type="date" aria-describedby="report" placeholder="Choose Date" />
</div>
<div class="col-md-4">
<label class="small mb-1" for="establishmentDate">End Date</label>
<input class="form-control input-sm" id="returnEndDate" type="date" aria-describedby="report" placeholder="Choose Date" />
</div>

<button type="button" id="getReturnReportByDate" class="btn btn-link input-sm">Get Report</button>
</div>






<table class="ui striped table" id="returnTableReport">
  <thead>
    <tr>
    <th>Item Name </th>
      <th>Issued To</th>
      <th>Mobile No</th>
      <th>Issued By</th>
      <th>Returned On</th>
      <th>Recieved By</th>
      
    
  
    </tr>
  </thead>
  <tbody id="ReturnItemR">
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

$(document).on("click", "#getReturnReportByDate", async () => {
  const startDate = document.getElementById("returnStartDate").value;
  const endDate = document.getElementById("returnEndDate").value;

  let baseUrl = window.location.origin;
  let result = await fetch(
    baseUrl + `/stockpile/v1/reports/return/${startDate}/${endDate}`,
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
    document.getElementById("IssueItemR").innerHTML = "";
    $("#exports").attr("disabled"), "disabled";
    alert("No Data Found");
    result = null;
  }

  if (result != "404") {
    generateReturnReportTable(result.data);
  }
});
const generateReturnReportTable = async (result) => {
  document.getElementById("ReturnItemR").innerHTML = "";
  let tableRow = "";
  result.forEach((element) => {
    tableRow += `  <tr>
      <td>${element.issueId.item.itemName}</td>
      <td>${element.issueId.issuedTo.name}</td>
      <td>${element.issueId.issuedTo.phone}</td>
      <td>${element.issueId.issuedBy.name}</td>
      <td>${new Date(element.createdAt)}</td>
      <td>${element.recievedBy.name}</td>
     
      
  
    </tr>`;
  });

  document.getElementById("ReturnItemR").innerHTML = tableRow;
  $("#exports").removeAttr("disabled");
};

$(document).on("click", ".export", function (event) {
  $("#returnTableReport").table2excel({
    // exclude CSS class
    exclude: ".noExl",
    name: "REturn",
    filename: `Return_${new Date()}`, //do not include extension
    fileext: ".xls", // file extension
  });
});
