import { ThemeColorContext } from '@/contexts/ThemeColorContext';
import React, { useContext } from 'react';
import { IconContext } from 'react-icons';
import { IoSunnyOutline } from "react-icons/io5";
import { IoMoon } from "react-icons/io5";


type IconProps = {
  onClick: () => void;
};

const IconButton = ({ onClick}: IconProps) => {
  const {themeColor} = useContext(ThemeColorContext);

  let iconSelect, themeColorSelect;


      switch (themeColor) {
        case 'light':
          iconSelect = <IoMoon data-testid="icon" />;
          break;
        case 'dark':
          iconSelect = <IoSunnyOutline data-testid="icon" />;
          break;
        default:
          iconSelect = <IoMoon data-testid="icon" />;
          break;
      }


  switch (themeColor) {
    case 'light':
      themeColorSelect='#454746';
      break;
    case 'dark':
      themeColorSelect='C4C7C5';
      break;
    default:
      themeColorSelect='#454746';
      break;
  }

  return (
  <button onClick={onClick} className=''>
    <IconContext.Provider value={{ color: themeColorSelect, size: '24' }} >{iconSelect}</IconContext.Provider>
  </button>
  );
};

export default IconButton;
