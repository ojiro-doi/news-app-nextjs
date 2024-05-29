import React from 'react';
import ArticleList from '../organisms/articleList/ArticleList';
import Header from '../organisms/header/Header';
import SideNav from '../organisms/sidenav/Sidenav';
import Props from '../types';

const DefaultLayout = ({articles,keyword}:Props) => {
  return (
    <div>
      {/* <Header /> */}
      <SideNav/>
      <ArticleList articles={articles} keyword={keyword}/>
    </div>
  );
};

export default DefaultLayout;
