import React, { useContext, useState } from 'react';
import IconButton from '../../atoms/iconButton/IconButton';
import { ThemeColorContext } from '@/contexts/ThemeColorContext';
import { useRouter } from 'next/navigation';
import { TopicTitleContext } from '@/contexts/TopicTitleContext';
import SearchButton from '../../atoms/searchButton/SearchButton';

const HeaderNav = () => {
  const [keyword, setKeyword] = useState('');
  const {setTopicTitle} = useContext(TopicTitleContext);
  const {themeColor,setThemeColor} = useContext(ThemeColorContext);
  const router = useRouter();

  const searchClick = () => {
    router.push(`/search/${keyword}`);
    setTopicTitle('');
    console.log('search clicked');
  }

  const themeClick = () => {
    setThemeColor(themeColor === 'light' ? 'dark' : 'light');
    console.log('theme clicked');
  }

  return (
    <div className='flex'>
      <SearchButton
        onClick={searchClick}
        keyword={keyword}
        setKeyword={setKeyword}
      />
      <IconButton
        onClick={themeClick}
      />
    </div>
  );
};

export default HeaderNav;
