assetReport = document.querySelector("#assetReport");
assetReport.addEventListener("click", async () => {
  alert("Hey man");
  let dataDiv = document.getElementById("dashBoard");
  dataDiv.innerHTML = "";
  dataDiv.innerHTML = `<h1 class="mt-4">Return Item</h1> 
   <ol class="breadcrumb mb-4"> 
       <li class="breadcrumb-item"><a href="/Panel/User/issue.html">Dashboard</a></li> 
       <li class="breadcrumb-item active">Reports</li> 
   </ol> 
   
<div class="card mb-4" style="visibility:visible; font-size:12px";> 
<div class="card-header"><i class="fas fa-table mr-1"></i>Return Item</div> 
<div class="card-body"> 
<div class="card-body"> 
  


<div class="form-row">
<input class="form-check-input assetClassRadio" type="radio" name="assetRadio" id="assetRadio1" value="date"> 
<div class="col-md-6">
<label class="small mb-1" for="establishmentDate">Start Date</label>
<input class="form-control py-4" id="assetsStartDate" type="date" aria-describedby="report" placeholder="Choose Date" />
</div>
<div class="col-md-6">
<label class="small mb-1" for="establishmentDate">End Date</label>
<input class="form-control py-4" id="assetsEndDate" type="date" aria-describedby="report" placeholder="Choose Date" />
</div>

<button type="button" id="getReportByDate" class="btn btn-link">Get Report</button>
</div>

<div class="form-row">
<input class="form-check-input assetClassRadio" type="radio" name="assetRadio" id="assetRadio2" value="days"> 
<div class="col-md-6">
<button type="button" class="btn btn-link">Last 30 Days</button>
</div>
<div class="col-md-6">
<button type="button" class="btn btn-link">Last 60 Days</button>
</div>
</div>




<table class="ui striped table">
  <thead>
    <tr>
      <th>Name</th>
      <th>Issued Date</th>
      <th>Item Returned</th>
      <th>Due Return Date</th>
      <th>Return Date</th>
      <th>Return</th>
    </tr>
  </thead>
  <tbody id="insertIssueItem">
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

$(document).on("click", "#searchButton", async () => {
  let obj = {
    email: document.getElementById("txtGetEmail").value,
  };
  let baseUrl = window.location.origin;
  let result = await fetch(
    baseUrl + "/stockpile/v1/issue/getIssueItembyEmail",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + sessionStorage.getItem("Token"),
      },
      body: JSON.stringify(obj),
    }
  ).then((data) => {
    return data.json();
  });
  generateAssetTable(result);
});

const generateAssetTable = async (result) => {
  document.getElementById("insertIssueItem").innerHTML = "";
  let tableRow = "";
  console.log(result);
  result.forEach((element) => {
    let buttonVisiblity = "Disabled";
    if (element.returned.toString() === "false") {
      buttonVisiblity = " ";
    }

    tableRow += `  <tr>
    <td>${element.item.itemName}</td>
    <td>${new Date(element.createdAt)}</td>
    <td>${element.returned}</td>
    <td>${element.returnDate}</td> 
    <td><input type="date" id="date_${
      element._id
    }" name="date" ${buttonVisiblity} ></td> 
    <td> <button id="${
      element._id
    }" class="positive ui small button btnreturn" ${buttonVisiblity}>Return</button>    </td>

  </tr>`;
  });

  document.getElementById("insertIssueItem").innerHTML = tableRow;
};

//$(document).on("click", ".btnreturn", async (event) => {});
