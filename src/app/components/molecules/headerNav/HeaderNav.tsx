import React, { useContext } from 'react';
import IconButton from '../../atoms/iconButton/IconButton';
import { ThemeColorContext } from '@/contexts/ThemeColorContext';

const HeaderNav = () => {
  const {themeColor,setThemeColor} = useContext(ThemeColorContext);

  const searchClick = () => {
    console.log('search clicked');
  }

  const themeClick = () => {
    setThemeColor(themeColor === 'light' ? 'dark' : 'light');
    console.log('theme clicked');
  }

  return (
    <div className=''>
      <IconButton
        onClick={searchClick}
        icon={'search'}
      />
      <IconButton
        onClick={themeClick}
        icon={'theme'}
      />
    </div>
  );
};

export default HeaderNav;
