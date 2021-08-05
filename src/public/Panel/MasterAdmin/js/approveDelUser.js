$(document).ready(function () {
  $("input[type='checkbox']").on("change", function () {
    alert("checked");
  });

  $("#check_all").on("click", function () {
    $("input[type='checkbox']").prop("checked", true).change();
  });
});

const approveElm = document.querySelector("#approveUser");
approveElm.addEventListener("click", async () => {
  let dataDiv = document.getElementById("dashBoard");
  dataDiv.innerHTML = "";
  dataDiv.innerHTML = `<h1 class="mt-4">Register</h1> 
    <ol class="breadcrumb mb-4"> 
        <li class="breadcrumb-item"><a href="/Panel/User/issue.html">Dashboard</a></li> 
        <li class="breadcrumb-item active">Add Department</li> 
    </ol> 
  

    <div class="custom-select" style="width:200px;">
    <select id="department" class="targetDept" >
    <option value="Choose">Choose Department</option>
    </select>
    </div>
  
<table class="ui compact celled definition table">
  <thead class="full-width">
    <tr>
      <th></th>
      <th>Name</th>
      <th>E-mail </th>
      <th>Department</th>
    </tr>
  </thead>
  <tbody id="departmentTable">




  
   
  </tbody>
  <tfoot class="full-width">
    <tr>
      <th></th>
      <th colspan="4">
        <div class="ui right floated small primary labeled icon button">
          <i class="user icon"></i> Add User
        </div>
        <div class="ui small  button" id="approve">
          Approve
        </div>
        <div class="ui small  button" id="remove">
          Remove
        </div>
      </th>
    </tr>
  </tfoot>
</table>`;

  let baseUrl = window.location.origin;
  let result = await fetch(baseUrl + "/stockpile/v1/department/getDepartment", {
    method: "GET",
  }).then((data) => {
    return data.json();
  });

  const selectionBox = document.querySelector("#department");
  console.log(selectionBox);
  let dataSelect = '<option value="select"> Select </option>';
  result.forEach((element) => {
    console.log(element);
    dataSelect += `<option value="${element._id}">${element.departmentName}</option>`;
  });
  selectionBox.innerHTML = dataSelect;
});

$(document).on("change", "#department", async (e) => {
  let departmentTable = document.getElementById("departmentTable");
  departmentTable.innerHTML = "";
  departmentTable.innerHTML = `<div class="ui segment">
  <div class="ui active inverted dimmer">
    <div class="ui large text loader">Loading</div>
  </div>
  <p></p>
  <p></p>
  <p></p>
</div>`;

  let baseUrl = window.location.origin;
  let result = await fetch(
    baseUrl + "/stockpile/v1/getUser/" + $(e.target).val(),
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  ).then((data) => {
    return data.json();
  });

  let tableData = "";

  result.forEach((element) => {
    tableData += `  <tr>
    <td class="collapsing">
      <div class="ui fitted slider checkbox">
        <input value=${element._id} name="department" type="checkbox"> <label></label>
      </div>
    </td>
    <td>  ${element.name}  </td>
    <td> ${element.email} </td>
    <td>${element.name} </td>
  </tr>`;
  });

  document.getElementById("departmentTable").innerHTML = tableData;
});

$(document).on("click", "#approve", async () => {
  const element = document.getElementById("department");
  const checkValue = element.options[element.selectedIndex].value;
  let UserDetails = {
    department: checkValue,
  };

  let baseUrl = window.location.origin;
  let resultz = await fetch(baseUrl + "/stockpile/v1/deleteUser", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(UserDetails),
  });

  console.log(resultz);
});
