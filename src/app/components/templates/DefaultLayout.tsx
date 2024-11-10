import React from 'react';
import Props from '../../types/types';
import SidePanel from '../organisms/sidePanel/SidePanel';
import Body from '../organisms/body/Body';

const DefaultLayout = ({ articles, localArticles, keywordArticles, keyword, weather }: Props) => {
  return (
    <div className="md:ml-72 top-16 md:flex">
      <div className=" p-4  md:w-3/4 md:pl-4 md:pr-2">
        <Body articles={articles} keywordArticles={keywordArticles} keyword={keyword} />
      </div>
      <div className=" px-4 md:w-1/4 md:py-4 md:pl-2 md:pr-4">
        <SidePanel weather={weather} localArticles={localArticles} />
      </div>
    </div>
  );
};

export default DefaultLayout;
