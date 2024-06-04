import Props from '@/app/types/types';
import Link from 'next/link';
import React, { useContext } from 'react';
import { TopicTitleContext } from '@/contexts/TopicTitleContext';
import { IconContext } from 'react-icons';
import { ThemeColorContext } from '@/contexts/ThemeColorContext';
import { AiOutlineGlobal } from 'react-icons/ai'; //headlines
import { IoBusiness } from 'react-icons/io5'; //business
import { MdOutlineScience } from 'react-icons/md'; //technology
import { BiSlideshow } from 'react-icons/bi'; //entertainment
import { MdDirectionsBike } from 'react-icons/md'; //sports

const SideNavButton = ({ path, title}: Props) => {
  const { topicTitle, setTopicTitle } = useContext(TopicTitleContext);
  const { themeColor } = useContext(ThemeColorContext);

  if (!title) {
    return null; // または適切な代替コンポーネントを返す
  }

  // アイコンの設定
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

  // 背景・hoverの色設定
  let bgColorSelect;
  let textColorSelect;
  let hoverColorSelect;
  switch (title) {
    case topicTitle:
      bgColorSelect = 'bg-sky-200';
      textColorSelect = 'text-white';
      hoverColorSelect = 'hover:bg-sky-200';
      break;
    default:
      bgColorSelect = 'bg-gray-100';
      hoverColorSelect = 'hover:bg-gray-200';
      break;
  }

  return (
    <IconContext.Provider value={{ color: themeColorSelect, size: '24' }}>
      <button className={`${bgColorSelect} w-64 h-16 rounded-full ${hoverColorSelect}`}>
        <Link
          href={`${path}`}
          onClick={() => {
            setTopicTitle(title);
            console.log('setTopicTitle', setTopicTitle);
          }}
        >
          <div className="flex items-center ml-6">
            {iconSelect}
            <h1 className="ml-4 text-base">{title}</h1>
          </div>
        </Link>
      </button>
    </IconContext.Provider>
  );
};

export default SideNavButton;
