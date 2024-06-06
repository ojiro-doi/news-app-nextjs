'use client';
import '@/styles/globals.css';
import React, { useCallback, useContext, useState } from 'react';
import { ThemeColorContext } from '@/contexts/ThemeColorContext';
import Header from '@/app/components/organisms/header/Header';
import SideNav from '@/app/components/organisms/sideNav/SideNav';


const InnerLayout = ({ children }: { children: React.ReactNode }) => {
  const { themeColor } = useContext(ThemeColorContext);
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

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
        <Header isOpen={isOpen} toggleMenu={toggleMenu}/>
      </header>
      <main className="pt-16">
        <div className="hidden md:block md:fixed top-16 ">
          <SideNav />
        </div>
        {isOpen && (
          <div className="block md:hidden fixed top-16 z-50">
            <SideNav />
          </div>
        )}
        <div className="">{children}</div>
      </main>
      <footer></footer>
    </body>
  );
};

export default InnerLayout;
