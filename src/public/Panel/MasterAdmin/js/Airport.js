function autocomplete(inp, arr) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function (e) {
        var a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) { return false; }
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
            /*check if the item starts with the same letters as the text field value:*/
            if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                /*create a DIV element for each matching element:*/
                b = document.createElement("DIV");
                /*make the matching letters bold:*/
                b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
                b.innerHTML += arr[i].substr(val.length);
                /*insert a input field that will hold the current array item's value:*/
                b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                /*execute a function when someone clicks on the item value (DIV element):*/
                b.addEventListener("click", function (e) {
                    /*insert the value for the autocomplete text field:*/
                    inp.value = this.getElementsByTagName("input")[0].value;
                    /*close the list of autocompleted values,
                    (or any other open lists of autocompleted values:*/
                    closeAllLists();
                });
                a.appendChild(b);
            }
        }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function (e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
            /*If the arrow DOWN key is pressed,
            increase the currentFocus variable:*/
            currentFocus++;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode == 38) { //up
            /*If the arrow UP key is pressed,
            decrease the currentFocus variable:*/
            currentFocus--;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode == 13) {
            /*If the ENTER key is pressed, prevent the form from being submitted,*/
            e.preventDefault();
            if (currentFocus > -1) {
                /*and simulate a click on the "active" item:*/
                if (x) x[currentFocus].click();
            }
        }
    });
    function addActive(x) {
        /*a function to classify an item as "active":*/
        if (!x) return false;
        /*start by removing the "active" class on all items:*/
        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (x.length - 1);
        /*add class "autocomplete-active":*/
        x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
        /*a function to remove the "active" class from all autocomplete items:*/
        for (var i = 0; i < x.length; i++) {
            x[i].classList.remove("autocomplete-active");
        }
    }
    function closeAllLists(elmnt) {
        /*close all autocomplete lists in the document,
        except the one passed as an argument:*/
        var x = document.getElementsByClassName("autocomplete-items");
        for (var i = 0; i < x.length; i++) {
            if (elmnt != x[i] && elmnt != inp) {
                x[i].parentNode.removeChild(x[i]);
            }
        }
    }
    /*execute a function when someone clicks in the document:*/
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
}

/*An array containing all Airports */
var airports = ["Ahmedabad|AMD", "Agatti Island|AGX", "Aizawl|AJL", "Akola|AKD",
"Along Airport|IXV", "Amausi|LKO", "Amritsar|LUH", "Bagdogra|IXB", "Bajpe|IXE", "Bakula Rimpoche|IXL",
"Balurghat|RGH", "Bamrauli|IXD", "SHL|Barapani Airport", "BEK|Bareli Airport", "BEP|Bellary Airport", "BLR|Bengaluru International Airport",
"Bhatinda|BUP", "Bhavnagar|BHU", "BHO|Bhopal Airport", "BBI|Bhubaneswar Airport", "BKB|Bikaner Airport", "PAB|Bilaspur Airport",
"Birsa Munda|IXR", "Borjhar|GAU", "CBD|Car Nicobar Airport", "IXC|Chandigarh Airport",
"Chennai|MAA", "Mumbai|BOM", "Chikkalthana|IXU", "COK|Cochin International Airport",
"Cooch Behar|COH", "CDP|Cuddapah Airport", "UDR|Dabok Airport", "GOI|Dabolim Airport", "NMB|Daman Airport", "DAE|Daparizo Airport",

"Darjeeling|DAI", "Dehra Dun|DED", "Deparizo|DEP", "Indore|IDR", "Dhanbad|DBD", "Dibrugarh|DIB", "Dimapur|DMU", "Diu|DIU", "Dharamsala|DHM",
"Nasik|ISK", "Gaya|GAY", "Gorakhpur|GOP", "Jamnagar|JGA", "Guna|GUX", "Gwalior|GWL", "Hissar|HSS", "Hubli|HBX", "Hyderabad|HYD",
"New Delhi|DEL", "Jabalpur|JLR", "Jagdalpur|JGB", "Jaisalmer|JSA", "Jeypore|PYB", "Jodhpur|JDH", "Kailashahar|IXH", "Kamalpur|IXQ",
"Kandla|IXY", "Kanpur|KNU", "Keshod|IXK", "Khajuraho|HJR", "Agra|AGR", "Khowai|IXN", "Kolhapur|KLH", "Kota|KTU", "Kozhikode|CCJ", "Bhuntar Kullu|KUU",
"Silchar|IXS", "Lilabari|IXI", "Pune|PNQ", "Madurai|IXM", "Malda|LDA", "Mohanbari|MOH", "Imphal|IMF", "Muzaffarnagar|MZA", "Muzaffarpur|MZU",
"Mysore|MYQ", "Nanded|NDC", "Kolkata|CCU", "Neyveli|NVY", "Osmanabad|OMN", "Pantnagar|PGH", "Pasighat|IXT", "Pathankot|IXP", "Patna|PAT",
"Coimbatore|CJB", "Pondicherry|PNY", "Porbandar|PBD", "Port Blair|IXZ", "Puttaparthi|PUT", "Raipur|RPR", "Amritsar|ATQ", "Rajahmundry|RJA",
"Rajkot|RAJ", "Rajouri|RJI", "Ramagundam|RMD", "Ratnagiri|RTC", "Rewa|REW", "Rourkela|RRK", "Jorhat|JRH", "Bhuj|BHJ", "Rupsi|RUP",
"Salem|SXV", "Tezpur|TEZ", "Belgaum|IXG", "Jaipur|JAI", "Satna|TNI", "Jammu|IXJ", "Sholapur|SSE", "Simla|SLV", "Agartala|IXA",
"Jamshedpur|IXW", "Nagpur|NAG", "Srinagar|SXR", "Surat|STV", "Tezu|TEI", "Thanjavur|TJV"
];