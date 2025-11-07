import axios from 'axios';
import { WeatherData } from '../types/weather';

const API_KEY = 'e2a54d6a1a8a4b31a4b141351232611'; // Free API key for WeatherAPI.com
const BASE_URL = 'https://api.weatherapi.com/v1';

export const fetchWeatherData = async (location: string): Promise<WeatherData> => {
  try {
    const response = await axios.get(`${BASE_URL}/current.json`, {
      params: {
        key: API_KEY,
        q: location,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};