// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  /* All of the variables and the strings of characters */
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
  /* Condition for the length of the password */
  if ((charNumber < 129) && (charNumber > 7 )) {
    /* Pop ups to see what the user wants */
    var wantLower = confirm("Do you want lower case?");
    var wantUpper = confirm("Do you want upper case?");
    var wantNum = confirm("Do you want numbers?");
    var wantSpecial = confirm("Do you want special characters?");
    var pass = "";
    /* Function to select the random characters */
    function generatePass(x) {
      var length = charNumber;
      var charSet = x;
      for (var i = 0, n = charSet.length; i < length; ++i) {
          pass += charSet.charAt(Math.floor(Math.random() * n));
      }
      console.log(pass);
    };
    /* Large if else section for the logic of the site */
    if ((wantLower === true) && (wantUpper = true) && (wantNum === true) && (wantSpecial === true)) {
      generatePass(specialLowerUpperNum);
    } else if ((wantLower === true) && (wantUpper === true) && (wantNum === false) && (wantSpecial === false)) {
      generatePass(upperLower);
    } else if ((wantLower === true) && (wantUpper === false) && (wantNum === false) && (wantSpecial === true)) {
      generatePass(specialLower);
    } else if ((wantLower === true) && (wantUpper === false) && (wantNum === false) && (wantSpecial === false)) {
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
    } else if ((wantLower === false) && (wantUpper === true) && (wantNum === false) && (wantSpecial === true)) {
      generatePass(specialUpper);
    } else if ((wantLower === false) && (wantUpper === false) && (wantNum === false) && (wantSpecial === false)) {
      alert("Please select an option.");
    };
    /* Assigning the password to the text on the site */
    var password = pass;
    passwordText.value = password;

  } else {
    alert("Password cannot be longer than 128 characters or shorter than 8 charaters.");
  };
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
