let updateIssueItem = document.querySelector("#updateIssue");
updateIssueItem.addEventListener("click", async () => {
  let dataDiv = document.getElementById("dashBoard");
  dataDiv.innerHTML = "";
  dataDiv.innerHTML = `<h1 class="mt-4">update Item</h1> 
     <ol class="breadcrumb mb-4"> 
         <li class="breadcrumb-item"><a href="/Panel/MasterAdmin/index.html">Dashboard</a></li> 
         <li class="breadcrumb-item active">Update Item</li> 
     </ol> 
  
  <div class="card mb-4" style="visibility:visible; font-size:12px";> 
  <div class="card-header"><i class="fas fa-table mr-1"></i>Return Item</div> 
  <div class="card-body"> 
  <div class="card-body"> 
    
  
  <div class="form-row"> 
  <div class="col-md-6">
  <div class="ui big icon input">
    <input id="UpdateIssueEmail" type="text" placeholder="Search...">
    <i id= "searchUpdateButton" class="inverted circular search link icon"></i>
  </div>
  </div>
  </div>
  
  
  
  <table class="ui striped table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Issued Date</th>
        <th>Item Returned</th>
       <th>Quantity</th>
       <th>Item</th>
        <th>Due Return Date</th>
        <th>Issue Date</th>
        <th>Update</th>
      </tr>
    </thead>
    <tbody id="UpdateIssueItem">
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

$(document).on("click", "#searchUpdateButton", async () => {
  let obj = {
    email: document.getElementById("UpdateIssueEmail").value,
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
  generateupdateIssueTable(result);
});

const generateupdateIssueTable = async (result) => {
  document.getElementById("UpdateIssueItem").innerHTML = "";
  let tableRow = "";
  result.forEach((element) => {
    let buttonVisiblity = "Disabled";
    if (element.returned.toString() === "false") {
      buttonVisiblity = " ";
    }

    tableRow += `  <tr>
      <td>${element.item.itemName}</td>
      <td>${new Date(element.createdAt)}</td>
      <td>${element.returned}</td>
      <td>${element.quantityIssued}</td>
      <td>${element.item.itemName}</td>
      <td>${element.returnDate}</td> 
      <td><input type="date" id="date_${
        element._id
      }" name="date" ${buttonVisiblity} ></td> 
      <td> <button id="${
        element._id
      }" class="positive ui small button btnIssueuUpdate" ${buttonVisiblity}>Update</button> </td>
  
    </tr>`;
  });

  document.getElementById("UpdateIssueItem").innerHTML = tableRow;
};

$(document).on("click", ".btnIssueuUpdate", async function (e) {
  var _id = $(e.target).attr("id");
  const issueDate = document.getElementById("date_" + _id).value;
  let baseUrl = window.location.origin;
  let result = await fetch(
    baseUrl + `/stockpile/v1/issue/update/${e.target.value}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + sessionStorage.getItem("Token"),
      },
      body: JSON.stringify({ _id, date: issueDate }),
    }
  ).then((data) => {
    return data.json();
  });
  if (result) {
    alert("Successfully updated");
    console.log(result);
  }
});

$(document).on("click", ".issue", async (event) => {
  var id = $(event.target).attr("id");
  const issueDate = document.getElementById("date_" + id).value;

  let baseUrl = window.location.origin;
  let result = await fetch(baseUrl + "/stockpile/v1/return/returnItem/" + id, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + sessionStorage.getItem("Token"),
    },
    body: JSON.stringify({ returnedDate: returnDate }),
  }).then((data) => {
    return data.json();
  });

  if (result) {
    alert("Successfully intiated");
  }
});
