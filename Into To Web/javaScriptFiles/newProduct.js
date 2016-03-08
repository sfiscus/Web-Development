/*------------------------------------------------------------------------------
This is the Javascript library file for the Web page in the newArtist.html file
-------------------------------------------------------------------------------*/
var artistIdValidation;
var productPriceValidation;
var productWeightValidation;
var organicPercentValidation;
var productDescriptionValidation;

function checkReset() {
        setTimeout(function () {
            alert("The form was reset!");}, 100); 
            document.getElementById("artistId").style.backgroundColor = "";
            document.getElementById("crackTheCode").style.backgroundColor = "";
            document.getElementById("productPrice").style.backgroundColor = "";
            document.getElementById("productWeight").style.backgroundColor = "";
            document.getElementById("organicPercent").style.backgroundColor = "";
            document.getElementById("productCategory").style.backgroundColor = "";
            document.getElementById("productDescription").style.backgroundColor = "";
        }

function validateForm() {
    artistIdValidation = document.getElementById("artistId").value;
    productPriceValidation = document.getElementById("productPrice").value;
    productWeightValidation = document.getElementById("productWeight").value;
    organicPercentValidation = document.getElementById("organicPercent").value;
    productDescriptionValidation = document.getElementById("productDescription").value;
    
    if (isNaN(artistIdValidation)) {
        alert("Sorry your entered a value that wasn't a number. Please try again");
        document.getElementById("artistId").select();
        document.getElementById("artistId").style.backgroundColor = "#D9853B";
        return false;    // leave now --block submit
        
    } else {
      document.getElementById("artistId").style.backgroundColor = "";   
    }
    
    if (/^\d{8}$/.test(artistIdValidation) ) {
   
    } else {
        alert("The number you entered was too short--must be at least 8 characters." 
               + " Please try again");
        document.getElementById("artistId").select();
        document.getElementById("artistId").style.backgroundColor = "#D9853B";
        return false;    // leave now --block submit   
    }
    
    if (document.getElementById("crackTheCode").value.length <= 4) { 
        alert("Your password name was too short--must be at least 5 characters."
                    + " Please try again");
        document.getElementById("crackTheCode").select();
        document.getElementById("crackTheCode").style.backgroundColor = "#D9853B";
        return false;    // leave now --block submit
        
    } else {
      document.getElementById("crackTheCode").style.backgroundColor = "";  
    }
    
    if (isNaN(productPriceValidation)) {
        alert("Sorry your entered a value that wasn't a number. Please try again");
        document.getElementById("productPrice").select();
        document.getElementById("productPrice").style.backgroundColor = "#D9853B";
        return false;    // leave now --block submit
        
    } else {
      document.getElementById("productPrice").style.backgroundColor = "";   
    }
    
    if (productPriceValidation < 0 || productPriceValidation === "") {
        alert("Sorry the price must be 0 or greater or you forgot to fill in the blank. Please try again");
        document.getElementById("productPrice").select();
        document.getElementById("productPrice").style.backgroundColor = "#D9853B";
        return false;    // leave now --block submit
        
    } else {
      document.getElementById("productPrice").style.backgroundColor === "";   
    }
    
    if (isNaN(productWeightValidation)) {
        alert("Sorry your entered a value that wasn't a number. Please try again");
        document.getElementById("productWeight").select();
        document.getElementById("productWeight").style.backgroundColor = "#D9853B";
        return false;    // leave now --block submit
        
    } else {
      document.getElementById("productWeight").style.backgroundColor = "";   
    }
    
    if (productWeightValidation < 0 || productWeightValidation === "") {
        alert("Sorry the price must be 0 or greater or you forgot to fill in the blank. Please try again");
        document.getElementById("productWeight").select();
        document.getElementById("productWeight").style.backgroundColor = "#D9853B";
        return false;    // leave now --block submit
        
    } else {
      document.getElementById("productWeight").style.backgroundColor === "";   
    }
    
    if (isNaN(organicPercentValidation)) {
        alert("Sorry your entered a value that wasn't a number. Please try again");
        document.getElementById("organicPercent").select();
        document.getElementById("organicPercent").style.backgroundColor = "#D9853B";
        return false;    // leave now --block submit
        
    } else {
      document.getElementById("organicPercent").style.backgroundColor = "";   
    }
    
    if (organicPercentValidation < 0 || organicPercentValidation > 100 ||organicPercentValidation === "") {
        alert("Sorry you either entered a number less than zero, more than 100, or left the field blank. Please try again.");
        document.getElementById("organicPercent").select();
        document.getElementById("organicPercent").style.backgroundColor = "#D9853B";
        return false;    // leave now --block submit
        
    } else {
      document.getElementById("organicPercent").style.backgroundColor === "";   
    }
    
    if (document.getElementById("productCategory").value === "0000") {
        alert("You must select a product category before proceeding. Please try again");
        document.getElementById("productCategory").style.backgroundColor = "#D9853B";
        return false; // leave now --block submit
        
    } else {
      document.getElementById("productCategory").style.backgroundColor = "";  
    }
    
    if (document.getElementById("productDescription").value.length <= 9) { 
        alert("Your product description was too short--must be at least 10 characters."
                    + " Please try again");
        document.getElementById("productDescription").select();
        document.getElementById("productDescription").style.backgroundColor = "#D9853B";
        return false;    // leave now --block submit
        
    } else {
      document.getElementById("productDescription").style.backgroundColor = "";  
    }
    
    if (/^(?![0-9]*$)[a-zA-Z0-9]+$/.test(document.getElementById("productDescription").value) ) { 
        
        
    } else {
      alert("You only entered numbers in the field. Your description can not contain only numbers."
                    + " Please try again");
        document.getElementById("productDescription").select();
        document.getElementById("productDescription").style.backgroundColor = "#D9853B";
        return false;    // leave now --block submit 
    }
    
    return true;    // if made it to here, all OK--let submit proceed
}
