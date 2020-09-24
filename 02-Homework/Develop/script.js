// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
var alphabets = "!@#$%^&*()_+~`|}{[]\:;?><,./-="
var numbers = "0123456789";
var lowerAlphabet = "abcdefghijklmnopqrstuvwxyz";
var upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var ourPassword;



function generatePassword() {
  ourPassword = "";
  var pwdLength = prompt("Please select desired length of the password");

  if (pwdLength < 8 || pwdLength > 128 ){
   alert("Password length should be between 8 and 128");
    generatePassword();
  }
 
  if (isNaN(pwdLength)){
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



    for (var i = 0; i < pwdLength;) {

      if (i < pwdLength && specialChar) {
        ourPassword += alphabets.charAt(Math.floor(Math.random() * alphabets.length));
        i++;
      }
      if (i < pwdLength && number) {
        ourPassword += numbers.charAt(Math.floor(Math.random() * numbers.length));
        i++;

      }
      if (i < pwdLength && lower) {
        ourPassword += lowerAlphabet.charAt(Math.floor(Math.random() * lowerAlphabet.length));
        i++;
      }
      if (i < pwdLength && upper) {
        ourPassword += upperAlphabet.charAt(Math.floor(Math.random() * upperAlphabet.length));
        i++;
      }
    }
  }
  return ourPassword;
}




// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);
