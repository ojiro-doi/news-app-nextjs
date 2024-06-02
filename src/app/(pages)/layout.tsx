import '../../styles/globals.css';
import React from 'react';
import Header from '../components/organisms/header/Header';
import { TopicTitleProvider } from '../../contexts/TopicTitleContext';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className='h-full'>
      <body className='bg-slate-400'>
        <TopicTitleProvider>
          {/* ページ固有のコンテンツ */}
          {children}
        </TopicTitleProvider>
      </body>
    </html>
  );
}
