// Assignment Code
const generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
function generatePassword() {
  const chars = "01234567890abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let passwordLength = prompt("Please insert a length greater than 8 and less than 128");
  const password = "";

  const minValue = 8
  const maxValue = 128

  console.log(passwordLength);

  if (passwordLength <= 8 || passwordLength >= 128) {
    console.log("wrong password")
    return "wrong length"
  }
  const num = Math.round(Math.random () *chars.length-1)
  const char = chars[num]
  console.log(char)

  for (i = 0; i <= passwordLength; i++) {
   
  }


  return "hello"//password
}
