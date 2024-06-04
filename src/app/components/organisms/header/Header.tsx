import React, { useCallback, useState } from 'react';
import AppButton from '../../atoms/appButton/AppButton';
import MenuButton from '../../atoms/menuButton/MenuButton';
import HeaderNav from '../../molecules/headerNav/HeaderNav';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  return (
    <div className="flex items-center justify-between bg-white border border-gray-500 h-16 px-8">
      <div className="flex">
        <MenuButton isOpen={isOpen} toggleMenu={toggleMenu} />
        <AppButton />
      </div>
      <div className="">
        <HeaderNav />
      </div>
    </div>
  );
};

export default Header;
