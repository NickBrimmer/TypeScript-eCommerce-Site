import React from 'react';
import { Directory } from '../../components/Directory/Directory';
import { TopBanner } from '../../components/TopBanner/TopBanner';

interface Homepage {

}

export const Homepage = () => {

  return (
    <div className="homepage">
      <TopBanner />
      <Directory />
    </div>
  )
}