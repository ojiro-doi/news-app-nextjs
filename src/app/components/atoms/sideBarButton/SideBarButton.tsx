import Props from '@/app/types/types';
import Link from 'next/link';
import React, { useContext} from 'react';
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
  let bgColorSelect;
  let textColorSelect;
  let hoverColorSelect;
  switch (themeColor) {
    case 'light':
      switch (title) {
        case topicTitle:
          bgColorSelect = 'bg-blueColor_lightTheme';
          textColorSelect = 'text-black';
          hoverColorSelect = 'hover:bg-blueColor_lightTheme';
          break;
        default:
          bgColorSelect = 'bg-grayColor_lightTheme';
          textColorSelect = 'text-textColor_lightTheme';
          hoverColorSelect = 'hover:bg-gray-200';
          break;
      }
      break;
    case 'dark':
      switch (title) {
        case topicTitle:
          bgColorSelect = 'bg-blueColor_darkTheme';
          textColorSelect = 'text-skyColor_darkTheme';
          hoverColorSelect = 'hover:bg-neutral-700';
          break;
        default:
          bgColorSelect = 'bg-grayColor_darkTheme';
          textColorSelect = 'text-textColor_darkTheme';
          hoverColorSelect = 'hover:bg-neutral-700';
          break;
      }
      break;
    default:
      bgColorSelect = 'bg-grayColor_lightTheme';
      textColorSelect = 'text-textColor_lightTheme';
      hoverColorSelect = 'hover:bg-gray-200';
      break;
  }

  return (
    <IconContext.Provider value={{ color: textColorSelect, size: '24' }}>
      <button onClick={() => {
            setTopicTitle(title);
            console.log('setTopicTitle', setTopicTitle);
          }} className={`${bgColorSelect} w-64 h-16 rounded-full ${hoverColorSelect} ${textColorSelect}`}>
        <Link
          href={`${path}`}
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
