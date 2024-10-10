import React, { useContext, useState } from 'react';
import ThemeButton from '../../atoms/themeButton/ThemeButton';
import { ThemeColorContext } from '@/contexts/ThemeColorContext';
import { useRouter } from 'next/navigation';
import { TopicTitleContext } from '@/contexts/TopicTitleContext';
import SearchButton from '../../atoms/searchButton/SearchButton';
import Props from '@/app/types/types';

const HeaderNav = ({ searchOpen, toggleSearch }: Props) => {
  const [keyword, setKeyword] = useState('');
  const { setTopicTitle } = useContext(TopicTitleContext);
  const { themeColor, setThemeColor } = useContext(ThemeColorContext);
  const router = useRouter();

  const searchClick = () => {
    if (keyword === '') return;
    router.push(`/search/${keyword}`);
    setTopicTitle('');
    // console.log('search clicked');
  };

  const themeClick = () => {
    setThemeColor(themeColor === 'light' ? 'dark' : 'light');
    // console.log('theme clicked');
  };

  return (
    <div className="flex">
      <SearchButton
        onClick={searchClick}
        keyword={keyword}
        setKeyword={setKeyword}
        searchOpen={searchOpen || false}
        toggleSearch={toggleSearch || (() => {})}
      />
      <ThemeButton onClick={themeClick} />
    </div>
  );
};

export default HeaderNav;
