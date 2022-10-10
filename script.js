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
  //character variables and password length. prompt user for info
  const chars = "01234567890abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let passwordLength = prompt("Please insert a length greater than 8 and less than 128");
  let password = "";

  let symbols;
  let numbers;
  let upper;
  let lower;

  symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
  numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


  console.log("password length", passwordLength);
  //validates the user input
  if (passwordLength <= 8 || passwordLength >= 128) {
    console.log("wrong password")
    return "wrong length"
  }

 // let lowerCase = prompt("Do you want lower case letters?");

 // console.log("lower case", lowerCase);

 // let userPreference;

 // if (confirm("Confirm you do want lower case") == true) {
 //   userPreference = "Yes";
 // } else {
  //  userPreference = "No";
 // }

  //let upperCase = prompt("Do you want upper case letters?");

 // console.long("upper case", upperCase);

  //if (confirm("Confirm you do want upper case") == true) {
  //  userPreference= "Yes";
  //} else {
  //  userPreference = "No";
  //}

symbols = confirm("Select OK if you would like to include symbols");
numbers = confirm("Select OK if you would like to include numbers");
upper = confirm("Select OK if you would like to include uppercase letters");
lower = confirm("Select OK if you would like to include lowercase letters");

const passwordGen = []
if (symbols)
passwordGen.concat.symbols
if (numbers)
passwordGen.concat.numbers
if (upper)
passwordGen.concat.upper
if (lower)
passwordGen.concat.lower

  //generates the password by getting a random character upto the password length
  for (i = 0; i <= passwordLength - 1; i++) {
    const num = Math.round(Math.random() * chars.length - 1)
    const char = chars[num]
    console.log(char)
    password += char
  }

  //returns final password
  return password

}
