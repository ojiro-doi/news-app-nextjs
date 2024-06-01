"use client"
import React, { useContext } from 'react'
import { TopicTitleContext } from '@/contexts/TopicTitleContext';

const Topics = () => {
  const { topicTitle, setTopicTitle } = useContext(TopicTitleContext);
  return (
    <div>{topicTitle}</div>
  )
}

export default Topics