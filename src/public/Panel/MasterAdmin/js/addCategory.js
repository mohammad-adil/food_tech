const addCat = document.querySelector("#addCategory");
addCat.addEventListener("click", async () => {
  let dataDiv = document.getElementById("dashBoard");
  dataDiv.innerHTML = "";
  dataDiv.innerHTML = `<h1 class="mt-4">Add Category</h1> 
                        <ol class="breadcrumb mb-4"> 
                            <li class="breadcrumb-item"><a href="/Panel/User/issue.html">Dashboard</a></li> 
                            <li class="breadcrumb-item active">Add Category</li> 
                        </ol> 
			
		<div class="card mb-4" style="visibility:visible; font-size:12px";> 
            <div class="card-header"><i class="fas fa-table mr-1"></i>Add Category</div> 
                <div class="card-body"> 
                    <div class="card-body"> 
                        <form> 
                            <div class="form-row"> 
                                <div class="col-md-6"> 
                                <div class="form-group"><label class="small mb-1" for="categoryName">Category Name</label><input class="form-control py-4" id="categoryName" type="text" placeholder="Enter Category Name" />
                                </div> 
                                </div> 
                                </div>
                                 
                                <div class="form-group mt-4 mb-0"> 
                                <button id="aCategory" type="button" class="btn btn-primary btn-block">Add Category</button> 
                                </div> 
                                </form> 
                                </div> 
							</div> 
                          </div> 
                     </div> 
                      <div></div> 
                  </div>`;
});

$(document).on("click", "#aCategory", async () => {
  let categoryName = document.getElementById("categoryName").value;
  //const element = document.getElementById("department");
  //const checkValue = element.options[element.selectedIndex].value;

  let UserDetails = {
    categoryName,
  };

  let baseUrl = window.location.origin;
  let resultz = await fetch(baseUrl + "/stockpile/v1/category/addCategory", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer "+sessionStorage.getItem("Token")
    },
    body: JSON.stringify(UserDetails),
  });

  if(resultz.status==200){

    alert('Category Added Successfully')
}else if(resultz.status==409){
    alert('Category Already Exists')

}  

});
