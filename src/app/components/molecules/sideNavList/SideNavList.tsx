import React from 'react';
import SideNavButton from '../../atoms/sidenavButton/SideNavButton';


const SideNavTopics = [
  {
    path: "/",
    title: "Top stories",
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
      <ul>
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
