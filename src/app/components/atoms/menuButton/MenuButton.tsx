import { ThemeColorContext } from '@/contexts/ThemeColorContext';
import React, { useContext } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; //Menuアイコン
import SideNav from '../../organisms/sideNav/SideNav';

type MenuProps = {
  isOpen: boolean;
  toggleMenu: () => void;
};

const MenuButton = ({ isOpen, toggleMenu }: MenuProps) => {
  const { themeColor } = useContext(ThemeColorContext);

  let themeColorSelect;

  switch (themeColor) {
    case 'light':
      themeColorSelect = '#000000';
      break;
    case 'dark':
      themeColorSelect = '#ffffff';
      break;
    default:
      themeColorSelect = '#000000';
      break;
  }

  return (
    <>
      <div className={`mr-2 md:hidden ${isOpen ? 'hidden' : ''}`}>
        <button onClick={toggleMenu} className="">
          <FaBars size={32} style={{ color: themeColorSelect }} />
        </button>
      </div>
      <div>
        {isOpen && (
          <div>
            <button onClick={toggleMenu} className="">
              <FaTimes size={32} style={{ color: themeColorSelect }} />
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default MenuButton;
