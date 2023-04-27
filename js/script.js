const api_key = "b72777b10a060f04cecd8ca6a9992f8b";
const url = `https://api.openweathermap.org/data/2.5/weather?q=Singapore&units=metric&appid=${api_key}`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    const temperature = data.main.temp;
    const feels_like = data.main.feels_like;
    const humidity = data.main.humidity;
    const wind_speed = data.wind.speed;
    const description = data.weather[0].description;

    // update HTML code with weather data
    document.getElementById("temperature").innerHTML = temperature.toFixed(1) + '°C';
    document.getElementById("feels-like").innerHTML = 'Feels Like: ' + feels_like.toFixed(1) + '°C';
    document.getElementById("humidity").innerHTML = 'Humidity: ' + humidity + '%';
    document.getElementById("wind-speed").innerHTML = 'Wind Speed: ' + wind_speed + 'm/s';
    document.getElementById("description").innerHTML = description;
  })
  .catch(error => console.log(error));

const time = new Date();

let minutes = '0';
let hours = '0';

// time.getHours().toString().length
// time.getMinutes().toString().length

if (time.getMinutes().toString().length === 1) {
  minutes = '0' + time.getMinutes();
} else {
  minutes = time.getMinutes();
}

if (time.getHours().toString().length === 1) {
  hours = '0' + time.getHours();
} else {
  hours = time.getHours();
}

// let localTime = time.getHours() + ":" + time.getMinutes();

let localTime = hours + ":" + minutes;
document.getElementById("time").innerHTML = localTime;
