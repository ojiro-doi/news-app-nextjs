import ArticleList from '../organisms/articleList/ArticleList';
import SideNav from '../organisms/sideNav/SideNav';
import Props from '../../types/types';
import SidePanel from '../organisms/sidePanel/SidePanel';
import { useContext } from 'react';
import { TopicTitleContext } from '@/contexts/TopicTitleContext';

const DefaultLayout = ({ articles,weather,localArticles }: Props) => {
  const { topicTitle } = useContext(TopicTitleContext);
  return (
    <>
        <div className="flex flex-1 ml-72 top-16 ">
          <div className="w-3/4">
            <h2 className="text-black font-bold text-lg">{(topicTitle ?? 'headlines').charAt(0).toUpperCase() + (topicTitle ?? 'headlines').slice(1)}</h2>
            <ArticleList articles={articles} />
          </div>
          <div className="w-1/4">
            <SidePanel weather={weather} localArticles={localArticles}/>
          </div>
        </div>
    </>
  );
};

export default DefaultLayout;
