
var passengerCount = 1;

function namesP(data) {

    return ("passenger" + passengerCount).toString();

}

$(document).on('click', '#PurchaseTicket', function () {






    var billedto;
    if (getElmValue("txtPersonName").trim() != '') {

        billedto = getElmValue("txtPersonName").trim();

    }

    else {

        billedto = getElmValue("txtAgent").toString();
    }



    var totalpassengerCount = ($("#personsTable tr").length) - 1;





    if (billedto != '' && totalpassengerCount != '') {


        if (totalpassengerCount == 1) {

            var name = document.getElementById("Passenger1Name").innerText;
            var type = document.getElementById("Passenger1type").innerText;
            type = type.toLowerCase();


            var data = {};
            data = {
                "name": name,
                "email":getElmValue("email").toString(),
                "phone":getElmValue("ContactNumber").toString(),
                "pnr": localStorage.getItem("PNR"),
                "date":localStorage.getItem("date"),
                "type": type,
                "gst":"NA",
                "issued_to":billedto,
                "price": localStorage.getItem("price")

            };

            data = JSON.stringify(data);
            console.log(data);
            var xhr = new XMLHttpRequest();
            xhr.addEventListener("readystatechange", function () {

                if (this.readyState === 1) {

                    document.getElementById("PurchaseTicket").innerHTML = " <span  class='spinner-border spinner-border-sm'></span>Wait...";
                }
                else if (this.readyState === 4) {

                    console.log(this.responseText);
                    Dsearch();
                    document.getElementById("PurchaseTicket").innerHTML = "Purchase";
                    $("#PurchaseTicket").prop('disabled', false);
                    localStorage.clear();
                    //window.location.replace('issue.html');

                }

            });

            let url = window.location.origin

            xhr.open("POST", url+"/db/purchase");
            xhr.setRequestHeader("content-type", "application/json");
            xhr.setRequestHeader("cache-control", "no-cache");
            xhr.send(data);


        }

        else if (totalpassengerCount > 1) {

            let flight_info = {
                pnr : localStorage.getItem("PNR"),
                date : localStorage.getItem("date"),
                gst:localStorage.getItem("GST"),
                issued_to:billedto,
                price: localStorage.getItem("price")
            }


            let email = getElmValue("email").toString();
            let phone = getElmValue("ContactNumber").toString();

        PassengersList.forEach((passenger)=>{
            passenger.email = email
            passenger.phone = phone
        })

        let ServerData = []
        ServerData.push(flight_info)

        PassengersList.forEach((passenger)=>{
            ServerData.push(passenger)
        })


        var xhr = new XMLHttpRequest();
            xhr.addEventListener("readystatechange", function () {

                if (this.readyState === 1) {


                }
                else if (this.readyState === 4) {

                    console.log(this.responseText);

                }

            });

            let url = window.location.origin
            xhr.open("POST", url+"/db/purchase_group");
            xhr.setRequestHeader("content-type", "application/json");
            xhr.setRequestHeader("cache-control", "no-cache");
            xhr.send(JSON.stringify(ServerData));

}



    }
});
