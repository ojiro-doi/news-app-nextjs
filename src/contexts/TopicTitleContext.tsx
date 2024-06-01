"use client"
import React, { createContext, useState, ReactNode } from 'react';

type TopicTitleContextProps = {
  topicTitle: string;
  setTopicTitle: (title: string) => void;
}

export const TopicTitleContext = createContext<TopicTitleContextProps>({
  topicTitle: 'Headlines',
  setTopicTitle: () => {},
});

export const TopicTitleProvider = ({ children }: { children: ReactNode }) => {
  const [topicTitle, setTopicTitle] = useState<string>('Headlines');

  return (
    <TopicTitleContext.Provider value={{ topicTitle, setTopicTitle }}>
      {children}
    </TopicTitleContext.Provider>
  );
};