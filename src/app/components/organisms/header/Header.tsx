import React, { useContext } from 'react';
import AppButton from '../../atoms/appButton/AppButton';
import MenuButton from '../../atoms/menuButton/MenuButton';
import HeaderNav from '../../molecules/headerNav/HeaderNav';
import { ThemeColorContext } from '@/contexts/ThemeColorContext';
import Props from '@/app/types/types';

const Header = ({ menuOpen, toggleMenu,searchOpen,toggleSearch }: Props) => {
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
      <div className='flex'>
        <div className="flex mx-4 md:hidden">
          <MenuButton menuOpen={menuOpen ?? false} toggleMenu={toggleMenu ?? (() => {})} />
        </div>
        <div className="flex">
          <AppButton />
        </div>
      </div>
      <div className="flex ">
        <HeaderNav searchOpen={searchOpen} toggleSearch={toggleSearch}/>
      </div>
    </div>
  );
};

export default Header;
