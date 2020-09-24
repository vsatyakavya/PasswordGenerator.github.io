
var generateBtn = document.querySelector("#generate");


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
var speChars = "!@#$%^&*()_+~`|}{[]\:;?><,./-="
var numbers = "0123456789";
var lowerAlphabet = "abcdefghijklmnopqrstuvwxyz";
var upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var ourPassword;



function generatePassword() {
  ourPassword = "";
  var pwdLength = prompt("Please select desired length of the password");

  if (pwdLength < 8 || pwdLength > 128) {
    alert("Password length should be between 8 and 128");
    generatePassword();
  }

  else if (isNaN(pwdLength)) {
    alert("Please Provide the number as an input");
    generatePassword();
  }

  else {
    var specialChar = confirm("Click ok to include special characters");
    var number = confirm("Click ok to include numeric characters");
    var lower = confirm("Click ok to include lowercase characters");
    var upper = confirm("Click ok to include uppercase characters");
    if (specialChar == false && number == false && lower == false && upper == false) {
      alert("select atleast one type of character type");
      generatePassword();
    }
    var i = 0;
    while (i < pwdLength) {
      if (i < pwdLength && specialChar) {
        generatePwd(speChars)
      }
      if (i < pwdLength && number) {
        generatePwd(numbers)
      }
      if (i < pwdLength && lower) {
        generatePwd(lowerAlphabet)
      }
      if (i < pwdLength && upper) {
        generatePwd(upperAlphabet)
      }

      function generatePwd(arr) {
        ourPassword += arr.charAt(Math.floor(Math.random() * arr.length));
        i++;

      }
    }
    return ourPassword;
  }
}
generateBtn.addEventListener("click", writePassword);
