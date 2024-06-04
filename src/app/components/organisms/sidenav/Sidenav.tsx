"use client";
import React, { useContext } from 'react'
import SideVavList from '../../molecules/sideNavList/SideNavList'
import { ThemeColorContext } from '@/contexts/ThemeColorContext';

const SideNav = () => {
  const { themeColor } = useContext(ThemeColorContext);
  
  // テーマカラーの設定
  let bgColorSelect;
  switch (themeColor) {
    case 'light':
      bgColorSelect='grayColor_lightTheme';
      break;
    case 'dark':
      bgColorSelect='grayColor_darkTheme';
      break;
    default:
      bgColorSelect='grayColor_lightTheme';
      break;
  }
  
  return (
    <div className={`bg-${bgColorSelect} w-72 h-screen shadow-xl`} data-testid='sideNav'>
      <SideVavList />
    </div>
  )
}

export default SideNav