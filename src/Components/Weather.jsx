import React, {useState} from "react";
import "./Weather.css"

import search_icon from "./Assets/icons8-search-50.png";
import humidity_icon from "./Assets/icons8-humidity-50.png";
import wind_icon from "./Assets/icons8-wind-48.png";
import sunny_icon from "./Assets/icons8-summer-48.png";
import cloud_icon from "./Assets/icons8-cloud-48.png";
import rain_icon from "./Assets/icons8-rain-48.png";
import snow_icon from "./Assets/icons8-snow-48.png";
import thunder_icon from "./Assets/icons8-storm-48.png";
import drizzle_icon from "./Assets/icons8-drizzle-48.png";
import mist_icon from "./Assets/icons8-mist-48.png";

// Mapping of weather conditions to icons
const weatherIcons = {
    Clear: sunny_icon,
    Clouds: cloud_icon,
    Rain: rain_icon,
    Snow: snow_icon,
    Thunderstorm: thunder_icon,
    Drizzle: drizzle_icon,
    Mist: mist_icon
  };



const WeatherApp = () => {
    
    // API key for OpenWeather API
    const API_KEY = "62e318ca8947d6ac97e89d1bfd7ce8c3";

   // State variables to manage weather data and errors
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");

  // Function to fetch weather data from the API
  const search = async () => {
    if (!city) {
      setError("Please enter a city name.");
      return;
    }

        // Construct the API URL with the city name and API key
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=Metric&appid=${API_KEY}`;

        try {
            const response = await fetch(url);
            if (!response.ok) {
              throw new Error("City not found");
            }
      
            const data = await response.json();
      
            // Determine the icon based on the weather condition
      const weatherCondition = data.weather[0].main;
      const icon = weatherIcons[weatherCondition] || "./Assets/icons8-unknown-48.png";

            // Update state with weather data
            setWeatherData({
              temperature: data.main.temp,
              humidity: data.main.humidity,
              windSpeed: data.wind.speed,
              location: data.name,
              icon,
              condition: weatherCondition,
            });
      
            setError(""); // Clear any previous error
          } catch (err) {
            setWeatherData(null);
            setError(err.message);
          }
        };

    // JSX structure defining the app's UI
    return (
        <div className="container">
      {/* Top section with input and search button */}
      <div className="top">
        <input
          type="text"
          className="city"
          placeholder="Enter City Name"
          value={city}
          onChange={(e) => setCity(e.target.value)} // Update city state
        />
        <div className="search_icon" onClick={search}>
          <img src={search_icon} alt="Search Icon" />
        </div>
      </div>

      {/* Display error message if any */}
      {error && <div style={{ color: "red", textAlign: "center" }}>{error}</div>}

      {/* Display weather information */}
      {weatherData && (
        <>
          <div className="weater_img">
            <img src={weatherData.icon} alt={weatherData.condition} />
          </div>
          <div className="temperature">{weatherData.temperature}°C</div>
          <div className="location">{weatherData.location}</div>
          <div className="datawrap">
            <div className="data_element">
              <img src={humidity_icon} alt="Humidity Icon" className="icon" />
              <div className="data">
                <div className="humidity">{weatherData.humidity}%</div>
                <div className="text">Humidity</div>
              </div>
            </div>
            <div className="data_element">
              <img src={wind_icon} alt="Wind Icon" className="icon" />
              <div className="data">
                <div className="wind-speed">{weatherData.windSpeed} km/h</div>
                <div className="text">Wind Speed</div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
    )
}

export default WeatherApp