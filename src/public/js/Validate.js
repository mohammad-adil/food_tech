function ValidationEvent() {
    // Storing Field Values In Variables
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    // Regular Expression For Email
    var emailReg = /^([w-.]+@([w-]+.)+[w-]{2,4})?$/;
    // Conditions
    if (name != '' && email != '' && contact != '') {
    if (email.match(emailReg)) {
    if (phone.length == 10) {
    alert("Validation Complete");
    return true;
    } else {
    alert("The Contact No. must be at least 10 digit long!");
    return false;
    }
    }
    } else {
    alert("Invalid Email Address...!!!");
    return false;
    }
    } else {
    alert("All fields are required.....!");
    return false;
    }
    }