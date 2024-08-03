async function fetchWeather() {
    const apiKey = '094988cafe323897644e3261dd988bd5'; // Replace with your actual API key
    const location = 'Lucknow,IN'; // Location format

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data); // Log the entire response for inspection

        // Check if the response contains the necessary weather information
        if (data.main) {
            const temp = data.main.temp.toFixed(2);
            const tempMin = data.main.temp_min.toFixed(2);
            const tempMax = data.main.temp_max.toFixed(2);
            const weatherDescription = data.weather[0].description;
            
            document.querySelector('.temp').textContent = `${temp}°C`;
            document.querySelector('.tempmin').textContent = `Min ${tempMin}°C | Max ${tempMax}°C`;
            document.querySelector('.location').textContent = `Lucknow, India`;
            document.querySelector('#date').textContent = formatDate(new Date());
        } else {
            console.error('Weather data not available:', data);
            document.querySelector('.temp').textContent = 'Data not available';
            document.querySelector('.tempmin').textContent = 'Data not available';
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
        document.querySelector('.temp').textContent = 'Error fetching temp';
        document.querySelector('.tempmin').textContent = 'Error fetching data';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('date').textContent = formatDate(new Date());
    fetchWeather();
});

function formatDate(date) {
    const options = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' };
    return date.toLocaleDateString('en-US', options).toUpperCase();
}
