import { createContext, useState, useEffect } from "react";
import cities from "./cityList";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const [selectedCity, setSelectedCity] = useState(cities[54]);
  const [weatherData, setWeatherData] = useState([]);
  useEffect(() => {
    async function getWeather() {
      const apiCall = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${selectedCity.lat}&lon=${selectedCity.long}&exclude=current,minutely,hourly,alerts&units=metric&appid=${apiKey}`
      );
      const res = await apiCall.json();
      console.log(`gelen veri`, res.daily);
      setWeatherData(res.daily);
    }
    getWeather();
  }, [selectedCity, apiKey]);

  const values = {
    cities,
    selectedCity,
    setSelectedCity,
    weatherData,
    setWeatherData,
  };

  return (
    <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
  );
};

export default WeatherContext;
