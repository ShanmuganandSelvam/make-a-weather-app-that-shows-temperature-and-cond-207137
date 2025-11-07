import { WeatherData } from '../types/weather';
import { WiHumidity, WiStrongWind, WiThermometer } from 'react-icons/wi';
import { FaUmbrella } from 'react-icons/fa';

interface WeatherCardProps {
  data: WeatherData;
}

const WeatherCard = ({ data }: WeatherCardProps) => {
  const { location, current } = data;
  
  // Format the local time
  const dateTime = new Date(location.localtime);
  const formattedTime = dateTime.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });
  const formattedDate = dateTime.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="weather-card p-6 max-w-lg mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="text-left mb-4 md:mb-0">
          <h2 className="text-3xl font-bold text-white">{location.name}</h2>
          <p className="text-white/80">
            {location.region ? `${location.region}, ` : ''}{location.country}
          </p>
          <p className="text-sm text-white/70">{formattedDate}</p>
          <p className="text-sm text-white/70">{formattedTime}</p>
        </div>
        <div className="text-center">
          <img 
            src={`https:${current.condition.icon}`}
            alt={current.condition.text}
            className="w-24 h-24 mx-auto"
          />
          <p className="text-xl text-white font-medium">{current.condition.text}</p>
        </div>
      </div>

      <div className="mt-6">
        <div className="flex justify-center items-center">
          <h1 className="text-6xl font-bold text-white">{Math.round(current.temp_c)}°C</h1>
          <span className="text-2xl text-white/80 ml-2">/ {Math.round(current.temp_f)}°F</span>
        </div>
        <p className="text-white/90 mt-1">Feels like {Math.round(current.feelslike_c)}°C</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
        <div className="bg-white/20 p-3 rounded-lg flex flex-col items-center">
          <WiHumidity className="text-3xl text-white" />
          <p className="text-sm text-white/80 mt-1">Humidity</p>
          <p className="text-lg font-semibold text-white">{current.humidity}%</p>
        </div>
        <div className="bg-white/20 p-3 rounded-lg flex flex-col items-center">
          <WiStrongWind className="text-3xl text-white" />
          <p className="text-sm text-white/80 mt-1">Wind</p>
          <p className="text-lg font-semibold text-white">{current.wind_kph} km/h</p>
        </div>
        <div className="bg-white/20 p-3 rounded-lg flex flex-col items-center">
          <WiThermometer className="text-3xl text-white" />
          <p className="text-sm text-white/80 mt-1">UV Index</p>
          <p className="text-lg font-semibold text-white">{current.uv}</p>
        </div>
        <div className="bg-white/20 p-3 rounded-lg flex flex-col items-center">
          <FaUmbrella className="text-2xl text-white" />
          <p className="text-sm text-white/80 mt-1">Precipitation</p>
          <p className="text-lg font-semibold text-white">
            {current.condition.text.toLowerCase().includes('rain') ? 'Yes' : 'No'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;