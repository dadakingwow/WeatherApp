document.getElementById("searchBtn").addEventListener("click", function () {
  triggerSearch();
});

document
  .getElementById("searchInput")
  .addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      triggerSearch();
    }
  });

function triggerSearch() {
  const city = document.getElementById("searchInput").value;
  console.log(city);
  fetchWeather(city);
}

function fetchWeather(city) {
  const apiKey = "5a2b2ed556576f80d95dd21ab43ba084";
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      WeatherInfo(data);
    })
    .catch((error) => console.error("error", error));
}

function WeatherInfo(data) {
  const display = document.getElementById("weatherInfo");
  display.innerHTML = "";

  const city = data.name;
  const feelsLike = Math.round(data.main.feels_like);

  const paragraph = document.createElement("p");

  paragraph.textContent = `
  ${city}
  Feels Like ${feelsLike}°C`;
  display.appendChild(paragraph);
}
