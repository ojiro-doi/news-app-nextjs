import { ThemeColorContext } from '@/contexts/ThemeColorContext';
import React, { useContext } from 'react';
import { IconContext } from 'react-icons';
import { FaSearch } from 'react-icons/fa'; //Searchアイコン
import { FaBars } from 'react-icons/fa'; //Menuアイコン
import { IoSunnyOutline } from "react-icons/io5";
import { IoMoon } from "react-icons/io5";


type IconProps = {
  onClick: () => void;
  icon: 'search' | 'theme';
};

const IconButton = ({ onClick, icon}: IconProps) => {
  const {themeColor} = useContext(ThemeColorContext);

  let iconSelect, themeColorSelect;

  switch (icon) {
    case 'search':
      iconSelect = <FaSearch data-testid="icon" />;
      break;
    case 'theme':
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
      break;
    default:
      iconSelect = null;
      break;
  }

  switch (themeColor) {
    case 'light':
      themeColorSelect='#000000';
      break;
    case 'dark':
      themeColorSelect='#ffffff';
      break;
    default:
      themeColorSelect='#000000';
      break;
  }

  return (
    <button onClick={onClick} className="px-2">
      <IconContext.Provider value={{ color: themeColorSelect, size: '32' }}>{iconSelect}</IconContext.Provider>
    </button>
  );
};

export default IconButton;
