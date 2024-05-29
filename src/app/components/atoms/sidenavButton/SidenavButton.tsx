import Link from 'next/link';
import React from 'react';
import { IconContext } from 'react-icons';
import { MdDirectionsBike } from 'react-icons/md';

type SideNavProps = {
  /**
   * ボタンの選択状態
   */
  onClick: () => void;
  icon: string;
  themeColor: 'light' | 'dark';
  topic: 'sports';
};

const SideNavButton = ({ onClick, icon, themeColor, topic }: SideNavProps) => {
  let iconSelect;
  switch (icon) {
    case 'sports':
      iconSelect = <MdDirectionsBike />;
      break;
    default:
      iconSelect = <MdDirectionsBike />;
      break;
  }

  return (
    <button onClick={onClick} className="bg-blue-300 w-64 h-16 rounded-full ">
      <div className="flex items-center ml-6">
        <IconContext.Provider value={{ color: themeColor, size: '24' }}>
          <Link href="/">{iconSelect}</Link>
        </IconContext.Provider>
        <h1 className="ml-4 text-base">{topic}</h1>
      </div>
    </button>
  );
};

export default SideNavButton;
