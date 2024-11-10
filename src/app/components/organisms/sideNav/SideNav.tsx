import React, { useContext } from 'react';
import { ThemeColorContext } from '@/contexts/ThemeColorContext';

const SideNav = ({ children }: { children: React.ReactNode }) => {
  const { themeColor } = useContext(ThemeColorContext);

  // テーマカラーの設定
  let bgColorSelect;
  switch (themeColor) {
    case 'light':
      bgColorSelect = 'grayColor_lightTheme';
      break;
    case 'dark':
      bgColorSelect = 'grayColor_darkTheme';
      break;
    default:
      bgColorSelect = 'grayColor_lightTheme';
      break;
  }

  return (
    <div className={`bg-${bgColorSelect} w-72 h-screen shadow-xl`} data-testid="sideNav">
      {children}
    </div>
  );
};

export default SideNav;
