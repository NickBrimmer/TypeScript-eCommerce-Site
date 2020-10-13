import React from 'react';
import { Directory } from '../../components/Directory/Directory';
import '../../styles/pages/Homepage.scss';

interface Homepage {

}

export const Homepage = () => {

  return (
    <div className="homepage">
      <Directory />
    </div>
  )
}