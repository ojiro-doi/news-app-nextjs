import React from 'react';
import ArticleList from '../organisms/articleList/ArticleList';
import Header from '../organisms/header/Header';
import Sidenav from '../organisms/sidenav/Sidenav';
import Props from '../types';

const DefaultLayout = ({articles,keyword}:Props) => {
  return (
    <div>
      {/* <Header /> */}
      <Sidenav/>
      <ArticleList articles={articles} keyword={keyword}/>
    </div>
  );
};

export default DefaultLayout;
