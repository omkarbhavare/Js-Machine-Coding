document.addEventListener("DOMContentLoaded", function () {
  const inputCityDetails = document.querySelector(".input-field");
  const searchBtn = document.querySelector(".search-btn");
  const displayData = document.querySelector(".display-data");

  function renderCity(fetchedCityData) {
    if (!fetchedCityData.error) {
      const {
        location: { name, region, country, localtime },
        current: {
          temp_c,
          condition: { text, icon },
          humidity,
          wind_kph,
          feelslike_c,
          uv,
        },
      } = fetchedCityData;

      displayData.innerHTML = `
          <div class="weather-card">
            <h2>${name}, ${region}, ${country}</h2>
            <p><strong>Local Time:</strong> ${localtime}</p>
            <div class="weather-info">
              <img src="${icon}" alt="${text}">
              <p><strong>Condition:</strong> ${text}</p>
              <p><strong>Temperature:</strong> ${temp_c}°C</p>
              <p><strong>Feels Like:</strong> ${feelslike_c}°C</p>
              <p><strong>Humidity:</strong> ${humidity}%</p>
              <p><strong>Wind Speed:</strong> ${wind_kph} km/h</p>
              <p><strong>UV Index:</strong> ${uv}</p>
            </div>
          </div>
        `;
    } else {
      alert("Enter Correct City Name");
    }
  }

  searchBtn.addEventListener("click", async function (event) {
    event.preventDefault();
    const city = inputCityDetails.value.trim();
    inputCityDetails.value = "";

    async function fetchWeather(city) {
      try {
        const apiFetchCityData = await fetch(
          `https://api.weatherapi.com/v1/current.json?key=2ed13c2ffd8a470b9b071502251404&q=${city}&aqi=no`
        );
        return await apiFetchCityData.json();
      } catch (error) {
        console.log(error);
        return null;
      }
    }

    const fetchedCityData = await fetchWeather(city);
    renderCity(fetchedCityData);
  });
});
