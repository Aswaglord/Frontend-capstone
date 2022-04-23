import { useEffect, useState } from "react";

const Weather = () => {
  const [weather, setWeather] = useState({
    feels_like: null,
    humidity: null,
    pressure: null,
    temp: null,
    temp_min: null,
    temp_max: null,
  });

  useEffect(() => {
    const getWeather = () => {
      const apiKey = "517940e716cd982f5f49a780ce60aec4";
      const lat = "40.2969";
      const long = "-111.6946";

      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=imperial`
      )
        .then((res) => res.json())
        .then((data) => setWeather(data.main))
        .catch((err) => console.error("weather api error:", err));
    };

    getWeather();
  }, []);

  return (
    <div className="weather-container">
      <h1 className="weather-header">Feels like: {weather.feels_like}</h1>
      <h1>Humidity: {weather.humidity}</h1>
      <h1>Pressure: {weather.pressure}</h1>
      <h1>Current Temperature: {weather.temp}</h1>
      <h1>Temperature Low: {weather.temp_min}</h1>
      <h1>Temperature High: {weather.temp_max}</h1>
    </div>
  );
};

export default Weather;
