'use client';
import '@/styles/globals.css';
import React, { useContext } from 'react';
import { ThemeColorContext } from '@/contexts/ThemeColorContext';
import Header from '@/app/components/organisms/header/Header';
import SideNav from '@/app/components/organisms/sideNav/SideNav';


const InnerLayout = ({ children }: { children: React.ReactNode }) => {
  const { themeColor } = useContext(ThemeColorContext);

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
        <Header />
      </header>
      <main className="pt-16">
        <aside className="fixed top-16">
          <SideNav />
        </aside>
        <div className="">{children}</div>
      </main>
      <footer></footer>
    </body>
  );
};

export default InnerLayout;
