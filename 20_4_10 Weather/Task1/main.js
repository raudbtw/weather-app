const url =
  "http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19";
const image = document.querySelector(".img-fluid");
let today = new Date().toLocaleDateString();

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    document.querySelector(".temperature").innerHTML = data.main.temp + "&degC";
    document.querySelector(".small").innerHTML = data.weather[0]["description"];
    document.querySelector(".time").innerHTML = today;
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
    document.querySelector(".feel").innerHTML = data.main.feels_like + "&degC";
    image.src = `https://openweathermap.org/img/wn/${data.weather[0]["icon"]}@4x.png`;
  });
