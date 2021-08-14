var  baseUrl = window.location.origin;
const approveElm = document.querySelector("#approveUser");
approveElm.addEventListener("click", async () => {
  let dataDiv = document.getElementById("dashBoard");
  dataDiv.innerHTML = "";
  dataDiv.innerHTML = `<h1 class="mt-4">Register</h1> 
    <ol class="breadcrumb mb-4"> 
        <li class="breadcrumb-item"><a href="/Panel/User/issue.html">Dashboard</a></li> 
        <li class="breadcrumb-item active">Add Department</li> 
    </ol> 
  

    <select id="selectApproveDelDepartment" class="targetDept custom-select" >
    <option value="Choose">Choose Department</option>
    </select>
    </div>
  
<table class="ui compact celled definition table">
  <thead class="full-width">
    <tr>
      <th></th>
      <th>Name</th>
      <th>E-mail </th>
      <th>Active</th>
    </tr>
  </thead>
  <tbody id="departmentTable">

  </tbody>
  <tfoot class="full-width">
    <tr>
      <th></th>
      <th colspan="4">
        <div class="ui right floated small primary labeled icon button">
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
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer "+sessionStorage.getItem("Token")
    },
  }).then((data) => {
    return data.json();
  });

  const selectionBox = document.querySelector("#selectApproveDelDepartment");
  let dataSelect = '<option value="select"> Select </option>';
  result.forEach((element) => {
    dataSelect += `<option value="${element._id}">${element.departmentName}</option>`;
  });
  selectionBox.innerHTML = dataSelect;
});

$(document).on("change", "#selectApproveDelDepartment", async (e) => {
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
        "Authorization": "Bearer "+sessionStorage.getItem("Token")
      },
    }
  ).then((data) => {
    return data.json();
  });

  let tableData = "";

  result.forEach((element) => {
    tableData += `  <tr>
    <td class="collapsing">
    <div class="inline fields">
        <input type="radio" value="${element._id}"" name="user"  checked="" tabindex="0" class="hidden">
      </div>
    </td>
    <td>  ${element.name}  </td>
    <td> ${element.email} </td>
    <td>${element.active} </td>
  </tr>`;
  });

  departmentTable.innerHTML = tableData;
});

$(document).on("click", "#remove", async () => {

  const userId =  $('input[name=user]:checked').val();
  let payload = {
    deleteUser: userId,
  };
  

  let api = baseUrl+ "/stockpile/v1/deleteUser"
  let deletedUser = await serverRequest(payload,api,"DELETE" )
  if(deletedUser.status==200){

    alert('User Removed')
}else{
    alert('Error')
}
  
});


$(document).on("click", "#approve", async () => {

  const userId =  $('input[name=user]:checked').val();
  let payload = {
    activeUser: userId,
  };
  

  let api = baseUrl+ "/stockpile/v1/activeUser"
  let approvedUser = await serverRequest(payload,api,"PATCH" )

  if(approvedUser.status==200){

    alert('User Approved')
}else{
    alert('Error')
}
});















const serverRequest = async (payload,url,method)=>{
let result = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer "+sessionStorage.getItem("Token")
      },
      body: JSON.stringify(payload),
    });
  
  

return result

}








