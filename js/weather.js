const API_KEY = config.apikey;

function onGeoOk(position){
    const url = `https://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        const dataWeather = data.weather[0].main;
        let weatherIcon = "🌫️";
        if(dataWeather === 'Thunderstorm'){
            weatherIcon = "⛈️";
        }else if(dataWeather === 'Drizzle'){
            weatherIcon = "💧";
        }else if(dataWeather === 'Rain'){
            weatherIcon = "🌧️";
        }else if(dataWeather === 'Snow'){
            weatherIcon = "🌨️";
        }else if(dataWeather === 'Clear'){
            weatherIcon = "🌞";
        }else if(dataWeather === 'Clouds'){
            weatherIcon = '🌥️'
        }
        weather.innerText = `${dataWeather} ${weatherIcon}  ${data.main.temp}°C`;
        city.innerText = data.name;
    });
}
function onGeoError(){
    alert("Can't find you. No weather for you.");
}


navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);