"use client"
import React, { createContext, useState, ReactNode } from 'react';

type TopicTitleContextProps = {
  topicTitle: string;
  setTopicTitle: (title: string) => void;
}

export const TopicTitleContext = createContext<TopicTitleContextProps>({
  topicTitle: 'Default Topic',
  setTopicTitle: () => {},
});

export const TopicTitleProvider = ({ children }: { children: ReactNode }) => {
  const [topicTitle, setTopicTitle] = useState<string>('Default Topic');

  return (
    <TopicTitleContext.Provider value={{ topicTitle, setTopicTitle }}>
      {children}
    </TopicTitleContext.Provider>
  );
};