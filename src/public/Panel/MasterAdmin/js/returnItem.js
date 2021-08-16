const btnReturnItem = document.querySelector("#returnItem");
btnReturnItem.addEventListener("click", async () => {
  let dataDiv = document.getElementById("dashBoard");
  dataDiv.innerHTML = "";
  dataDiv.innerHTML = `<h1 class="mt-4">Return Item</h1> 
   <ol class="breadcrumb mb-4"> 
       <li class="breadcrumb-item"><a href="/Panel/User/issue.html">Dashboard</a></li> 
       <li class="breadcrumb-item active">Return Item</li> 
   </ol> 

<div class="card mb-4" style="visibility:visible; font-size:12px";> 
<div class="card-header"><i class="fas fa-table mr-1"></i>Return Item</div> 
<div class="card-body"> 
<div class="card-body"> 
  

<div class="form-row"> 
<div class="col-md-6">
<div class="ui big icon input">
  <input id="txtGetEmail" type="text" placeholder="Search...">
  <i id= "searchButton" class="inverted circular search link icon"></i>
</div>
</div>
</div>



<table class="ui striped table">
  <thead>
    <tr>
      <th>Name</th>
      <th>Issued Date</th>
      <th>Returnable</th>
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
</div>`;
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
  generateTable(result);
});

const generateTable = async (result) => {
  document.getElementById("insertIssueItem").innerHTML = "";
  let tableRow = "";

  result.forEach((element) => {
    tableRow += `  <tr>
    <td>${element.issuedTo.name}</td>
    <td>${new Date(element.createdAt)}</td>
    <td>${element.returnable}</td>
    <td>${element.returnDate}</td>
  </tr>`;
  });


  document.getElementById("insertIssueItem").innerHTML = tableRow;
};
