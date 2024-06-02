"use client"
import React, { createContext, useState, ReactNode } from 'react';

type ThemeColorContextProps = {
  themeColor: string;
  setThemeColor: (title: string) => void;
}

export const ThemeColorContext = createContext<ThemeColorContextProps>({
  themeColor: 'light',
  setThemeColor: () => {},
});

export const ThemeColorProvider = ({ children }: { children: ReactNode }) => {
  const [themeColor, setThemeColor] = useState<string>('light');

  return (
    <ThemeColorContext.Provider value={{ themeColor, setThemeColor }}>
      {children}
    </ThemeColorContext.Provider>
  );
};