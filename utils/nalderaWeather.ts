// 
import axios from 'axios';

const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const fetchNalderaWeather = async () => {
  const latitude = 31.0834;
  const longitude = 77.1757;

  try {
    const response = await axios.get(BASE_URL, {
      params: {
        lat: latitude,
        lon: longitude,
        appid: API_KEY,
        units: 'metric', // Celsius
      },
    });
    const data = response.data;
    // return response.data;
    const weather = {
      temp: data.main.temp,
      description: data.weather[0].description,
      humidity: data.main.humidity,
      rainLastHour: data.rain?.['1h'] || 0, // Rainfall in the last 1 hour (default to 0 if not available)
      rainLast3Hours: data.rain?.['3h'] || 0, // Rainfall in the last 3 hours (default to 0 if not available)
    };
    return weather;

  } catch (error) {
    console.error('Error fetching Naldera weather:', error);
    throw error;
  }
};
