import { ThemeColorContext } from '@/contexts/ThemeColorContext';
import React, { useContext } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; //Menuアイコン

type MenuProps = {
  menuOpen: boolean;
  toggleMenu: () => void;
};

const MenuButton = ({ menuOpen, toggleMenu }: MenuProps) => {
  const { themeColor } = useContext(ThemeColorContext);

  let themeColorSelect;

  switch (themeColor) {
    case 'light':
      themeColorSelect = '#454746';
      break;
    case 'dark':
      themeColorSelect = '#C4C7C5';
      break;
    default:
      themeColorSelect = '#454746';
      break;
  }

  return (
    <>
      <div className={`md:hidden ${menuOpen ? 'hidden' : ''}`}>
        <button onClick={toggleMenu} className="">
          <FaBars size={32} style={{ color: themeColorSelect }} />
        </button>
      </div>
      <div>
        {menuOpen && (
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
