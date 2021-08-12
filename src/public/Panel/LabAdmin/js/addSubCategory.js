const addSubCat = document.querySelector("#addSubCategory");
addSubCat.addEventListener("click", async () => {
  let dataDiv = document.getElementById("dashBoard");
  dataDiv.innerHTML = "";
  dataDiv.innerHTML = `<h1 class="mt-4">Add Sub Category</h1> 
                        <ol class="breadcrumb mb-4"> 
                            <li class="breadcrumb-item"><a href="/Panel/User/issue.html">Dashboard</a></li> 
                            <li class="breadcrumb-item active">Add Sub Category</li> 
                        </ol> 
			
		<div class="card mb-4" style="visibility:visible; font-size:12px";> 
            <div class="card-header"><i class="fas fa-table mr-1"></i>Add Sub Category</div> 
                <div class="card-body"> 
                    <div class="card-body"> 
                        <form> 

                        <div class="form-row"> 
                        <div class="col-md-6"> 
                        <div class="form-group"><label class="small mb-1" for="subCategoryName">Select Category</label>
                       
                        <div class="custom-select" style="width:200px;">
                        <select id="parentCategory" class="targetDept" >
                        <option value="Choose">Select Category</option>
                        </select>
                        </div> 
                        </div> 
                        </div> 
                        </div> 


                            <div class="form-row"> 
                                <div class="col-md-6"> 
                                <div class="form-group"><label class="small mb-1" for="categoryName">Sub-Category Name</label><input class="form-control py-4" id="subCategoryName" type="text" placeholder="Enter Sub-Category Name" />
                                </div> 
                                </div> 
                                </div>


                                 
                                <div class="form-group mt-4 mb-0"> 
                                <button id="aSubCategory" type="button" class="btn btn-primary btn-block">Add Sub Category</button> 
                                </div> 
                                </form> 
                                </div> 
							</div> 
                          </div> 
                     </div> 
                      <div></div> 
                  </div>`


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

  const selectionBox = document.querySelector("#parentCategory");
  let dataSelect = '<option value="select"> Select </option>';
  result.forEach((element) => {
    dataSelect += `<option value="${element._id}">${element.categoryName}</option>`;
  });
  selectionBox.innerHTML = dataSelect;

});

$(document).on("click", "#aSubCategory", async () => {

  let subCategoryName = document.getElementById("subCategoryName").value;
  let parentCategory = document.getElementById("parentCategory").value;

  let UserDetails = {
    parentCategory,
    subCategoryName,

  };

  let baseUrl = window.location.origin;
  let resultz = await fetch(baseUrl + "/stockpile/v1/category/addSubCategory", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer "+sessionStorage.getItem("Token")
    },
    body: JSON.stringify(UserDetails),
  });

  if(resultz.status==200){

    alert('Sub Category Added Successfully')
}else if(resultz.status==409){
    alert('Sub Category Already Exists')

}  

});
