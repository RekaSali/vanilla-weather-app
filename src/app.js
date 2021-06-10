function displayTemperature(response) {
  console.log(response.data);
}

let apiKey = "77ddf1d91754306b3e68d959fd8e4d12";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
