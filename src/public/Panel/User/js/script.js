
var pnr;
var totalPrice;
function getElmValue(elm) {

    return document.getElementById(elm).value;
}

function addcomma(data) {
    var d = data.toString();
    return "'" + d + "'"+",";
    
}





$(document).on('click', '.purchase', function () {
    var PNR = $(this).attr('pnr');
    var tp = $(this).attr('price');
    var date = $(this).attr('date');
    localStorage.setItem("PNR", PNR);
    localStorage.setItem("price", tp);
    localStorage.setItem("date",date);
});





var count = 0;
function Dsearch() {
    var a = (document.getElementById("Sdate").value);
    var date = a.slice(-1);
    var month = a.slice(5, 7);
    var year = a.slice(2, 4);
    var newDate = date + '/' + month + '/' + year;
    newDate = newDate.toString();

    if (count == 0) {
        var q = "query=SELECT * FROM FARES WHERE DATE=" + "'" + newDate + "'";
       // var q = "query= BEGIN TRANSACTION [Tran1] BEGIN TRY  SELECT * FROM FARES WHERE DATE=" + "'" + newDate + "'" + "COMMIT TRANSACTION [Tran1] END TRY  BEGIN CATCH ROLLBACK TRANSACTION [Tran1] END CATCH";



        var data = encodeURI(q);
        var xhr = new XMLHttpRequest();
        xhr.addEventListener("readystatechange", function () {

            if (this.readyState === 1) {
                document.getElementById("searchButton").innerHTML = " <span  class='spinner-border spinner-border-sm'></span>Searching...";

            }
            else if (this.readyState === 4) {
                var jsonObj = JSON.parse(this.responseText);
                if (jsonObj == null) {
              }
            else{
                console.log(jsonObj);
           for (x in jsonObj) {
                    var a = (jsonObj[x].PURCHASE);
                    var b = jsonObj[x].MARKUP;
                     totalPrice = a + b;
                    var pnr = jsonObj[x].PNR;
              
               
                    document.getElementById("tbody").innerHTML += "<tr><td class='date'>" +
                    jsonObj[x].DATE + "</td> <td>" + jsonObj[x].SOURCE + "</td><td>" + jsonObj[x].DESTINATION + "</td><td>"  + jsonObj[x].SEATS +
                    "</td><td>" + jsonObj[x].AIRLINES + "</td><td>" + jsonObj[x].FLIGHT +
                    "</td><td>" + jsonObj[x].DEPARTURE + "</td> <td>" + jsonObj[x].ARRIVAL +
                    "</td>  <td>" + totalPrice + "</td><td>  <a class='purchase btn btn-primary' pnr ='" + pnr + "' price='" + totalPrice + "' date='" + jsonObj[x].DATE + "'  href= '#' data-toggle='modal' data-target='#myModal' role='button'>Purchase</a>" +
                    "</td></tr>";
                    
                }
                document.getElementById("searchButton").innerHTML = "Search";
                }
            }
            count++;
        });

        xhr.open("POST", "http://qiblataintravels.com/db/query");
        xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
        xhr.setRequestHeader("cache-control", "no-cache");
        xhr.send(data);
    }

    else {

        $("#tbody").remove();
        document.getElementById("searchButton").innerHTML = " <span class='spinner-border spinner-border-sm'></span>Searching...";
        var p = document.getElementById("results");
        var newElm = document.createElement("TBODY");
        newElm.setAttribute('id', 'tbody');
        p.appendChild(newElm);

        var q = "query=SELECT * FROM FARES WHERE DATE=" + "'" + newDate + "'";

        var data = encodeURI(q);
        var xhr = new XMLHttpRequest();
        xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
                   var jsonObj = JSON.parse(this.responseText);
                   console.log(jsonObj);
                for (x in jsonObj) {
                    var a = (jsonObj[x].PURCHASE);
                    var b = jsonObj[x].MARKUP;
                    var totalPrice = a + b;
                    var pnr = jsonObj[x].PNR;
                      document.getElementById("tbody").innerHTML += "<tr><td class='date'>" +
                      jsonObj[x].DATE + "</td> <td>" + jsonObj[x].SOURCE + "</td><td>" + jsonObj[x].DESTINATION + "</td><td>" + jsonObj[x].SEATS +
                      "</td><td>" + jsonObj[x].AIRLINES + "</td><td>" + jsonObj[x].FLIGHT +
                      "</td><td>" + jsonObj[x].DEPARTURE + "</td> <td>" + jsonObj[x].ARRIVAL +
                      "</td>  <td>" + totalPrice + "</td><td>  <a class='purchase btn btn-primary' pnr ='" + pnr + "' href= '#' data-toggle='modal' data-target='#myModal'  role='button'>Purchase</a>" +
                      "</td></tr>";
                }
                document.getElementById("searchButton").innerHTML = " Search";
            }
            count++;

        });

        xhr.open("POST", "http://qiblataintravels.com/db/query");
        xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
        xhr.setRequestHeader("cache-control", "no-cache");
        xhr.send(data);

       


    }
   
}

