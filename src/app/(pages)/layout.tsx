import '../../styles/globals.css';
import React from 'react';
import Header from '../components/organisms/header/Header';
import { TopicTitleProvider } from '../../contexts/TopicTitleContext';
import { ThemeColorProvider } from '@/contexts/ThemeColorContext';
import SideNav from '../components/organisms/sideNav/SideNav';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className="h-full">
      <ThemeColorProvider>
        <TopicTitleProvider>
          <body >
            <header className="fixed top-0 w-full">
              <Header />
            </header>
            <main className="pt-16">
              <aside className="fixed top-16 ">
                <SideNav />
              </aside>
              {children}
            </main>
            <footer></footer>
          </body>
        </TopicTitleProvider>
      </ThemeColorProvider>
    </html>
  );
}
