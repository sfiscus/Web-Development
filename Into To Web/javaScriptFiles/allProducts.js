/*------------------------------------------------------------------------------
This is the Javascript library file for the Web page in the allProducts.html file
-------------------------------------------------------------------------------*/

function displayDateRenderedRevised() {
	
    // Define two variables for the program to use
    var renderedDate;
    var revisedDate;

    // Assign date and time content to the variables
    renderedDate = new Date();             // assign current date 
    revisedDate  = document.lastModified;  // assign revised date

    // Deliver the variables content to the Web page 
    document.write("This Web page rendered: " + renderedDate);
    document.write("<br />");
    document.write("This Web page last revised: " + revisedDate);
	
}