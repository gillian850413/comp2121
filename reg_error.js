function validate_input() {
    var err_msg = '';
    var username = document.form.username.value;
    var password = document.form.password.value;
    var confirm_password = document.form.confirm_password.value;
    var firstname = document.form.firstname.value;
    var lastname = document.form.lastname.value;
    var bday = document.form.bday.value;
    var email = document.form.email.value;    
    var phone = document.form.phone.value;
    
    var re_phone = /^[0-9\s\(\)\+\-]{8}$/;
    var re_email = /^[\w]+(\.[\w]+)*@([\w\-]+\.)+[a-zA-Z]{2,7}$/;
    
    if(username == '') {
        err_msg += "Username must not be empty";
        err_msg += "\n";
    } 

    if(password == '') {
        err_msg += "Password must not be empty";
        err_msg += "\n";
    } 

    if(confirm_password == '') {
        err_msg += "Confirmed Password must not be empty";
        err_msg += "\n";
    } 

    if(password != confirm_password){
        err_msg += "Password and Confirmed Password don't match."
        err_msg += "\n";
    }

    if(firstname == '') {
        err_msg += "Firstname must not be empty";
        err_msg += "\n";
    } 

    if(lastname == '') {
        err_msg += "Lastname must not be empty";
        err_msg += "\n";
    }                 

    if(bday == '') {
        err_msg += "Birthday must not be empty";
        err_msg += "\n";
    }   
    
    if(email == '') {
        err_msg += "Email must not be empty";
        err_msg += "\n";
    } 
    else if (!re_email.test(email)) {
        err_msg += "Please input a valid email address";
        err_msg += "\n";
    }
    
    if(phone == '') {
        err_msg += "Phone number must not be empty";
        err_msg += "\n";
    } 
    else if (!re_phone.test(phone)) {
        err_msg += "Phone must be 8 digit positive integers or 0";
        err_msg += "\n";
    }
    
    if(err_msg != '') {
        alert(err_msg);
        return false;
    }
    return true;
}
