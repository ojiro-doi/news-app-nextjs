import React from 'react';
import ArticleList from '../organisms/articleList/ArticleList';
import SideNav from '../organisms/sideNav/SideNav';
import Props from '../../types/types';
import Header from '../organisms/header/Header';

const DefaultLayout = ({ articles }: Props) => {
  return (
    <div className="">
      <header className='fixed top-0 w-full'>
        <Header />
      </header>
      <div className='flex bg-green-100 pt-16'>
        <div className="fixed top-16 ">
          <SideNav />
        </div>
        <div className="ml-72 container mx-auto">
          <div>
            <ArticleList articles={articles} />
          </div>
          <div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default DefaultLayout;
