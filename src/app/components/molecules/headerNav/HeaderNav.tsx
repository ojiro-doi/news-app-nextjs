import React from 'react';
import IconButton from '../../atoms/iconButton/IconButton';

const HeaderNav = () => {
  
  const searchClick = () => {
    console.log('search clicked');
  }

  const themeClick = () => {
    console.log('theme clicked');
  }

  return (
    <div>
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
