import '@/styles/globals.css';
import React from 'react';
import { TopicTitleProvider } from '@/contexts/TopicTitleContext';
import { ThemeColorProvider } from '@/contexts/ThemeColorContext';
import InnerLayout from './InnerLayout';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className="h-full">
        <ThemeColorProvider>
          <TopicTitleProvider>
            <InnerLayout>{children}</InnerLayout>
          </TopicTitleProvider>
        </ThemeColorProvider>
    </html>
  );
}