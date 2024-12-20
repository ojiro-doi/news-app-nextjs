'use client';
import '@/styles/globals.css';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { ThemeColorContext } from '@/contexts/ThemeColorContext';
import Header from '@/app/components/organisms/header/Header';
import SideNav from '@/app/components/organisms/sideNav/SideNav';
import SideNavList from '../components/molecules/sideNavList/SideNavList';

const InnerLayout = ({ children }: { children: React.ReactNode }) => {
  const { themeColor } = useContext(ThemeColorContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = useCallback(() => {
    setMenuOpen(!menuOpen);
  }, [menuOpen]);
  const [searchOpen, setSearchOpen] = useState(false);
  const toggleSearch = useCallback(() => {
    setSearchOpen(!searchOpen);
  }, [searchOpen]);

  let bgColorSelect;
  switch (themeColor) {
    case 'light':
      bgColorSelect = 'bg-grayColor_lightTheme';
      break;
    case 'dark':
      bgColorSelect = 'bg-bgColor_darkTheme';
      break;
    default:
      bgColorSelect = 'bg-grayColor_lightTheme';
      break;
  }

  return (
    <body className={`h-full ${bgColorSelect}`}>
      <header className="fixed top-0 w-full">
        <Header menuOpen={menuOpen} toggleMenu={toggleMenu} toggleSearch={toggleSearch} />
      </header>
      <main className="pt-16">
        <div className="hidden md:block md:fixed top-16 ">
          <SideNav>
            <SideNavList />
          </SideNav>
        </div>
        {menuOpen && (
          <div className="block md:hidden fixed top-16 z-50">
            <SideNav>
              <SideNavList />
            </SideNav>
          </div>
        )}
        <div>{children}</div>
      </main>
      <footer></footer>
    </body>
  );
};

export default InnerLayout;
