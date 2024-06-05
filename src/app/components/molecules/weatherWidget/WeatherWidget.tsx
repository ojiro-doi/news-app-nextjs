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
  const todayHour = date.getHours();
  const todayDate = date.getDate();
  const todayMonth = date.getMonth() + 1;

  return (
    <div className="bg-slate-100 rounded-md">
      <div className='px-4'>
        <h1 className="border-b font-bold p-2">{location.name}</h1>
        <div className="flex justify-between p-2 border-b">
          <div className="flex-col">
            {/* <span className=''>現在</span> */}
            <span className='mr-1'>
              {todayMonth}/{todayDate}
            </span>
            <span>
              {todayHour}
              <span>時</span>
            </span>
            <p className='text-2xl font-semibold'>
              {current.temp_c}
              <span>˚c</span>
            </p>
          </div>
          <img src={current.condition.icon} alt="Weather Icon" />
        </div>
        <div className='p-2'>
          <ul className="flex">
            {forecastday &&
              forecastday.map((forecastDay, index) => (
                <li key={index} className="flex-col">
                  <WeatherCard forecastDay={forecastDay} />
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WeatherWidget;
