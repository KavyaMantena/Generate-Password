// Assignment code here

function generatePassword() {
  let passwordLength = window.prompt("How many characters would you like your password to contain");

  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Please select characters length between 8 and 128 characters");
    return generatePassword();
  }
  let newPassword = '';

  const pickedSpecial = window.confirm("Click OK to confirm including special characters");
  if (pickedSpecial === true) {
    newPassword = newPassword + getRandomSpecialCharacter();
  }

  let pickedNumeric = window.confirm("Click OK to confirm including numeric characters");
  if (pickedNumeric === true) {
    newPassword = newPassword + getRandomNumber();
  }

  let pickedUpper = window.confirm("click OK to confirm including Uppercase.");
  if (pickedUpper === true) {
    newPassword = newPassword + getRandomUpperCharacter();
  }

  let pickedLower = window.confirm("click OK to confirm including Lowercase.");
  if (pickedLower === true) {
    newPassword = newPassword + getRandomLowerCharacter();
  }
  let remainingStringLength = passwordLength - newPassword.length;

  let finalPassword = newPassword + getStringBylength(remainingStringLength);
  return finalPassword;
};

function getRandomCharacter() {
  // save all characters to a variable
  let allCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  // save the length of the characters into a variable
  let charactersLength = allCharacters.length;
  // generate a random number between 0 and length of characters - 1
  let randomNumber = Math.random();
  let multipliedValue = randomNumber * charactersLength;
  let roundedValue = Math.floor(multipliedValue);
  // get the character at the index based on random number from all characters variable.
  let randomCharacter = allCharacters.charAt(roundedValue);
  // return the character
  return randomCharacter;
}

function getRandomNumber() {
  // save all characters to a variable
  let allCharacters = '0123456789';
  // save the length of the characters into a variable
  let charactersLength = allCharacters.length;
  // generate a random number between 0 and length of characters - 1
  let randomNumber = Math.random();
  let multipliedValue = randomNumber * charactersLength;
  let roundedValue = Math.floor(multipliedValue);
  // get the character at the index based on random number from all characters variable.
  let randomCharacter = allCharacters.charAt(roundedValue);
  // return the character
  return randomCharacter;
}

function getRandomSpecialCharacter() {
  // save all characters to a variable
  let specialCharacters = '!@#$%^&*(){}[]<>/'
  // save the length of the characters into a variable
  let specialCharactersLength = specialCharacters.length;
  // generate a random number between 0 and length of characters - 1
  let randomNumber = Math.random();
  let multipliedValue = randomNumber * specialCharacters;
  let randomWholeNumber = Math.floor(multipliedValue);
  // get the character at the index based on random number from all characters variable.
  let randomSpecialCharacter = specialCharacters.charAt(randomWholeNumber);
  return randomSpecialCharacter;
}


function getRandomUpperCharacter() {
  // save all characters to a variable
  let upperCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  // save the length of the characters into a variable
  let upperCharactersLength = upperCharacters.length;
  // generate a random number between 0 and length of characters - 1
  let randomNumber = Math.random();
  let randomNumberWithinRange = randomNumber * upperCharactersLength;
  let randomWholeNumber = Math.floor(randomNumberWithinRange);
  // get the character at the index based on random number from all characters variable.
  let randomCharacter = upperCharacters.charAt(randomWholeNumber);
  // return the character
  return randomCharacter;
}

function getRandomLowerCharacter() {
  // save all characters to a variable
  let lowerCharacters = 'abcdefghijklmnopqrstuvwxyz';
  // save the length of the characters into a variable
  let lowerCharactersLength = lowerCharacters.length;
  // generate a random number between 0 and length of characters - 1
  let randomNumber = Math.random();
  let multipliedValue = randomNumber * lowerCharactersLength;
  let randomWholeNumber = Math.floor(multipliedValue);
  // get the character at the index based on random number from all characters variable.
  let randomCharacter = lowerCharacters.charAt(randomWholeNumber);
  // return the character
  return randomCharacter;
}

function getStringBylength(stringLength) {
  let generatedString = '';
  for (let i = 0; i < stringLength; i++) {
    generatedString = generatedString + getRandomLowerCharacter();
  }

  return generatedString;
}



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
