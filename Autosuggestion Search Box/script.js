// Get references to DOM elements
const searchInput = document.getElementById("country-search"); // Input field for typing country name
const suggestionsBox = document.getElementById("suggestions"); // Box to show live matching country suggestions
const countryDetailsBox = document.getElementById("country-details"); // Box to display detailed info of selected country

// Declare a variable to store all countries' data fetched from API
let countriesData = [];

// Fetch all countries data from the REST Countries API
// ✅ We do this once when the page loads to avoid repeated API calls on every input
fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((data) => {
    countriesData = data; // Store the full countries data in the global array
  })
  .catch((error) => console.error("Error fetching country data:", error));

// Event listener for input field to capture user typing
searchInput.addEventListener("input", function () {
  const query = searchInput.value.toLowerCase(); // Convert user input to lowercase for case-insensitive search

  // ✅ Only proceed if user has typed something
  if (query.length > 0) {
    // Filter countries whose name includes the typed query
    const filteredCountries = countriesData.filter((country) =>
      country.name.common.toLowerCase().includes(query)
    );

    // If matching countries found, show them as suggestions
    if (filteredCountries.length > 0) {
      suggestionsBox.innerHTML = filteredCountries
        .map(
          (country) =>
            // ✅ We use data-country attribute to store name for easier access on click
            `<div class="suggestion-item" data-country="${country.name.common}">${country.name.common}</div>`
        )
        .join("");
      suggestionsBox.style.display = "block"; // Show the suggestion box
    } else {
      suggestionsBox.style.display = "none"; // Hide if no matches
    }
  } else {
    suggestionsBox.style.display = "none"; // Hide suggestion box if input is empty
  }
});

// Handle click on a suggestion item to show selected country details
suggestionsBox.addEventListener("click", function (event) {
  // ✅ Get the country name from clicked suggestion using custom data attribute
  const countryName = event.target.getAttribute("data-country");

  // Find the complete country object by matching name from stored data
  const selectedCountry = countriesData.find(
    (country) => country.name.common === countryName
  );

  // If valid country found, show the details
  if (selectedCountry) {
    displayCountryDetails(selectedCountry);
  }

  // ✅ Hide suggestion box after selection and update input value
  suggestionsBox.style.display = "none";
  searchInput.value = countryName;
});

// Function to show selected country's details in a formatted way
function displayCountryDetails(country) {
  countryDetailsBox.style.display = "block"; // Make sure the box is visible

  // ✅ Convert currencies object to a readable string
  const currencies = Object.values(country.currencies || {})
    .map((currency) => currency.name)
    .join(", ");

  // ✅ Display formatted HTML with key details
  countryDetailsBox.innerHTML = `
        <h2>${country.name.common}</h2>
        <p><strong>Capital:</strong> ${
          country.capital ? country.capital[0] : "N/A"
        }</p>
        <p><strong>Currency:</strong> ${currencies || "N/A"}</p>
        <p><strong>Region:</strong> ${country.region}</p>
        <p><strong>Subregion:</strong> ${country.subregion}</p>
    `;
}
