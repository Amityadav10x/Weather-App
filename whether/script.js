document.addEventListener("DOMContentLoaded", function () {
    const apiKey = '77f456870cmsh962251eb43104ecp16db29jsnd2d9c1f393b5'; 
    const cityInput = document.getElementById('city');
    const cityName = document.getElementById('cityName');
    // const cloud_pct = document.getElementById('cloud_pct');
    const Temp = document.getElementById('Temp');
    const Temp2 = document.getElementById('Temp2');
    const feels_like = document.getElementById('Feels_like');
    const humidity = document.getElementById('Humidity');
    const humidity2 = document.getElementById('Humidity2');
    const min_temp = document.getElementById('Min_temp');
    const max_temp = document.getElementById('Max_temp');
    const wind_speed = document.getElementById('Wind_speed');
    const wind_speed2 = document.getElementById('Wind_speed2');
    const wind_degrees = document.getElementById('Wind_degrees');
    const sunrise = document.getElementById('Sunrise');
    const sunset = document.getElementById('Sunset');

    const getWeather = (city) => {
        fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': apiKey,
                'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
            }
        })
        .then(response => response.json())
        .then(data => {
            cityName.innerHTML = `Weather for ${city}`;
            // cloud_pct.innerHTML = data.cloud_pct;
            Temp.innerHTML = data.temp;
            Temp2.innerHTML = data.temp;
            feels_like.innerHTML = data.feels_like;
            humidity.innerHTML = data.humidity;
            humidity2.innerHTML = data.humidity;
            min_temp.innerHTML = data.min_temp;
            max_temp.innerHTML = data.max_temp;
            wind_speed.innerHTML = data.wind_speed;
            wind_speed2.innerHTML = data.wind_speed;
            wind_degrees.innerHTML = data.wind_degrees;
            sunrise.innerHTML = data.sunrise;
            sunset.innerHTML = data.sunset;
        })
        .catch(err => console.error(err));
    };

    const searchForm = document.querySelector('form[role="search"]');

    searchForm.addEventListener("submit", (e) => {
        e.preventDefault(); 
        const city = cityInput.value;
        getWeather(city);
    });


    getWeather("Basti");
});