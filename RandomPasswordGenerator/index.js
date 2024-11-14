const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet = "abcdefghijklmnopqrstuvwxyz";
const numberSet = "0123456789";
const symbolSet = "!@#$%^&*()";

const generatePasswordBtn = document.getElementById("generatePasswordBtn");
const generatedPasswordTextarea = document.querySelector(".generatedPasswordTextarea");

const passwordLengthRange = document.getElementById("passwordLengthRange");
const upperSetCheckbox = document.getElementById("upperSetCheckbox");
const lowerSetCheckbox = document.getElementById("lowerSetCheckbox");
const numbersSetCheckbox = document.getElementById("numbersSetCheckbox");
const symbolsSetCheckbox = document.getElementById("symbolsSetCheckbox");

// Function to get a random character from a given set
const getRandomChar = (set) => set[Math.floor(Math.random() * set.length)];

// Generate password based on selected options
const generatePassword = (length) => {
  let password = "";
  const selectedSets = [];

  if (upperSetCheckbox.checked) selectedSets.push(upperSet);
  if (lowerSetCheckbox.checked) selectedSets.push(lowerSet);
  if (numbersSetCheckbox.checked) selectedSets.push(numberSet);
  if (symbolsSetCheckbox.checked) selectedSets.push(symbolSet);

  if (selectedSets.length === 0) return ""; // No sets selected

  for (let i = 0; i < length; i++) {
    const randomSet = selectedSets[Math.floor(Math.random() * selectedSets.length)];
    password += getRandomChar(randomSet);
  }
  return password;
};

// Event listener to generate password
generatePasswordBtn.addEventListener("click", () => {
  const passwordLength = parseInt(passwordLengthRange.value);
  generatedPasswordTextarea.textContent = generatePassword(passwordLength);
});
