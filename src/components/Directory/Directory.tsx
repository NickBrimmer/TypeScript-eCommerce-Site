import React from 'react';
import { MenuItem } from '../MenuItem/MenuItem';
import img1 from '../../assets/running.jpg'
import img2 from '../../assets/basketball.png'
import img3 from '../../assets/redSneaker.jpg'
import img4 from '../../assets/trainers.jpg'
import img5 from '../../assets/classics.jpg'

interface DirectoryProps {

}

const sections = [
  {
    title: 'TRAINERS',
    imageUrl: img4,
    id: 1,
    linkUrl: 'shop/hats'
  },
  {
    title: 'CLASSICS',
    imageUrl: img5,
    id: 2,
    linkUrl: 'shop/jackets'
  },
  {
    title: 'SNEAKERS',
    imageUrl: img3,
    id: 3,
    linkUrl: 'shop/sneakers'
  },
  {
    title: 'RUNNING',
    imageUrl: img1,
    size: 'large',
    id: 4,
    linkUrl: 'shop/womens'
  },
  {
    title: 'BASKETBALL',
    imageUrl: img2,
    size: 'large',
    id: 5,
    linkUrl: 'shop/mens'
  }
];

export const Directory: React.FC<DirectoryProps> = () => {
  return (
    <div className="directory-menu" >
      {sections.map(({ id, title, imageUrl, size }) => {
        return <MenuItem key={id} title={title} imgUrl={imageUrl} size={size} />
      })}
    </div>
  )
}