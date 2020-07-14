// Assignment Code
var generateBtn = document.querySelector("#generate");

alert("synced")

// Write password to the #password input
function writePassword() {
  
  var passwordText = document.querySelector("#password");
  var lower = "abcdefghijklmnopqrstuvwxyz";
  var upperLower = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbersLowerUpper = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
  var numberLower = "abcdefghijklmnopqrstuvwxyz1234567890";
  var numberUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
  var specialLowerNum = "abcdefghijklmnopqrstuvwxyz1234567890!#$%&'()*+,-./:;<=>?@][^_`{|}~";
  var specialUpperNum = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!#$%&'()*+,-./:;<=>?@][^_`{|}~";
  var specialLower = "abcdefghijklmnopqrstuvwxyz!#$%&'()*+,-./:;<=>?@][^_`{|}~";
  var specialUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%&'()*+,-./:;<=>?@][^_`{|}~";
  var specialLowerUpperNum = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!#$%&'()*+,-./:;<=>?@][^_`{|}~";
  
  var wantLower = confirm("Do you want lower case?");
  var wantUpper = confirm("Do you want upper case?");
  var wantNum = confirm("Do you want numbers?");
  var wantSpecial = confirm("Do you want special characters?");

  // if (lower = false $$ )
  
  // var password = generatePassword(event) {
    
  // };
  

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
