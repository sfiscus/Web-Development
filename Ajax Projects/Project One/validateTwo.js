
// This function will reset the form once the user clicks the reset button 
function resetForm() {
	// Will inform the user that the form has been reset
	alert("The form was reset"); 
	// Log to the console that the form was reset
	console.log("form reset");
	// Actually reset the form calling the reset method 
            document.getElementById("information").reset();
}

// This function will hold all the validation for the form which will run once the user clicks the validate button
function sendValidation() {
	// Create variable to call reference from the user input for name
	var nameValidation = document.getElementById("name!");
	
	// Create variable to call reference from the user input for email
    	var emailValidation = document.getElementById("email!");
    	
    	var errors = [];
    	
// Create alert telling the user that the validate button is working and their input will now be validated
	alert("The form is being validated")
	
	// Create an if statement to validate if the user entered data for name
	if (nameValidation.value === "") {
		alert("You must enter a name into the field. Please try again.");
		nameValidation.focus();
		return false;
	}
	
	// Create an if statement to validate if the user entered only alphabet characters for name
	if (nameValidation.value.match(/^[0-9]+$/))  {  
		alert('Please input alphabet characters only'); 
      		nameValidation.focus();
      		return false;   
      	}  
	
      	// Create an if statement to validate if the user entered data for email
	if (emailValidation.value === "") { 
		alert("You have entered an invalid email address!");
		emailValidation.focus();
		return false;
	}
		
	return true;
		
	
}
