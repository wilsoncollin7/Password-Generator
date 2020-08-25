// Assignment Code
var generateBtn = $("#generate");
var wantLower = true;
var wantUpper = true;
var wantNum = true;
var wantSpecial = true;

$("#inlineCheckbox1").on("change", function() {
  if ($(this).is(':checked')) {
    wantLower = true;
  } else {
    wantLower = false;
  }
});

$("#inlineCheckbox2").on("change", function() {
  if ($(this).is(':checked')) {
    wantUpper = true;
  } else {
    wantUpper = false;
  }
});

$("#inlineCheckbox3").on("change", function() {
  if ($(this).is(':checked')) {
    wantNum = true;
  } else {
    wantNum = false;
  }
});

$("#inlineCheckbox4").on("change", function() {
  if ($(this).is(':checked')) {
    wantSpecial = true;
  } else {
    wantSpecial = false;
  }
});

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
  var specialUpperLower = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%&'()*+,-./:;<=>?@][^_`{|}~"
  var specialUpperNum = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!#$%&'()*+,-./:;<=>?@][^_`{|}~";
  var specialLower = "abcdefghijklmnopqrstuvwxyz!#$%&'()*+,-./:;<=>?@][^_`{|}~";
  var specialUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%&'()*+,-./:;<=>?@][^_`{|}~";
  var specialLowerUpperNum = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!#$%&'()*+,-./:;<=>?@][^_`{|}~";
  var charNumber = document.querySelector("#passLength").value
  /* Condition for the length of the password */
  if ((charNumber < 129) && (charNumber > 7 )) {
    /* Pop ups to see what the user wants */
    var pass = "";
    /* Function to select the random characters */
    function generatePass(x) {
      var length = charNumber;
      var charSet = x;
      for (var i = 0, n = charSet.length; i < length; ++i) {
          pass += charSet.charAt(Math.floor(Math.random() * n));
      }
    };
    /* Large if else section for the logic of the site */
    if ((wantLower === true) && (wantUpper === true) && (wantNum === true) && (wantSpecial === true)) {
      generatePass(specialLowerUpperNum);
    } else if ((wantLower === true) && (wantUpper === true) && (wantNum === false) && (wantSpecial === false)) {
      generatePass(upperLower);
    } else if ((wantLower === true) && (wantUpper === false) && (wantNum === false) && (wantSpecial === true)) {
      generatePass(specialLower);
    } else if ((wantLower === true) && (wantUpper === false) && (wantNum === false) && (wantSpecial === false)) {
      generatePass(lower);
    } else if ((wantLower === true) && (wantUpper === true) && (wantNum === true) && (wantSpecial === false)) {
      generatePass(numbersLowerUpper);
    } else if ((wantLower === true) && (wantUpper === true) && (wantNum === false) && (wantSpecial === true)) {
      generatePass(specialUpperLower);
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
generateBtn.on("click", writePassword);
