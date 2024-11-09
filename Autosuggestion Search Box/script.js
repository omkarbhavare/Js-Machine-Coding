const searchInput = document.getElementById("country-search");
const suggestionsBox = document.getElementById("suggestions");
const countryDetailsBox = document.getElementById("country-details");

// Fetch country data
let countriesData = [];

fetch("https://restcountries.com/v3.1/all")
    .then(response => response.json())
    .then(data => {
        countriesData = data;
    })
    .catch(error => console.error("Error fetching country data:", error));

// Function to handle search input and show suggestions
searchInput.addEventListener("input", function() {
    const query = searchInput.value.toLowerCase();
    
    if (query.length > 0) {
        const filteredCountries = countriesData.filter(country => 
            country.name.common.toLowerCase().includes(query)
        );

        // Show suggestions
        if (filteredCountries.length > 0) {
            suggestionsBox.innerHTML = filteredCountries
                .map(country => `<div class="suggestion-item" data-country="${country.name.common}">${country.name.common}</div>`)
                .join("");
            suggestionsBox.style.display = "block";
        } else {
            suggestionsBox.style.display = "none";
        }
    } else {
        suggestionsBox.style.display = "none";
    }
});

// Handle suggestion click to show country details
suggestionsBox.addEventListener("click", function(event) {
    const countryName = event.target.getAttribute("data-country");
    
    const selectedCountry = countriesData.find(country => country.name.common === countryName);
    if (selectedCountry) {
        displayCountryDetails(selectedCountry);
    }

    // Close suggestions box
    suggestionsBox.style.display = "none";
    searchInput.value = countryName;
});

// Function to display selected country details
function displayCountryDetails(country) {
    countryDetailsBox.style.display = "block";

    const currencies = Object.values(country.currencies || {}).map(currency => currency.name).join(", ");
    countryDetailsBox.innerHTML = `
        <h2>${country.name.common}</h2>
        <p><strong>Capital:</strong> ${country.capital ? country.capital[0] : "N/A"}</p>
        <p><strong>Currency:</strong> ${currencies || "N/A"}</p>
        <p><strong>Region:</strong> ${country.region}</p>
        <p><strong>Subregion:</strong> ${country.subregion}</p>
    `;
}
