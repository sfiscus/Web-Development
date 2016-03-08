/*------------------------------------------------------------------------------
This is the Javascript library file for the Web page in the newArtist.html file
-------------------------------------------------------------------------------*/
function checkReset() {
        setTimeout(function () {
            alert("The form was reset!");}, 100); 
            document.form01.firstName.style.backgroundColor = "";
            document.form01.lastName.style.backgroundColor = "";
            document.form01.whatCountry.style.backgroundColor = "";
            document.form01.whatsTheGender.style.backgroundColor = "";
            document.form01.crackTheCode.style.backgroundColor = "";
            document.form01.makeSure.style.backgroundColor = "";
        }


function validateForm() {
    if (document.form01.firstName.value.length <= 1) { 
        alert("First name was too short--must be at least 2 characters." 
                    + " Please try again");
        document.form01.firstName.select();
        document.form01.firstName.style.backgroundColor = "#D9853B";
        return false;    // leave now --block submit
        
    } else {
      document.form01.firstName.style.backgroundColor = "";   
    }

    if (document.form01.lastName.value.length <= 1) { 
        alert("Last name was too short--must be at least 2 characters."
                    + " Please try again");
        document.form01.lastName.select();
        document.form01.lastName.style.backgroundColor = "#D9853B";
        return false;    // leave now --block submit
        
    } else {
      document.form01.lastName.style.backgroundColor = "";  
    }
    
    if (document.form01.whatCountry.value === "0000") {
        alert("You must select both a country and a gender before proceeding."
                    + " Please try again");
        document.form01.whatCountry.style.backgroundColor = "#D9853B";
        return false; // leave now --block submit
        
    } else {
      document.form01.whatCountry.style.backgroundColor = "";  
    }
    
    if (document.form01.whatsTheGender.value === "0280") {
        alert("You must select both a country and a gender before proceeding."
                    + " Please try again");
        document.form01.whatsTheGender.style.backgroundColor = "#D9853B";
        return false; // leave now --block submit
        
    } else {
      document.form01.whatsTheGender.style.backgroundColor = "";  
    }
    
    if (document.form01.crackTheCode.value.length <= 4) { 
        alert("Your password name was too short--must be at least 5 characters."
                    + " Please try again");
        document.form01.crackTheCode.select();
        document.form01.crackTheCode.style.backgroundColor = "#D9853B";
        return false;    // leave now --block submit
        
    } else {
      document.form01.crackTheCode.style.backgroundColor = "";  
    }
    
    if (document.form01.makeSure.value.length <= 4) { 
        alert("You must confirm your password. What you entered was too short--"
                    + " must be at least 5 characters. Please try again");
        document.form01.makeSure.select();
        document.form01.makeSure.style.backgroundColor = "#D9853B";
        return false;    // leave now --block submit
        
    } else {
      document.form01.makeSure.style.backgroundColor = "";  
    }
    
    if (document.form01.crackTheCode.value != document.form01.makeSure.value) {
        alert("The passwords that you entered don't match. Please enter them again.");  
        document.form01.makeSure.select();
        document.form01.crackTheCode.style.backgroundColor = "#D9853B";
        document.form01.makeSure.style.backgroundColor = "#D9853B";
        return false;
    }
    
    return true;    // if made it to here, all OK--let submit proceed
}
