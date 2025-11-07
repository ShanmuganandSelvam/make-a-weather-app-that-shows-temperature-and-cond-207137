import { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import ErrorMessage from './components/ErrorMessage';
import LoadingSpinner from './components/LoadingSpinner';
import { fetchWeatherData } from './api/weatherApi';
import { WeatherData } from './types/weather';

function App() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [lastSearched, setLastSearched] = useState<string | null>(null);

  // Load weather data for default location on initial render
  useEffect(() => {
    getWeatherData('New York');
  }, []);

  const getWeatherData = async (location: string) => {
    setLoading(true);
    setError(null);
    
    try {
      const data = await fetchWeatherData(location);
      setWeatherData(data);
      setLastSearched(location);
      localStorage.setItem('lastLocation', location);
    } catch (err) {
      setError('Unable to fetch weather data. Please check the location and try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-2">Weather Forecast</h1>
        <p className="text-white/80">Get current weather conditions for any location</p>
      </header>

      <SearchBar onSearch={getWeatherData} isLoading={loading} />
      
      {error && <ErrorMessage message={error} />}
      
      {loading ? (
        <LoadingSpinner />
      ) : (
        weatherData && (
          <>
            <WeatherCard data={weatherData} />
            <p className="mt-6 text-sm text-white/70">
              Last updated: {new Date().toLocaleTimeString()}
            </p>
          </>
        )
      )}

      <footer className="mt-12 text-sm text-white/60">
        <p>Data provided by WeatherAPI.com</p>
        {lastSearched && (
          <p className="mt-1">
            Showing weather for: <span className="font-semibold">{lastSearched}</span>
          </p>
        )}
      </footer>
    </div>
  );
}

export default App;