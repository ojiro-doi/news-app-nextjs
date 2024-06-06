import React, { useContext } from 'react';
import AppButton from '../../atoms/appButton/AppButton';
import MenuButton from '../../atoms/menuButton/MenuButton';
import HeaderNav from '../../molecules/headerNav/HeaderNav';
import { ThemeColorContext } from '@/contexts/ThemeColorContext';
import Props from '@/app/types/types';

const Header = ({ isOpen, toggleMenu }: Props) => {
  const { themeColor } = useContext(ThemeColorContext);

  let bgColorSelect;
  switch (themeColor) {
    case 'light':
      bgColorSelect = 'bg-white';
      break;
    case 'dark':
      bgColorSelect = 'bg-bgColor_darkTheme';
      break;
    default:
      bgColorSelect = 'bg-white';
      break;
  }

  return (
    <div className={`flex items-center justify-between ${bgColorSelect} border border-gray-500 h-16 px-2 md:px-8`}>
      <div className="flex justify-start w-20 md:hidden">
        <MenuButton isOpen={isOpen ?? false} toggleMenu={toggleMenu ?? (() => {})} />
      </div>
      <div className="flex justify-center md:justify-start">
        <AppButton />
      </div>
      <div className="flex ">
        <HeaderNav />
      </div>
    </div>
  );
};

export default Header;
