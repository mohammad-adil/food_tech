
let PassengersList = []

function removePassengerFromList(name){
    PassengersList = PassengersList.filter((passenger)=>{
        return passenger.name !=name
    })
}

function ClearValue(div) {
 document.getElementById(div).value = "";
}



$(document).on('click', '#AddPassenger', function () {

    if (getElmValue("titleSelect") && getElmValue("Fname") && getElmValue("Lname")) {

      
        $("#personsTable").css("visibility", "visible");

        var id = "Passenger" + PassengerCount;
        PassengerCount++;
        var radioValue = $("input[name='gender']:checked").val();
        $('#personsTable tr:last').after('<tr id= ' + id + '><td id=' + id + 'Name' + '>' + getElmValue("titleSelect") +' '+  getElmValue("Fname") +' '+ getElmValue("Lname") +' ' + '</td><td id=' + id + 'price' + '>' + localStorage.getItem("price")  + '</td><td id=' + id + 'type' + '>' + radioValue +
            '</td><td><button type="button" data-passenger="${getElmValue("Fname")+" "+getElmValue("Lname")}" class="removeSelf btn btn-danger btn-sm" value="x">x</button></td></tr>');

            let passenger = {
                name:getElmValue("Fname")+" "+getElmValue("Lname"),
                type:radioValue.toLowerCase()
            }

            PassengersList.push(passenger)

        ClearValue("Fname");
        ClearValue("Lname");



    }
    else {
        alert("Provide Details First");
    }
   
    

});

$(document).on('click', '.removeSelf', function () {
    
    let passengerName = $(this).data("passenger");
    console.log(passengerName)
    if (confirm("Are You Sure?")) {
        $(this).closest('tr').remove();
        removePassengerFromList(passengerName);
    
    }


    
});

$(document).on('click', '#billingTo', function () {
  
    var radioValue = $("input[name='bill']:checked").val();
    if (radioValue == 'Agent') {
            $('#Person').hide();
            $('#AgentDiv').show(); 
           
        }
    else if (radioValue == 'Person') {
            $('#AgentDiv').hide();
            $('#Person').show();
            
        }
    

});

$(document).ready(function () {

    $('input[type=radio][name=bill]').change(function () {
        if (this.value == 'Agent') {
            $('#Person').hide();
            $('#AgentDiv').show();
            ClearValue("txtPersonName");
            

        }
        else if (this.value == 'Person') {
            $('#AgentDiv').hide();
            $('#Person').show();
            ClearValue("txtAgent");
        }
    });
});

$(document).ready(function () {
    $("#txtAgent").keypress(function () {

        if (getElmValue("email").trim() != '' && getElmValue("ContactNumber").trim() != '' && getElmValue("txtPersonName").trim() != '' || getElmValue("txtAgent").trim() != '') {
         $('#PurchaseTicket').prop('disabled', false);
     
        }
   
      });
});

$(document).ready(function () {
    $("#txtPersonName").keypress(function () {

        if (getElmValue("email").trim() != '' && getElmValue("ContactNumber").trim() != '' && getElmValue("txtPersonName").trim() != '' || getElmValue("txtAgent").trim() != '') {
            $('#PurchaseTicket').prop('disabled', false);

        }

    });
});

