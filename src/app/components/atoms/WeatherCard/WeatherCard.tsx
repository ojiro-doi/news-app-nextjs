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
        <div>
          <p>
            {dayNumber}
            <span>日</span>
          </p>
          <img src={forecastDay.day.condition.icon} alt="Weather Icon" className="mr-2" />
          <p>{forecastDay.day.maxtemp_c}</p>
          <p>{forecastDay.day.mintemp_c}</p>
        </div>
      )}
    </>
  );
};

export default WeatherCard;
