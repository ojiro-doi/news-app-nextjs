import React from 'react';
import ArticleList from '../organisms/articleList/ArticleList';
import Header from '../organisms/header/Header';
import SideNav from '../organisms/sidenav/SideNav';
import Props from '../../types/types';

const DefaultLayout = ({articles}:Props) => {
  return (
    <div>
      <Header />
      <SideNav/>
      <ArticleList articles={articles}/>
    </div>
  );
};

export default DefaultLayout;
