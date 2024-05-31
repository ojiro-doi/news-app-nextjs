import Props from '@/app/types/types';
import Link from 'next/link';
import React, { useContext } from 'react';
import { TopicTitleContext } from '@/contexts/TopicTitleContext';
import { IconContext } from 'react-icons';
import { MdDirectionsBike } from 'react-icons/md';

const SideNavButton = ({ path, title }: Props) => {
  const { topicTitle,setTopicTitle } = useContext(TopicTitleContext);

  if (!title) {
    return null; // または適切な代替コンポーネントを返す
  }

  let iconSelect;
  switch (title) {
    case 'sports':
      iconSelect = <MdDirectionsBike />;
      break;
    default:
      iconSelect = <MdDirectionsBike />;
      break;
  }

  return (
    <button
      onClick={() => {
        setTopicTitle(title);
        console.log('setTopicTitle',topicTitle);
      }}
      className="bg-blue-300 w-64 h-16 rounded-full "
    >
      <div className="flex items-center ml-6">
        <IconContext.Provider value={{ color: 'ffffff', size: '24' }}>
          <Link href={`${path}`}>{iconSelect}</Link>
        </IconContext.Provider>
        <h1 className="ml-4 text-base">{title}</h1>
      </div>
    </button>
  );
};

export default SideNavButton;
