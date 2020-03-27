function formValidation() {
  /** Accessing form elements by declaring variables*/
  var uid = document.loanform.firstid;
  var ulid = document.loanform.lastid;
  var uemail = document.loanform.email;
  var job = document.loanform.job;
  var ucountry = document.loanform.origin;
  var tell = document.loanform.tel;
  var uadd = document.loanform.address;
  var urange = document.loanform.range;
  var umsex = document.loanform.msex;
  var ufsex = document.loanform.fsex;
  var uspec = document.loanform.specific;
  

  /**Invoking functions with arguments */
  if (firstid_validation(uid, 3, 12)) {
    if (lastid_validation(ulid, 5, 12)) {
      if (validateEmail(uemail)) {
        if (allLetter(job)) {
          if (countryselect(ucountry)) {
            if (nnumeric(tell)) {
              if (alphanumeric(uadd)) {
                if (amountselect(urange)) {
                  if (validsex(umsex, ufsex)) {
                    if (numeric(uspec,5,8)) {
                      alert("Form Succesfully Submitted");
                      window.location.reload()
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  return false;
}

//Defining method firstid_valiadtion with parameters
function firstid_validation(uid, mx, my) {
  //Accessing form element
  var uid_len = uid.value.length;
  if (uid_len == 0 || uid_len >= my || uid_len < mx) {
    alert(
      "Firstname should not be empty / length be between " + mx + " to " + my,
     
    );
    uid.style.border = "2px solid red";
    uid.focus();
    return false;
  }
  else{
    uid.style.border = "2px solid green";
  }
  return true;

}

//Defining method lastid_valiadtion with parameters
function lastid_validation(ulid, mx, my) {
  //Accessing form element
  var ulid_len = ulid.value.length;
  if (ulid_len == 0 || ulid_len >= my || ulid_len < mx) {
    alert(
      "Lastname should not be empty / length be between " + mx + " to " + my
    );
    ulid.focus();
    return false;
  }
  return true;
}


//Defining method validateEmail with parameter
function validateEmail(uemail) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (uemail.value.match(mailformat)) {
    return true;
  } else {
    alert("You must enter a valid email address!");
    uemail.focus();
    return false;
  }
}


//Defining method allLetter with parameter
function allLetter(job) {
  var letters = /^[A-Za-z]+$/;
  if (job.value.match(letters)) {
    return true;
  } else {
    alert("Occupation must have alphabet characters only");
    job.focus();
    return false;
}
  }


//Defining method countryselect with parameter
function countryselect(ucountry) {
  if (ucountry.value == "Default") {
    alert("Please select your nationality");
    ucountry.focus();
    return false;
  } else {
    return true;
  }
}


//Defining method nnumeric with parameter
function nnumeric(tell) {
  // var numbers = /^[0-9]+$/;
  var numbers = /^\d{10}$/;
  if (tell.value.match(numbers)) {
    return true;
  } else {
    alert("Telephone code must have 10 numeric characters only");
    tell.focus();
    return false;
  }
}


//Defining method numeric with parameters
function numeric(uspec, mx, my) {
  //Accessing form element
  var uspec_len = uspec.value.length;
  if (uspec_len == 0 || uspec_len >= my || uspec_len < mx) {
    
    alert(
      "Specific loan amount must have 5 to 8 numeric digits only "
    );
    
    uspec.focus();

    return false;
   
  }
  return true;
}


//Defining method alphanumeric with parameter
function alphanumeric(uadd) {
  var letters = /^[0-9a-zA-Z]+$/;
  if (uadd.value.match(letters)) {
    return true;
  } else {
    alert("User address must have alphanumeric characters only");
    uadd.focus();
    return false;
  }
}


//Defining method amountselect with parameter
function amountselect(urange) {
  if (urange.value == "Default") {
    alert("Please select your loan amount range");
    urange.focus();
    return false;
  } else {
    return true;
  }
}



//Defining method allamount with parameter
function allamount(uloan) {
  var numbers = /^[0-9]+$/;

  if (uloan.value.match(numbers)) {
    return true;
  } else {
    alert("Loan amount must have numeric characters only");
    uloan.focus();
    return false;
  }
}


//Defining method validsex with parameters
function validsex(umsex, ufsex) {
  x = 0;

  if (umsex.checked) {
    x++;
  }
  if (ufsex.checked) {
    x++;
  }
  if (x == 0) {
    alert("Select Male/Female");
    umsex.focus();
    return false;
  } else {
    return true;
  }
}
