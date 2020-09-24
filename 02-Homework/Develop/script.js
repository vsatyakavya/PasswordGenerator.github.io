// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
var alphabets = "@$&%"
var numbers = "0123456789";
var lower1 = "abcdefghijklmnopqrstuvwxyz";
var upper1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var ourPassword = "";



function generatePassword() {
  var pwdLength = prompt("Length of password");
  if(pwdLength < 8 || pwdLength > 120) {
    alert("Password should be between 8 and 120 characters");
    generatePassword();
  }
  
  else {
  var specialChar = confirm("click ok to confirm include special characters");
  var number = confirm("click ok to confirm include numeric characters");
  var lower = confirm("click ok to confirm include lowercase characters");
  var upper = confirm("click ok to confirm include uppercase characters");
   if(specialChar==false && number==false && lower==false && upper==false){
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
      ourPassword += lower1.charAt(Math.floor(Math.random() * lower1.length));
      i++;
    }
    if (i < pwdLength && upper) {
      ourPassword += upper1.charAt(Math.floor(Math.random() * upper1.length));
      i++;
    }
  }
  }
return ourPassword;
}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
