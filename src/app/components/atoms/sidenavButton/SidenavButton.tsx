import Props from '@/app/types/types';
import Link from 'next/link';
import React, { useContext } from 'react';
import { TopicTitleContext } from '@/contexts/TopicTitleContext';
import { IconContext } from 'react-icons';
import { ThemeColorContext } from '@/contexts/ThemeColor';
import { AiOutlineGlobal } from 'react-icons/ai'; //headlines
import { IoBusiness } from 'react-icons/io5'; //business
import { MdOutlineScience } from 'react-icons/md'; //technology
import { BiSlideshow } from 'react-icons/bi'; //entertainment
import { MdDirectionsBike } from 'react-icons/md'; //sports

const SideNavButton = ({ path, title }: Props) => {
  const { topicTitle, setTopicTitle } = useContext(TopicTitleContext);
  const { themeColor } = useContext(ThemeColorContext);

  if (!title) {
    return null; // または適切な代替コンポーネントを返す
  }

  let iconSelect;
  switch (title) {
    case 'Headlines':
      iconSelect = <AiOutlineGlobal />;
      break;
    case 'Business':
      iconSelect = <IoBusiness />;
      break;
    case 'Technology':
      iconSelect = <MdOutlineScience />;
      break;
    case 'Entertainment':
      iconSelect = <BiSlideshow />;
      break;
    case 'Sports':
      iconSelect = <MdDirectionsBike />;
      break;
    default:
      iconSelect = <AiOutlineGlobal />;
      break;
  }

  // テーマカラーの設定
  let themeColorSelect;
  switch (themeColor) {
    case 'light':
      themeColorSelect = '#000000';
      break;
    case 'dark':
      themeColorSelect = '#ffffff';
      break;
    default:
      themeColorSelect = '#000000';
      break;
  }

  // ボタンカラーの設定
  let buttonColorSelect;
  switch (topicTitle) {
    case 'Headlines':
    case 'Business':
    case 'Technology':
    case 'Entertainment':
    case 'Sports':
      buttonColorSelect = 'bg-cyan-100';
      break;
    default:
      buttonColorSelect = 'bg-gray-100';
      break;
  }

  return (
    <button
      onClick={() => {
        setTopicTitle(title);
        console.log('setTopicTitle', topicTitle);
      }}
      className={`${buttonColorSelect} w-64 h-16 rounded-full hover:bg-gray-200`}
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
