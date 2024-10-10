import { ThemeColorContext } from '@/contexts/ThemeColorContext';
import React, { useContext } from 'react';
import { IconContext } from 'react-icons';
import { IoSearch } from 'react-icons/io5';

type IconProps = {
  onClick: () => void;
  keyword: string;
  setKeyword: (keyword: string) => void;
  searchOpen: boolean;
  toggleSearch: () => void;
};

const SearchButton = ({ onClick, keyword, setKeyword, searchOpen, toggleSearch }: IconProps) => {
  const { themeColor } = useContext(ThemeColorContext);

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log('onChangeSearch', e.target.value);
    setKeyword(e.target.value);
  };

  const clickEnterKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    //IMEの変換中はEnterキーで動作しない
    if (e.key === 'Enter' && !e.nativeEvent.isComposing) {
      onClick();
    }
  };

  let bgColorSelect;
  let textColorSelect;
  let themeColorSelect;
  switch (themeColor) {
    case 'light':
      bgColorSelect = 'bg-white';
      textColorSelect = 'text-black';
      themeColorSelect = '#454746';
      break;
    case 'dark':
      bgColorSelect = 'bg-bgColor_darkTheme';
      textColorSelect = 'text-white';
      themeColorSelect = 'C4C7C5';
      break;
    default:
      bgColorSelect = 'bg-white';
      textColorSelect = 'text-black';
      themeColorSelect = '#454746';
      break;
  }

  return (
    <div className="flex">
      {/* <button onClick={toggleSearch} className="block md:hidden mx-2">
        <IconContext.Provider value={{ color: themeColorSelect, size: '24' }}>
          <IoSearch data-testid="icon" />
        </IconContext.Provider>
      </button> */}
      <input
        type="input"
        value={keyword}
        placeholder={'Search'}
        onChange={onChangeSearch}
        onKeyDown={clickEnterKey}
        className={`container md:block border rounded p-1 mx-2 ${bgColorSelect} ${textColorSelect}`}
      />
      {/* {searchOpen && (
        <input
          type="input"
          value={keyword}
          placeholder={'Search'}
          onChange={onChangeSearch}
          className="block md:hidden border rounded p-1"
        />
      )} */}
      <button onClick={onClick} className="hidden md:block mx-2" aria-label="検索">
        <IconContext.Provider value={{ color: themeColorSelect, size: '24' }}>
          <IoSearch data-testid="icon" />
        </IconContext.Provider>
      </button>
    </div>
  );
};

export default SearchButton;
