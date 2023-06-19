import { useState } from "react";
import axios from "axios";

const WeatherSearch = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=2f3f911e152a562434134015f58ca2bb`
      );
      setWeather(response.data);
    } catch (error) {
      console.error(error);
      setWeather(null);
    }
  };

  return (
    <div>
      <h1>Weather Search</h1>
      <input
        type="text"
        placeholder="Enter city name..."
        className="form-control mb-2"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <br></br>
      <button
        className="btn btn-block btn-primary me-2 btn-block"
        onClick={handleSearch}
      >
        Search
      </button>

      {weather && (
        <div className="mt-3">
          <h3>Weather Details for {weather.name}</h3>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Description: {weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default WeatherSearch;
