import axios from 'axios';

export const fetchWeather = async () => {
  let weatherData = null;

  try {
    const response = await axios.get('http://api.weatherapi.com/v1/current.json', {
      params: {
        key: process.env.NEXT_PUBLIC_WEATHER_API_KEY,
        q: 'Tokyo',
        days: 7,
        aqi: 'no',
        alerts: 'no',
      },
    });
    weatherData = response.data;
  } catch (error) {
    console.error('Error fetching the weather data', error);
  }

  return weatherData;
};

export default fetchWeather;
