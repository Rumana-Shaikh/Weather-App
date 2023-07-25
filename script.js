function getWeather() {
    const cityInput = document.getElementById('cityInput').value;

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=140324c45f47c15ff96b52a881ebcebc&units=metric`)
        .then(response => response.json())
        .then(data => {
            const cityName = document.getElementById('cityName');
            const temperature = document.getElementById('temperature');
            const weatherDescription = document.getElementById('weatherDescription');
            cityName.textContent = data.name;
            temperature.textContent = `Temperature: ${data.main.temp}°C`;
            weatherDescription.textContent = `Weather: ${data.weather[0].description}`;
            document.getElementById('weatherInfo').style.display = 'block';
        })
        .catch(error => {
            alert('Error fetching weather data. Please try again later.');
            console.error('Error:', error);
        });
}
