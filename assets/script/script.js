// Assignment Code
var generateBtn = document.querySelector("#generate");

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
  
  var charNumber = prompt("How many charaters?")
  var wantLower = confirm("Do you want lower case?");
  var wantUpper = confirm("Do you want upper case?");
  var wantNum = confirm("Do you want numbers?");
  var wantSpecial = confirm("Do you want special characters?");

  var password = function generatePass () {

  }

  if ((wantLower === true) && (wantUpper = true) && (wantNum === true) && (wantSpecial === true)) {
    alert("all true")

  } else if ((wantLower === true) && (wantUpper === true) && (wantNum === false) && (wantSpecial === false)) {
    alert("ttff")
  }else if ((wantLower === true) && (wantUpper === false) && (wantNum === false) && (wantSpecial === false)) {
    alert("tfff")
  }else if ((wantLower === false) && (wantUpper === true) && (wantNum === false) && (wantSpecial === false)) {
    alert("ftff")
  } else if ((wantLower === true) && (wantUpper === false) && (wantNum === true) && (wantSpecial === false)) {
    alert("tftf")
  } else if ((wantLower === false) && (wantUpper === true) && (wantNum === true) && (wantSpecial === false)) {
    alert("fttf")
  } else if ((wantLower === true) && (wantUpper === false) && (wantNum === true) && (wantSpecial === true)) {
    alert("tftt")
  } else if ((wantLower === false) && (wantUpper === true) && (wantNum === true) && (wantSpecial === true)) {
    alert("fttt")
  } else if ((wantLower === true) && (wantUpper === false) && (wantNum === false) && (wantSpecial === true)) {
    alert("tfft")
  } else if ((wantLower === false) && (wantUpper === true) && (wantNum === false) && (wantSpecial === true)) {
    alert("ftft")
  } else if ((wantLower === false) && (wantUpper === false) && (wantNum === false) && (wantSpecial === false)) {
    alert("ffff")
  };
  
   
  
    
  
  

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
