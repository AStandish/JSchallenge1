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
 
  const passwordLength = prompt("Please insert a length greater than 8 and less than 128");
  let password = "";


  const symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  const upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  const lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


  console.log("password length", passwordLength);
  //validates the user input
  if (passwordLength <= 8 || passwordLength >= 128) {
    alert("wrong password");
    return "wrong length";
  }

  const symbolsRequired = confirm("Select OK if you would like to include symbols");
  const numbersRequired = confirm("Select OK if you would like to include numbers");
  const upperRequired = confirm("Select OK if you would like to include uppercase letters");
  const lowerRequired = confirm("Select OK if you would like to include lowercase letters");

  let groupsSelected = 0;
  let passwordGen = [];
 
 // randomly selects characters

  if (symbolsRequired) {
    const randIndex = Math.floor(Math.random() * symbols.length);
    const randChar = symbols[randIndex];

    groupsSelected++;
    password += randChar;
    passwordGen = passwordGen.concat(symbols);
  }
  if (numbersRequired) {
    const randIndex = Math.floor(Math.random() * numbers.length);
    const randChar = numbers[randIndex];

    groupsSelected++;
    password += randChar;
    passwordGen = passwordGen.concat(numbers);
  }
  if (upperRequired) {
    const randIndex = Math.floor(Math.random() * upper.length);
    const randChar = numbers[randIndex];

    groupsSelected++;
    password += randChar;
    passwordGen = passwordGen.concat(upper);
  }
  if (lowerRequired) {
    const randIndex = Math.floor(Math.random() * lower.length);
    const randChar = numbers[randIndex];

    groupsSelected++;
    password += randChar;
    passwordGen = passwordGen.concat(lower);
  }
  //generates the password by getting a random character upto the password length
  for (i = 0; i < passwordLength - groupsSelected; i++) {
    const num = Math.floor(Math.random() * passwordGen.length);
    const char = passwordGen[num];
    console.log(char);
    password += char;
  }

  //returns final password with random sort
  return password.split().sort(function () {
    return Math.random() - 0.5;
  }).join();
}
