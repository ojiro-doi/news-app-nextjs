import React from 'react';

type WeatherProps = {
  forecastDay: {
    date: string;
    day: {
      maxtemp_c: number;
      mintemp_c: number;
      avgtemp_c: number;
      condition: {
        icon: string;
        text: string;
      };
    };
  };
};

const WeatherCard = ({ forecastDay }: WeatherProps) => {
  if (!forecastDay) {
    return null;
  }

  // 日にちの数字だけ取得
  const date = new Date(forecastDay.date);
  const dayNumber = date.getDate();

  return (
    <>
      {forecastDay && (
        <div className='text-center'>
          <div>
            {dayNumber}
            <span>日</span>
          </div>
          <img src={forecastDay.day.condition.icon} alt="Weather Icon" className="" />
          <div className='text-red-500'>{Math.floor(forecastDay.day.maxtemp_c)}</div>
          <div className='text-blue-400'>{Math.floor(forecastDay.day.mintemp_c)}</div>
        </div>
      )}
    </>
  );
};

export default WeatherCard;
