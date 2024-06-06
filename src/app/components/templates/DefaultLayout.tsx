import ArticleList from '../organisms/articleList/ArticleList';
import Props from '../../types/types';
import SidePanel from '../organisms/sidePanel/SidePanel';
import { useContext } from 'react';
import { TopicTitleContext } from '@/contexts/TopicTitleContext';

const DefaultLayout = ({ articles,localArticles,keywordArticle,keyword,weather }: Props) => {
  const { topicTitle } = useContext(TopicTitleContext);
  return (
    <>
        <div className="flex flex-1 ml-72 top-16 ">
          <div className="w-3/4">
            <ArticleList articles={articles} title={topicTitle}/>
            <ArticleList articles={keywordArticle} title={keyword}/>
          </div>
          <div className="w-1/4">
            <SidePanel weather={weather} localArticles={localArticles}/>
          </div>
        </div>
    </>
  );
};

export default DefaultLayout;
