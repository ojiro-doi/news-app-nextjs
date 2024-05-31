import Props from '@/app/types/types';
import Link from 'next/link';
import React, { useContext } from 'react';
import { TopicTitleContext } from '@/contexts/TopicTitleContext';
import { IconContext } from 'react-icons';
import { MdDirectionsBike } from 'react-icons/md';
import { ThemeColorContext } from '@/contexts/ThemeColor';

const SideNavButton = ({ path, title }: Props) => {
  const { topicTitle,setTopicTitle } = useContext(TopicTitleContext);
  const {themeColor} = useContext(ThemeColorContext);

  if (!title) {
    return null; // または適切な代替コンポーネントを返す
  }

  // アイコンの設定
  let iconSelect;
  switch (title) {
    case 'sports':
      iconSelect = <MdDirectionsBike />;
      break;
    default:
      iconSelect = <MdDirectionsBike />;
      break;
  }

  // テーマカラーの設定
  let themeColorSelect;
  switch (themeColor) {
    case 'light':
      themeColorSelect='#000000';
      break;
    case 'dark':
      themeColorSelect='#ffffff';
      break;
    default:
      themeColorSelect='#000000';
      break;
  }

  // ボタンカラーの設定
  let buttonColorSelect;
  switch (title) {
    case 'Sports':
      buttonColorSelect = 'bg-cyan-100';
      break;
    default:
      buttonColorSelect = 'bg-gray-200';
      break;
  }

  return (
    <button
      onClick={() => {
        setTopicTitle(title);
        console.log('setTopicTitle',topicTitle);
      }}
      className={`${buttonColorSelect} w-64 h-16 rounded-full `}
    >
      <div className="flex items-center ml-6">
        <IconContext.Provider value={{ color: themeColorSelect, size: '24' }}>
          <Link href={`${path}`}>{iconSelect}</Link>
        </IconContext.Provider>
        <h1 className="ml-4 text-base">{title}</h1>
      </div>
    </button>
  );
};

export default SideNavButton;
