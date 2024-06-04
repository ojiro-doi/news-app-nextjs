import { ThemeColorContext } from '@/contexts/ThemeColorContext';
import Link from 'next/link';
import React, { useContext } from 'react';

const AppButton = () => {
  const { themeColor } = useContext(ThemeColorContext);

  let themeColorSelect;

  switch (themeColor) {
    case 'light':
      themeColorSelect = '#454746';
      break;
    case 'dark':
      themeColorSelect = '#C4C7C5';
      break;
    default:
      themeColorSelect = '#454746';
      break;
  }

  return (
    <div>
      <h1 style={{color:themeColorSelect}} className=" font-bold text-2xl">
        <Link href="/">News</Link>
      </h1>
    </div>
  );
};

export default AppButton;
