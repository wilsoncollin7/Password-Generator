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
  var pass = "";

  function generatePass(x) {
    var length = charNumber;
    var charSet = x;
    for (var i = 0, n = charSet.length; i < length; ++i) {
        pass += charSet.charAt(Math.floor(Math.random() * n));
    }
    console.log(pass)
  };

  if ((wantLower === true) && (wantUpper = true) && (wantNum === true) && (wantSpecial === true)) {
    generatePass(specialLowerUpperNum);
  } else if ((wantLower === true) && (wantUpper === true) && (wantNum === false) && (wantSpecial === false)) {
    generatePass(upperLower);
  }else if ((wantLower === true) && (wantUpper === false) && (wantNum === false) && (wantSpecial === false)) {
    generatePass(lower);
  } else if ((wantLower === true) && (wantUpper === false) && (wantNum === true) && (wantSpecial === false)) {
    generatePass(numbersLowerUpper);
  } else if ((wantLower === false) && (wantUpper === true) && (wantNum === false) && (wantSpecial === false)) {
    generatePass(upper);
  } else if ((wantLower === true) && (wantUpper === false) && (wantNum === true) && (wantSpecial === false)) {
    generatePass(numberLower);
  } else if ((wantLower === false) && (wantUpper === true) && (wantNum === true) && (wantSpecial === false)) {
    generatePass(numberUpper);
  } else if ((wantLower === true) && (wantUpper === false) && (wantNum === true) && (wantSpecial === true)) {
    generatePass(specialLowerNum);
  } else if ((wantLower === false) && (wantUpper === true) && (wantNum === true) && (wantSpecial === true)) {
    generatePass(specialUpperNum);
  } else if ((wantLower === true) && (wantUpper === false) && (wantNum === false) && (wantSpecial === true)) {
    generatePass(specialLower);
  } else if ((wantLower === false) && (wantUpper === true) && (wantNum === false) && (wantSpecial === true)) {
    generatePass(specialUpper);
  } else if ((wantLower === false) && (wantUpper === false) && (wantNum === false) && (wantSpecial === false)) {
    alert("Please select an option.");
  };
  
  var password = pass
  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
