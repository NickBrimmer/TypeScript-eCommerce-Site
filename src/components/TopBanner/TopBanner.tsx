import React from 'react';
import banner from '../../assets/topBanner.png'

export const TopBanner = () => {
  return (
    <div className="topbanner" >
      <img alt="site banner" src={banner} />
      <p className="small-ban-text">welcome to your next</p>
      <p className="big-ban-text" >revolution</p>
    </div>
  )
}
