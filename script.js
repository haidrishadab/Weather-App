// const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'x-rapidapi-key': 'db3f2f799dmsh9b42e05da7473a0p1b828ajsn4096ed219bc5',
// 		'x-rapidapi-host': 'weather-by-api-ninjas.p.rapidapi.com'
// 	}
// };

// async function fetchWeather() {
// 	try {
// 		const response = await fetch(url, options);
// 		if (!response.ok) {
// 			throw new Error(`HTTP error! Status: ${response.status}`);
// 		}
// 		const result = await response.json(); // Assuming the API returns JSON
// 		console.log(result);
// 	} catch (error) {
// 		console.error('Error fetching the weather data:', error);
// 	}
// }

// fetchWeather();

// const navCity2=document.selectElementById("nav-city2");

const url =
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi";
console.log(url);
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "db3f2f799dmsh9b42e05da7473a0p1b828ajsn4096ed219bc5",
    "x-rapidapi-host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};
const getWeather = (city) => {

  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      cityName.innerHTML = city;
      // cloud_pct.innerHTML = response.cloud_pct;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      humi.innerHTML = response.humidity;
      max_temp.innerHTML = response.max_temp;
      min_temp.innerHTML = response.min_temp;
      sunrise.innerHTML = response.sunrise;
      sunset.innerHTML = response.sunset;
      temp.innerHTML = response.temp;
      temp1.innerHTML = response.temp;
      wind_degrees.innerHTML = response.wind_degrees;
      wind_speed.innerHTML = response.wind_speed;
      windi.innerHTML = response.wind_speed;
    })
    .catch((err) => console.error(err));
}
Submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});

getWeather("Delhi");

// const cities=["Kolkata","Lucknow","Patna","Gaya"];
// cities.forEach(city=>{
//   city.preventDeafult;
//   getWeather(city);
// })

// const kol=getWeather("Kolkata");
// console.log(kol);
// getWeather("Lucknow")
// getWeather("Patna")
// getWeather()

// const navCity=document.selectElementById('nav-city');
// const navCity2=document.selectElementById('nav-city2');

// navCity.addEventListener('click',()=>{
//   getWeather("Delhi");
// });
// navCity2.addEventListener('click',()=>{
//   getWeather("Seattle");
// });

const options1 = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "db3f2f799dmsh9b42e05da7473a0p1b828ajsn4096ed219bc5",
    "x-rapidapi-host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};
fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkata",
  options1
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
    // cityName.innerHTML=city;
    // cloud_pct.innerHTML = response.cloud_pct;
    cloud_pct_k.innerHTML = response.cloud_pct;
    feels_like_k.innerHTML = response.feels_like;
    min_temp_k.innerHTML = response.min_temp;
    humidity_k.innerHTML = response.humidity;
    max_temp_k.innerHTML = response.max_temp;
    sunrise_k.innerHTML = response.sunrise;
    sunset_k.innerHTML = response.sunset;
    temp_k.innerHTML = response.temp;
    wind_degrees_k.innerHTML = response.wind_degrees;
    wind_speed_k.innerHTML = response.wind_speed;
  })
  .catch((err) => console.error(err));

const options2 = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "db3f2f799dmsh9b42e05da7473a0p1b828ajsn4096ed219bc5",
    "x-rapidapi-host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};
fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Lucknow",
  options2
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
    // cityName.innerHTML=city;
    // cloud_pct.innerHTML = response.cloud_pct;
    cloud_pct_l.innerHTML = response.cloud_pct;
    feels_like_l.innerHTML = response.feels_like;
    min_temp_l.innerHTML = response.min_temp;
    humidity_l.innerHTML = response.humidity;
    max_temp_l.innerHTML = response.max_temp;
    sunrise_l.innerHTML = response.sunrise;
    sunset_l.innerHTML = response.sunset;
    temp_l.innerHTML = response.temp;
    wind_degrees_l.innerHTML = response.wind_degrees;
    wind_speed_l.innerHTML = response.wind_speed;
  })
  .catch((err) => console.error(err));

const options3 = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "db3f2f799dmsh9b42e05da7473a0p1b828ajsn4096ed219bc5",
    "x-rapidapi-host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};
fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Patna",
  options3
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
    // cityName.innerHTML=city;
    // cloud_pct.innerHTML = response.cloud_pct;
    cloud_pct_p.innerHTML = response.cloud_pct;
    feels_like_p.innerHTML = response.feels_like;
    min_temp_p.innerHTML = response.min_temp;
    humidity_p.innerHTML = response.humidity;
    max_temp_p.innerHTML = response.max_temp;
    sunrise_p.innerHTML = response.sunrise;
    sunset_p.innerHTML = response.sunset;
    temp_p.innerHTML = response.temp;
    wind_degrees_p.innerHTML = response.wind_degrees;
    wind_speed_p.innerHTML = response.wind_speed;
  })
  .catch((err) => console.error(err));

const options4 = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "db3f2f799dmsh9b42e05da7473a0p1b828ajsn4096ed219bc5",
    "x-rapidapi-host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};
fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Gaya",
  options2
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
    // cityName.innerHTML=city;
    // cloud_pct.innerHTML = response.cloud_pct;
    cloud_pct_g.innerHTML = response.cloud_pct;
    feels_like_g.innerHTML = response.feels_like;
    min_temp_g.innerHTML = response.min_temp;
    humidity_g.innerHTML = response.humidity;
    max_temp_g.innerHTML = response.max_temp;
    sunrise_g.innerHTML = response.sunrise;
    sunset_g.innerHTML = response.sunset;
    temp_g.innerHTML = response.temp;
    wind_degrees_g.innerHTML = response.wind_degrees;
    wind_speed_g.innerHTML = response.wind_speed;
  })
  .catch((err) => console.error(err));
