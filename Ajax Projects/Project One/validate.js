// This function will make sure the program is compatible with IE
function validate() {
	  console.log("This is to help validate the form");
	  
	  var resetButton = document.getElementById("reset");
	  var validateButton = document.getElementById("send");
	  
	  if(window.addEventListener) {
		resetButton.addEventListener("click", eventListenerEvent, false);
		validateButton.addEventListener("click", eventListenerEvent, false);			
	} else {
		resetButton.attachEvent("onclick", eventListenerEvent);
		validateButton.attachEvent("onclick", eventListenerEvent);				
	}
}


function eventListenerEvent() {
	//standards compliant event handling
	//IE = window.event.srcElement -> control that triggered the event
	//non-IE = this -> control that triggered the event
	var control;
	if(window.event) {
		control = window.event.srcElement;
	} else {
		control = this;
	}
	console.log("standards compliant event: " + control.value);
}


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
    	
    	// Create variable to call reference from the user input for area code
    	var areaCode = document.getElementById("area");
    	// Create variable to call reference from the user input for first three digits of phone number
    	var phonePrefix = document.getElementById("prefix");    	
    	// Create variable to call reference from the user input for last four digits of phone number
    	var phoneSuffix = document.getElementById("suffix");
    	
    	// Create variable to call reference from the user input for address
    	var addressValidation = document.getElementById("address!");
    	
    	// Create variable to call reference from the user input for city
    	var cityValidation = document.getElementById("city!");
    	
    	var stateValidation = document.getElementById("stateList");
    	
    	// Create variable to call reference from the user input for zip
    	var zipValidation = document.getElementById("zip!");
    	
    	// Create variable to call reference for which radio button was selected by the user
    	var maleValidation = document.getElementById("male!");
    	var femaleValidation = document.getElementById("female!");
    	// Create a variable that will be used to determine if either radio button was clicked
    	var genderValidation = maleValidation.checked || femaleValidation.checked
    	
    	// Create variable to call reference for which checkbox was selected by the user
    	var aspCheckBox = document.getElementById("asp!");
    	var advancedCheckBox = document.getElementById("java");
    	var phpCheckBox = document.getElementById("php!");
    	
    	// Create a variable that will be used to determine if either of the checkboxes were selected
    	var checked = aspCheckBox.checked || advancedCheckBox.checked || phpCheckBox.checked
    	
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
	
	// Create an if statement to validate if the user entered data for area code
	if (areaCode.value === "") {
		alert("You must enter an area code into the field. Please try again.");
		areaCode.focus();
		return false;	
	}
	
	// Create an if statement to validate if the user entered three digits for the area code
	if (areaCode.value.length < 3 || areaCode.value.length >= 4) {
		alert("You must enter three digits for the area code.");
		areaCode.focus();
		return false;
	}
	
	// Create an if statement to validate if the user entered numbers for the area code
	 if (areaCode.value.match(/^[A-Za-z]+$/)) {
		alert("You must enter a number for this field anything other than a number will not work.");
		return false;
	}
	
	// Create an if statement to validate if the user entered data for the first three digits of the phone number
	if (phonePrefix.value === "") {
		alert("You must enter three digits into the field. Please try again.");
		phonePrefix.focus();
		return false;	
	}
	
	// Create an if statement to validate if the user entered three digits for the area code
	if (phonePrefix.value.length < 3 || phonePrefix.value.length >= 4) {
		alert("You must enter three digits for this field.");
		phonePrefix.focus();
		return false;
	}
	
	// Create an if statement to validate if the user entered numbers for the area code
	 if (phonePrefix.value.match(/^[A-Za-z]+$/)) {
		alert("You must enter a number for this field anything other than a number will not work.");
		return false;
	}
	
	// Create an if statement to validate if the user entered data for the last four digits of the phone number
	if (phoneSuffix.value === "") {
		alert("You must enter four digits into the field. Please try again.");
		phoneSuffix.focus();
		return false;	
	}
	
	// Create an if statement to validate if the user entered three digits for the area code
	if (phoneSuffix.value.length < 4 || phoneSuffix.value.length >= 5) {
		alert("You must enter four digits for this field.");
		phoneSuffix.focus();
		return false;
	}
	
	// Create an if statement to validate if the user entered numbers for the area code
	 if (phoneSuffix.value.match(/^[A-Za-z]+$/)) {
		alert("You must enter a number for this field anything other than a number will not work.");
		return false;
	}
	
	// Create an if statement to validate if the user entered data for address
	if (addressValidation.value === "") {
		alert("You must enter an address into the field. Please try again.");
		addressValidation.focus();
		return false;	
	}
	
	// Create an if statement to validate if the user entered data for city
	if (cityValidation.value === "") {
		alert("You must enter a city into the field. Please try again.");
		cityValidation.focus();
		return false;	
	}
	
	// Create an if statement to validate if the user entered only alphabetical characters
	if (cityValidation.value.match(/^[0-9]+$/))  {  
		alert('Please input alphabet characters only'); 
      		cityValidation.focus();
      		return false;   
      	} 
      	
      	// Create an if statement to validate if the user chose a state from the list
      	if (stateValidation.value === "0") {
      		alert("You must select a state from the list in order to continue.");
      		return false;     
      	}
	
	// Create an if statement to validate if the user entered data for zip
	if (zipValidation.value === "") {
		alert("You must enter a zip code into the field. Please try again.");
		zipValidation.focus();
		return false;	
	}
	
	// Create an if statement to validate if the user entered numbers for the zip code
	 if (zipValidation.value.match(/^[A-Za-z]+$/)) {
		alert("You must enter a number for this field anything other than a number will not work.");
		return false;
	}
	
	// Create an if statement to validate if the user entered three digits for the area code
	if (zipValidation.value.length < 5 || zipValidation.value.length >= 6) {
		alert("You must enter five digits for a valid zip code. Please try again.");
		zipValidation.focus();
		return false;
	}
	
	// Create an if statement to validate if the user checked at least one of the radio buttons
	if (genderValidation != true) {
		alert("You must select a gender to continue.");
		return false;
	}
	
	// Create an if statement to validate that the user checked at least one of the checkboxes
	if (checked != true) {
		alert("You must check at least one of the courses to continue.");
		return false;
	}
	
	// Create javascript that will place user input next to the nameDiv div
	var nameTag= document.getElementById("nameDiv");
	var nameInput = document.createTextNode(nameValidation.value);
	nameTag.appendChild(nameInput);
	document.body.appendChild(nameTag);
	
	// Create javascript that will place user input next to the emailDiv div
	var emailTag= document.getElementById("emailDiv");
	var emailInput = document.createTextNode(emailValidation.value);
	emailTag.appendChild(emailInput);
	document.body.appendChild(emailTag);
	
	// Create javascript that will place user input next to the phoneDiv div
	var phoneTag= document.getElementById("phoneDiv");
	var phoneInput = document.createTextNode("(" + areaCode.value + ") " + phonePrefix.value + "-" + phoneSuffix.value);
	phoneTag.appendChild(phoneInput);
	document.body.appendChild(phoneTag);
	
	// Create javascript that will place user input next to the addressDiv div
	var addressTag= document.getElementById("addressDiv");
	var addressInput = document.createTextNode(addressValidation.value);
	addressTag.appendChild(addressInput);
	document.body.appendChild(addressTag);
	
	// Create javascript that will place user input next to the cityDiv div
	var cityTag= document.getElementById("cityDiv");
	var cityInput = document.createTextNode(cityValidation.value);
	cityTag.appendChild(cityInput);
	document.body.appendChild(cityTag);
	
	// Create javascript that will place user input next to the stateDiv div
	var stateTag= document.getElementById("stateDiv");
	var stateInput = document.createTextNode(stateValidation.value);
	stateTag.appendChild(stateInput);
	document.body.appendChild(stateTag);
	
	// Create javascript that will place user input next to the zipDiv div
	var zipTag= document.getElementById("zipDiv");
	var zipInput = document.createTextNode(zipValidation.value);
	zipTag.appendChild(zipInput);
	document.body.appendChild(zipTag);
	
	// Create javascript that will place user input next to the genderDiv div
	var genderTag= document.getElementById("genderDiv");
	var maleInput = document.createTextNode(maleValidation.value);
	var femaleInput = document.createTextNode(femaleValidation.value);
	// Create an if statement that will output whichever gender was selected
	if (genderValidation === maleValidation.checked) {
		genderTag.appendChild(maleInput);
	} else {
		genderTag.appendChild(femaleInput);
	}
	
	document.body.appendChild(genderTag);
	
	// Create javascript that will place user input next to the coursesDiv div
	var coursesTag= document.getElementById("coursesDiv");
	var aspInput = document.createTextNode(aspCheckBox.value + ", ");
	var javaInput = document.createTextNode(advancedCheckBox.value + ", ");
	var phpInput = document.createTextNode(phpCheckBox.value);
	
	// Create three if statements that will output whichever course was selected
	if (aspCheckBox.checked) {
		coursesTag.appendChild(aspInput);
		document.body.appendChild(coursesTag);
	}
	if (advancedCheckBox.checked) {
		coursesTag.appendChild(javaInput);
		document.body.appendChild(coursesTag);
	}
	if (phpCheckBox.checked) {
		coursesTag.appendChild(phpInput);
		document.body.appendChild(coursesTag);
	}
		
	return true;    // if made it to here, all OK--let submit proceed
}