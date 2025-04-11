import { WeatherContext } from "../context";
import { useWeather } from "../hooks";

export default function WeatherProvider({ children }) {
  const { weatherData, loading, error } = useWeather();

  const state = {
    weatherData,
    loading,
    error,
  };
  return (
    <WeatherContext.Provider value={state}>{children}</WeatherContext.Provider>
  );
}
