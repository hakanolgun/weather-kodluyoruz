import styles from "./days.module.css";
import { useContext } from "react";
import WeatherContext from "../../context/WeatherContext";
export default function Days() {
  const { weatherData } = useContext(WeatherContext);
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  return (
    <div className={styles.container}>
      {weatherData.map((day, i) => (
        <div key={i} className={styles.dayDiv}>
          <p>{days[new Date(day.dt * 1000).getDay()]}</p>

          <img
            src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
            alt="hava durumu iconu"
          />

          <div className={styles.tempDiv}>
            <p>{Math.round(day.temp.max)}&#176; </p>
            <p>{Math.round(day.temp.min)}&#176; </p>
          </div>
        </div>
      ))}
    </div>
  );
}
