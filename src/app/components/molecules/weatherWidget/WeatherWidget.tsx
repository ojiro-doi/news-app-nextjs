import Props from '@/app/types/types';
import React, { useContext } from 'react';
import WeatherCard from '../../atoms/WeatherCard/WeatherCard';
import { ThemeColorContext } from '@/contexts/ThemeColorContext';

const WeatherWidget = ({ weather }: Props) => {
  const { themeColor } = useContext(ThemeColorContext);
  if (!weather) {
    return null;
  }

  const { current, forecast, location } = weather;
  const { forecastday } = forecast;

  // テーマカラーの設定
  let bgColorSelect;
  let textColorSelect;
  let borderColorSelect;
  switch (themeColor) {
    case 'light':
      bgColorSelect = 'bg-white';
      textColorSelect = 'text-textColor_lightTheme';
      borderColorSelect='border-textColor_lightTheme'
      break;
    case 'dark':
      bgColorSelect = 'bg-black';
      textColorSelect = 'text-textColor_darkTheme';
      borderColorSelect='border-textColor_darkTheme'
      break;
    default:
      bgColorSelect = 'bg-white';
      textColorSelect = 'text-textColor_lightTheme';
      borderColorSelect='border-textColor_lightTheme'
      break;
  }

  const date = new Date(location.localtime);
  const todayHour = date.getHours();
  const todayDate = date.getDate();
  const todayMonth = date.getMonth() + 1;

  return (
    <div className= {`${bgColorSelect} ${textColorSelect} rounded-md border ${borderColorSelect}`}>
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
            <p className='text-2xl font-semibold '>
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
