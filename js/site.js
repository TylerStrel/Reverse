// Get the string the user entered
function getString(){
    
    // Make the alert box invisible if it is not already
    document.getElementById("alert").classList.add("invisible");
    
    // Get the string the user entered
    let userString = document.getElementById("userString").value;

    // Check if string is valid
    if (validString(userString)) {

        // Get the reversed string
        let revString = reverseString(userString);
        
        // Display the reversed string
        displaySuccess(revString);
    }
    else {

        // If the string has less than 2 characters then display an error
        displayError();
    }
}


// Check if the given string is valid (not just white space)
function validString(userString){
    
    if (userString.trim().length > 1)
    {
        return true;
    }
    else {
        return false;
    }
}

// Reverse the given string
function reverseString(userString){

    let revString = []
    for (let index = userString.length - 1; index >= 0; index--) {

        revString += userString[index];
    }

    return revString;
}

// Change color of the alert
function setAlertColor(alertClass){

    switch (alertClass){
        case "alert-success":
            document.getElementById("alert").classList.remove("alert-danger");
            document.getElementById("alert").classList.add("alert-success");
            break;
        case "alert-danger":
            document.getElementById("alert").classList.remove("alert-success");
            document.getElementById("alert").classList.add("alert-danger");
    }
}

// Display success message and reversed string
function displaySuccess(revString){

    setAlertColor("alert-success");
    document.getElementById("msgHead").innerHTML = `Success!`;
    document.getElementById("msg").innerHTML = `Your string reversed is: ${revString}`
    document.getElementById("alert").classList.remove("invisible");
}

// Display error message 
function displayError(){
    
    setAlertColor("alert-danger");
    document.getElementById("msg").innerHTML = "";
    document.getElementById("msgHead").innerHTML = `Error : You must enter a valid string of at least 2 characters.`;
    document.getElementById("alert").classList.remove("invisible");
}