import { useContext } from "react";
import WeatherContext from "../../context/WeatherContext";

export default function Select() {
  const { cities, selectedCity, setSelectedCity } = useContext(WeatherContext);

  const handleChangeCity = (e) => {
    for (let i = 0; i < cities.length; i++) {
      if (e.target.value === cities[i].name) {
        setSelectedCity(cities[i]);
      }
    }
  };

  return (
    <div>
      <select value={selectedCity.name} onChange={handleChangeCity}>
        {cities.map((city, i) => (
          <option key={i} value={city.name}>
            {city.name}
          </option>
        ))}
      </select>
    </div>
  );
}
