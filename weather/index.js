"use strict"

const city = document.querySelector('.city');
const tempNow = document.querySelector('.temp-now');
const tempFeels = document.querySelector('.temp-feels');
const description = document.querySelector('.description');
const wild = document.querySelector('.wind');
const picture =document.querySelector('img');
const inputCity = document.querySelector('input');
const button = document.querySelector('.button');

function getUserCity() {
  let userCity = "";
  button.addEventListener('click', () => {
    userCity = inputCity.value;
    inputCity.value = "";
    getWeather(userCity);
  })
  
  inputCity.addEventListener('keydown', e => {
    if(e.keyCode === 13) {
      userCity = inputCity.value;
      inputCity.value = "";
      getWeather(userCity);
    }
  })

}

getUserCity();

async function getWeather(userCity) {  
  try {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${userCity}&appid=58b6f7c78582bffab3936dac99c31b25&units=metric`;
    const res = await fetch(url);
    const data = await res.json(); 
    console.log(data.name, data.weather[0].main, data.weather[0].description, data.main.temp, data.main.feels_like, data.wind.speed);
    city.innerText = `${data.name}`;
    tempNow.innerText = `${Math.round(data.main.temp)}°C`;
    tempFeels.innerText = `feels like: ${Math.round(data.main.feels_like)}°C`;
    description.innerText = `${data.weather[0].description}`;
    wild.innerText = `wind: ${Math.round(data.wind.speed)} m/s`;

    if (data.weather[0].description === "few clouds") {
      picture.src='image/sunny-cloud.png';
    } else if (data.weather[0].description === "scattered clouds") { 
      picture.src='image/cloud.png';
    } else if (data.weather[0].description === "broken clouds" || data.weather[0].description === "overcast clouds") { picture.src='image/broken-clouds.png';
  }  else if (data.weather[0].main === "Clear") {
      picture.src='image/sunny.png';
    } else if (data.weather[0].main === "Rain" && data.weather[0].description === "freezing rain") {
      picture.src='image/rain-snow.png';
    } else if (data.weather[0].main === "Rain") {
      picture.src='image/rain.png';
    }  else if (data.weather[0].main === "Drizzle") {
      picture.src='image/drizzle.png';
    } else if (data.weather[0].main === "Snow") {
      picture.src='image/snow.png';
    } else if (data.weather[0].main === "Thunderstorm") {
      picture.src='image/storm.png';
    } else if (data.weather[0].main === "Tornado" || data.weather[0].main === "Squall") {
      picture.src='image/wind.png';
    } else if (data.weather[0].main === "Fog" || data.weather[0].main === "Mist" || data.weather[0].main === "Haze" || data.weather[0].main === "Smoke") {
      picture.src='image/fog.png';
    } else if (data.weather[0].main === "Dust" || data.weather[0].main === "Sand" || data.weather[0].main === "Ash") {
      picture.src='image/dust.png';
    }
  } catch (err) {
    alert("Oops, we can't find a city like this! Sorry!"); 
  }

}




