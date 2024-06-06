import { ThemeColorContext } from '@/contexts/ThemeColorContext';
import React, { useContext } from 'react';
import { IconContext } from 'react-icons';
import { FaSearch } from 'react-icons/fa'; //Searchアイコン

type IconProps = {
  onClick: () => void;
  keyword: string;
  setKeyword: (keyword: string) => void
};

const SearchButton = ({ onClick, keyword, setKeyword }: IconProps) => {
  const { themeColor } = useContext(ThemeColorContext);

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  let themeColorSelect;
  switch (themeColor) {
    case 'light':
      themeColorSelect = '#454746';
      break;
    case 'dark':
      themeColorSelect = 'C4C7C5';
      break;
    default:
      themeColorSelect = '#454746';
      break;
  }

  return (
    <div className="flex">
      <input
        type="input"
        value={keyword}
        placeholder={"Search"}
        onChange={onChangeSearch}
        className="border rounded p-1"
      />
      <button onClick={onClick} className="mx-2">
        <IconContext.Provider value={{ color: themeColorSelect, size: '24' }}>
          <FaSearch data-testid="icon" />
        </IconContext.Provider>
      </button>
    </div>
  );
};

export default SearchButton;
