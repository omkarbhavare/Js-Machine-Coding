let data = [];
const mainContainer = document.querySelector(".main-container");

const fetchData = () => {
  fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false"
  )
    .then((res) => res.json())
    .then((res) => {
      data = res;
      console.log(data);

      // Ensure mainContainer is cleared before appending new data
      mainContainer.innerHTML = "";

      data.map((coin) => {
        mainContainer.innerHTML += `<div class="sub-container">
          <div class="image-class">
            <img
              src=${coin.image}
              alt="coin"
            />
          </div>
          <div class="container-details">
            <div class="name-price-details">
              <p>${coin.name}</p>
              <p>${coin.current_price}</p>
            </div>
            <div class="shortname-gain-details">
              <p>${coin.symbol}</p>
              <p>${coin.price_change_percentage_24h}%</p>
            </div>
          </div>
        </div>`;
      });
    })
    .catch((error) => console.error("Error fetching data:", error));
};

fetchData();
