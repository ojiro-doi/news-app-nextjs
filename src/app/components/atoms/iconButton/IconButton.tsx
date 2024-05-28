import React from 'react';
import { IconContext } from 'react-icons';
import { FaSearch } from 'react-icons/fa'; //Searchアイコン
import { FaBars } from 'react-icons/fa'; //Menuアイコン
import { IoSunnyOutline } from "react-icons/io5";
import { IoMoon } from "react-icons/io5";


type IconProps = {
  onClick: () => void;
  icon: 'menu' | 'search' | 'theme';
  themeColor: 'light' | 'dark';
};

const IconButton = ({ onClick, icon,themeColor }: IconProps) => {
  let iconSelect, themeColorSelect;

  switch (icon) {
    case 'menu':
      iconSelect = <FaBars />;
      break;
    case 'search':
      iconSelect = <FaSearch />;
      break;
    case 'theme':
      switch (themeColor) {
        case 'light':
          iconSelect = <IoMoon />;
          break;
        case 'dark':
          iconSelect = <IoSunnyOutline />;
          break;
        default:
          iconSelect = <IoMoon />;
          break;
      }
      break;
    default:
      iconSelect = <FaBars />;
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
    <button onClick={onClick} className="bg-blue-300 ">
      <IconContext.Provider value={{ color: themeColorSelect, size: '32' }}>{iconSelect}</IconContext.Provider>
    </button>
  );
};

export default IconButton;
