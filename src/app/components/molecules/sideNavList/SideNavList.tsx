import React from 'react';
import SideNavButton from '../../atoms/sideBarButton/SideBarButton';

const SideNavTopics = [
  {
    path: "/",
    title: "Headlines",
  },
  {
    path: "/topics/business",
    title: "Business",
  },
  {
    path: "/topics/technology",
    title: "Technology",
  },
  {
    path: "/topics/entertainment",
    title: "Entertainment",
  },
  {
    path: "/topics/sports",
    title: "Sports",
  },
];

const SideNavList = () => {
  return (
    <div>
      <ul className='py-4 px-4'>
        {SideNavTopics.map((sideNavTopic, index) => {
            return (
              <li key={index}>
                <SideNavButton {...sideNavTopic}/>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default SideNavList;
