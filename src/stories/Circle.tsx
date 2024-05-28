import React from 'react';

type CircleProps = {
  variant:'orange'|'green'|'yellow'
}

const Circle = ({variant}:CircleProps) => {
  let bgColor;

  switch (variant) {
    case 'orange':
      bgColor = 'bg-orange-400';
      break;
    case 'green':
      bgColor='bg-green-400';
      break;
    case 'yellow':
      bgColor = 'bg-yellow-400';
      break;
  }

  return <div className={`${bgColor} w-14 h-14 p-2 rounded-full`}></div>;
};

export default Circle;
