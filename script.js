let form = document.querySelector("form");
let container = document.getElementById("container");

let tempinCelsius = (tempInKelvin) => tempInKelvin - 273.15;

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    let input = document.querySelector("input");
    getData(input.value);
    let iframe = document.querySelector("iframe");
    iframe.src = `https://www.google.com/maps?q=${input.value}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
});

let getData = async (inp) => {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${inp}&appid=6f7610f48b2455db6e0d4d4306f9513e`;
  let response = await fetch(url);
  let data = await response.json();
  displayWeather(data);
};

let displayWeather = (data) =>{
  let temp = document.getElementById("temp");
  temp.innerHTML = `<b>Current Temp : ${tempinCelsius(data.main.temp).toFixed(2)}°C</b>`;
  let feels=document.getElementById("feels");
  feels.innerHTML = `<b>Feels Like : ${tempinCelsius(data.main.feels_like).toFixed(2)}°C</b>`;
  let maxTemp = document.getElementById("max-temp");
  maxTemp.innerHTML = `<b>Max Temp : ${tempinCelsius(data.main.temp).toFixed(2)}°C</b>`;
  let minTemp = document.getElementById("min-temp");
  minTemp.innerHTML = `<b>Min Temp : ${tempinCelsius(data.main.temp).toFixed(2)}°C</b>`;
  let wind = document.getElementById("wind");
  wind.innerHTML = `<b>Wind : speed - ${data.wind.speed},  deg - ${data.wind.deg}</b>`;
  let clouds = document.getElementById("clouds");
  clouds.innerHTML = `<b>Clouds : ${data.clouds.all}%</b>`;
  let sunrise = document.getElementById("sunrise");
  sunrise.innerHTML = `<b>Sunrise : ${Date(data.sys.sunrise * 1000)}</b>`;
  let sunset = document.getElementById("sunset");
  sunset.innerHTML = `<b>Sunset : ${Date(data.sys.sunset * 1000)}</b>`;
};
