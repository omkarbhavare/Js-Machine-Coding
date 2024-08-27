const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet = "abcdefghijklmnopqrstuvwxyz";
const numberSet = "0123456789";
const symbolSet = "!@#$%^&*()";

const generatePasswordBtn = document.getElementById("generatePasswordBtn");
const generatedPasswordTextarea = document.querySelector(
  ".generatedPasswordTextarea"
);

const passwordLengthRange = document.getElementById("passwordLengthRange");
const upperSetCheckbox = document.getElementById("upperSetCheckbox");
const lowerSetCheckbox = document.getElementById("lowerSetCheckbox");
const numbersSetCheckbox = document.getElementById("numbersSetCheckbox");
const symbolsSetCheckbox = document.getElementById("symbolsSetCheckbox");

// Function to get a random character from the given set of characters
const getRandomData = (data) => {
  if (data.length > 10) {
    // If data set is large, generate a random index by summing multiple random values
    return data[
      Math.floor(Math.random() * 10 + Math.random() * 10 + Math.random() * 5)
    ];
  } else {
    // Otherwise, generate a random index directly within the range of the data length
    return data[Math.floor(Math.random() * data.length)];
  }
};

// Recursive function to generate the password
const generatePassword = (password = "", passwordLength) => {
  // Base case: if the password length matches the desired length, return the password
  if (password.length >= passwordLength) {
    return password;
  }

  // Adding characters based on selected checkboxes
  if (upperSetCheckbox.checked) {
    password += getRandomData(upperSet);
  }
  if (lowerSetCheckbox.checked) {
    password += getRandomData(lowerSet);
  }
  if (numbersSetCheckbox.checked) {
    password += getRandomData(numberSet);
  }
  if (symbolsSetCheckbox.checked) {
    password += getRandomData(symbolSet);
  }

  // Recursively call the function until the password reaches the desired length
  return generatePassword(password, passwordLength);
};

// Event listener for the generate password button
generatePasswordBtn.addEventListener("click", function () {
  // Get the desired password length from the range input
  const passwordLength = parseInt(passwordLengthRange.value);

  // Validate that the password length is within the allowed range
  if (passwordLength >= 5 && passwordLength <= 15) {
    // Generate the password and update the textarea with the result
    const finalPassword = generatePassword("", passwordLength);

    generatedPasswordTextarea.textContent = finalPassword.slice(0, 10);
  }
});
