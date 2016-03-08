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
	alert("The form is being validated");
	
	// Create text nodes with various error messages that will be used to fill in the appropriate div
	var errorTag= document.getElementById("errorMessage");
	var blankNameError= document.createTextNode('You must enter a name into the field. Please try again.');
	var nameError= document.createTextNode('Please input alphabet characters only.');
	var blankEmailError= document.createTextNode('You have entered an invalid email address!');
	var blankAreaError= document.createTextNode('You must enter an area code into the field. Please try again.');
	var areaCodeError= document.createTextNode('You must enter three digits for the area code.');
	var areaError= document.createTextNode('You must enter a number for this field anything other than a number will not work.');
	var phoneNumberError= document.createTextNode('You must enter four digits into the field. Please try again.');
	var addressError= document.createTextNode('You must enter an address into the field. Please try again.');
	var cityError= document.createTextNode('You must enter a city into the field. Please try again.');
	var stateError= document.createTextNode('You must select a state from the list in order to continue.');
	var blankZipError= document.createTextNode('You must enter a zip code into the field. Please try again.');
	var zipError= document.createTextNode('You must enter five digits for a valid zip code. Please try again.');
	var genderError= document.createTextNode('You must select a gender to continue.');
	var checkedError= document.createTextNode('You must check at least one of the courses to continue.');
	
	// Create an if statement to validate if the user entered data for name
	if (nameValidation.value === "") {
		errorTag.appendChild(blankNameError);
		return false;
	} else if (nameValidation.value.match(/^[0-9]+$/))  {  
		errorTag.appendChild(nameError);
      		return false;   
      	} else if (emailValidation.value === "") { 
		errorTag.appendChild(blankEmailError);
      		return false;   
	} else if (areaCode.value === "") {
		errorTag.appendChild(blankAreaError);
      		return false; 	
	} else if (areaCode.value.length < 3 || areaCode.value.length >= 4) {
		errorTag.appendChild(areaCodeError);
      		return false; 
	} else if (areaCode.value.match(/^[A-Za-z]+$/)) {
		errorTag.appendChild(areaError);
      		return false; 
	} else if (phonePrefix.value === "") {
		errorTag.appendChild(areaCodeError);
      		return false; 	
	} else if (phonePrefix.value.length < 3 || phonePrefix.value.length >= 4) {
		errorTag.appendChild(areaCodeError);
      		return false; 
	} else if (phonePrefix.value.match(/^[A-Za-z]+$/)) {
		errorTag.appendChild(areaError);
      		return false; 
	} else if (phoneSuffix.value === "") {
		errorTag.appendChild(phoneNumberError);
      		return false; 	
	} else if (phoneSuffix.value.length < 4 || phoneSuffix.value.length >= 5) {
		errorTag.appendChild(phoneNumberError);
      		return false; 
	} else if (phoneSuffix.value.match(/^[A-Za-z]+$/)) {
		errorTag.appendChild(areaError);
      		return false; 
	} else if (addressValidation.value === "") {
		errorTag.appendChild(addressError);
      		return false; 	
	} else if (cityValidation.value === "") {
		errorTag.appendChild(blankEmailError);
      		return false; 	
	} else if (cityValidation.value.match(/^[0-9]+$/))  {  
      		errorTag.appendChild(nameError);
      		return false;   
      	}  else if (stateValidation.value === "0") {
      		errorTag.appendChild(stateError);
      		return false;     
      	} else if (zipValidation.value === "") {
		errorTag.appendChild(blankZipError);
      		return false; 	
	} else if (zipValidation.value.match(/^[A-Za-z]+$/)) {
		errorTag.appendChild(areaError);
      		return false; 
	} else if (zipValidation.value.length < 5 || zipValidation.value.length >= 6) {
		errorTag.appendChild(zipError);
      		return false; 
	} else if (genderValidation != true) {
		errorTag.appendChild(genderError);
      		return false;
	} else if (checked != true) {
		errorTag.appendChild(checkedError);
      		return false;
	} else {
		return true;    // if made it to here, all OK--let submit proceed
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
}