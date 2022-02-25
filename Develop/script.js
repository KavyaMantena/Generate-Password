// Assignment code here

function generatePassword() {
  var promptPass = window.prompt("How many characters would you like your password to contain");

  if (promptPass > 128) {
    window.alert("Please select characters length between 8 and 128 characters");
    generatePassword();
  }


  var pickedSpecial = window.confirm("Click OK to confirm including special characters");

  var pickedNumeric = window.confirm("Click OK to confirm including numeric characters");


  var pickedUpper = window.confirm("click OK to confirm including Uppercase.");

  var pickedLower = window.confirm("click OK to confirm including Lowercase.");


};
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
