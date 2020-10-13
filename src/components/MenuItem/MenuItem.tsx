import React from 'react';

import '../../styles/components/MenuItem.scss';

interface MenuItemProps {
  title: string,
  imgUrl: string,
  size: string | undefined,
}

export const MenuItem: React.FC<MenuItemProps> = ({ title, imgUrl, size }) => {
  return (
    <div style={{ backgroundImage: `url(${imgUrl})` }} className={`${size} menu-item`}>
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  )
};
