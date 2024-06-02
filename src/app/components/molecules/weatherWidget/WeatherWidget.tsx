import Props from '@/app/types/types';
import React from 'react';
import WeatherCard from '../../atoms/WeatherCard/WeatherCard';

const WeatherWidget = ({ weather }: Props) => {
  if (!weather) {
    return null;
  }

  const { current, forecast, location } = weather;
  const { forecastday } = forecast;

  // const { cloud, condition } = weather.current;
  // const { icon: currentIcon, text: currentText } = condition;
  // const { name } = weather.location;
  // const { forecastday } = weather.forecast;

  const date = new Date(location.localtime);
  const todayDate = date.getDate();
  const todayMonth = date.getMonth() + 1;

  return (
    <div>
      <h2>{location.name}</h2>
      <h2>
        今日
        <span>
          {todayMonth}/{todayDate}
        </span>
      </h2>
      <img src={current.condition.icon} alt="Weather Icon" />
      <p>
        {current.temp_c}
        <span>˚c</span>
      </p>
      <ul className="flex">
        {forecastday &&
          forecastday.map((forecastDay, index) => (
            <li key={index} className="flex-col">
              <WeatherCard forecastDay={forecastDay} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default WeatherWidget;
