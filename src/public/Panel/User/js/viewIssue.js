assetReport = document.querySelector("#viewIssuedItem");
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
<input class="form-control  input-sm" id="issueStartDate" type="date" aria-describedby="report" placeholder="Choose Date" />
</div>
<div class="col-md-4">
<label class="small mb-1" for="establishmentDate">End Date</label>
<input class="form-control input-sm" id="issueEndDate" type="date" aria-describedby="report" placeholder="Choose Date" />
</div>

<button type="button" id="getIssueReportByDate" class="btn btn-link input-sm">Get Report</button>
</div>






<table class="ui striped table" id="issueTableReport">
  <thead>
    <tr>
    <th>Item Name </th>
      <th>Mobile No</th>
      <th>Issued By</th>
      <th>Issued On</th>
      <th>Item Returned</th>
      <th>Due Return Date</th>
    
  
    </tr>
  </thead>
  <tbody id="IssueItemR">
   </tr>
  </tbody>
</table>
           </div> 
       </div> 
     </div> 
</div> 
 <div></div> 
</div>



`;
});

const getAssetByDate = async (startDate, endDate) => {
  if (!startDate || !endDate) {
    alert("Choose Start/End Date");
    return false;
  }
};

$(document).on("click", ".assetClassRadio", async function (e) {
  const apiTarget = e.target.value;
  if (apiTarget == "days") {
    const startDate = document.getElementById("#assetsStartDate").value;
    const endDate = document.getElementById("#assetsEndDate").value;

    const assetResultByDate = await getAssetByDate(startDate, endDate);
  }
  if (apiTarget == "date") {
  }
});

$(document).on("click", "#getIssueReportByDate", async () => {
  const startDate = document.getElementById("issueStartDate").value;
  const endDate = document.getElementById("issueEndDate").value;

  let baseUrl = window.location.origin;
  let result = await fetch(
    baseUrl + `/stockpile/v1/issue/getIssue/${startDate}/${endDate}`,
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

  if (result == "404") {
    document.getElementById("IssueItemR").innerHTML = "";
    $("#exports").attr("disabled"), "disabled";
    alert("No Data Found");
    result = null;
  }

  if (result != "404") {
    generateAssetTable(result.data);
  }
});

const generateAssetTable = async (result) => {
  document.getElementById("IssueItemR").innerHTML = "";
  let tableRow = "";
  result.forEach((element) => {
    tableRow += `  <tr>
    <td>${element.item.itemName}</td>
    <td>${element.issuedTo.phone}</td>
    <td>${element.issuedBy.name}</td>
    <td>${new Date(element.createdAt)}</td>
    <td>${element.returned}</td>
    <td>${element.returnDate}</td> 
    

  </tr>`;
  });

  document.getElementById("IssueItemR").innerHTML = tableRow;
  $("#exports").removeAttr("disabled");
};

$(document).on("click", ".export", function (event) {
  $("#issueTableReport").table2excel({
    // exclude CSS class
    exclude: ".noExl",
    name: "ISSUE",
    filename: `Issue_${new Date()}`, //do not include extension
    fileext: ".xls", // file extension
  });
});
