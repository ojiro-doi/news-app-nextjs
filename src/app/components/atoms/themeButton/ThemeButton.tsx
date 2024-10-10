import { ThemeColorContext } from '@/contexts/ThemeColorContext';
import React, { useContext } from 'react';
import { IconContext } from 'react-icons';
import { IoMdSunny } from 'react-icons/io';
import { IoMoon } from 'react-icons/io5';

type IconProps = {
  onClick: () => void;
};

const ThemeButton = ({ onClick }: IconProps) => {
  const { themeColor } = useContext(ThemeColorContext);

  let iconSelect, themeColorSelect, ariaLabel;

  switch (themeColor) {
    case 'light':
      iconSelect = <IoMoon data-testid="icon" />;
      ariaLabel = 'ダークモードに切り替え';
      break;
    case 'dark':
      iconSelect = <IoMdSunny data-testid="icon" />;
      ariaLabel = 'ライトモードに切り替え';
      break;
    default:
      iconSelect = <IoMoon data-testid="icon" />;
      ariaLabel = 'ダークモードに切り替え';
      break;
  }

  switch (themeColor) {
    case 'light':
      themeColorSelect = '#454746';
      break;
    case 'dark':
      themeColorSelect = 'C4C7C5';
      break;
    default:
      themeColorSelect = '#454746';
      break;
  }

  return (
    <button onClick={onClick} className="" aria-label={ariaLabel}>
      <IconContext.Provider value={{ color: themeColorSelect, size: '24' }}>{iconSelect}</IconContext.Provider>
    </button>
  );
};

export default ThemeButton;
