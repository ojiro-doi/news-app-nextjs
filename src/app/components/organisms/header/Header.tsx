"use client"
import React, { useCallback, useContext, useState } from 'react';
import AppButton from '../../atoms/appButton/AppButton';
import MenuButton from '../../atoms/menuButton/MenuButton';
import HeaderNav from '../../molecules/headerNav/HeaderNav';
import { ThemeColorContext } from '@/contexts/ThemeColorContext';

const Header = () => {
  const {themeColor} = useContext(ThemeColorContext);
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  // let themeColorSelect;
  // switch (themeColor) {
  //   case 'light':
  //     themeColorSelect='#454746';
  //     break;
  //   case 'dark':
  //     themeColorSelect='C4C7C5';
  //     break;
  //   default:
  //     themeColorSelect='#454746';
  //     break;
  // }

  return (
    <div className="flex items-center justify-between bg-white border border-gray-500 h-16 px-8">
      <div className="flex justify-start">
        <MenuButton isOpen={isOpen} toggleMenu={toggleMenu} />
      </div>
      <div className="flex-1 flex justify-center md:justify-start">
        <AppButton />
      </div>
      <div className="flex ">
        <HeaderNav />
      </div>
    </div>
  );
};

export default Header;
