# Weather Forecasting App

This is a simple weather forecasting app that fetches and displays current weather information for a specified location using the OpenWeatherMap API.

## Features

- **Displays the current temperature, weather description, and date.**
- **Shows minimum and maximum temperature for the day.**
- **Responsive design with animations and styling.**

## Getting Started

### Prerequisites

- **API Key:** You need an API key from OpenWeatherMap. You can obtain one by signing up at [OpenWeatherMap](https://openweathermap.org/).

### File Structure

1. **index.html:** The main HTML file that structures the weather information and integrates with CSS and JavaScript.
2. **index.css:** The CSS file that styles the app, including layout, colors, and animations.
3. **script.js:** The JavaScript file that fetches weather data from the API and updates the HTML.

## Example Output
Below is an example of what the weather forecasting app looks like:

![Screenshot 2024-08-03 160025](https://github.com/user-attachments/assets/42975be3-8904-490e-9ed4-1b8024e207b5)

## Explanation

1. **Location:** The app displays the weather for Lucknow, India. This can be customized in the `script.js` file.
2. **Temperature:** Shows the current temperature in Celsius, as well as the minimum and maximum temperatures for the day.
3. **Date:** Displays the current date in a formatted style.
4. **Weather Icon:** Represents the current weather condition (e.g., sunny, misty) using an icon.

## Usage

1. **API Key:** Make sure to replace the placeholder API key in `script.js` with your own key.
2. **Location:** The script currently fetches weather data for Lucknow, India. You can change the location in the `fetchWeather` function if needed.

## Troubleshooting

1. **Error Fetching Data:** If you see errors related to fetching data, ensure that your API key is valid and not expired. Also, check the network request in the browser's developer tools to confirm the request is being made correctly.
2. **Styling Issues:** Make sure `index.css` is correctly linked in `index.html` and that there are no issues with the stylesheet URL.

```bash
git clone https://github.com/Allminfatima/weather-forecasting-app.git
cd weather-forecasting-app
