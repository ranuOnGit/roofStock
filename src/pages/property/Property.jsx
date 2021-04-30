import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
// @ts-ignore
import { Carousel } from '3d-react-carousal';
import './Property.css'
import Error from '../error/Error'

const Property = () => {
  let location = useLocation();
  const details = location.state.params;

  if ( !details.resources ) {
    return <Error />
  }

  return (
    <div className='property-div'>
      <h2 className='property-address'>
        {details.address.address1},{details.address.city},
        {details.address.state},{details.address.zip},{details.address.country}
      </h2>
      <div className='property-photo'>
        <Carousel
          slides={
            details.resources &&
            details.resources.photos.map((el) => {
              return <img key={el.id} src={el.url} alt='' />;
            })
          }
          autoplay={true}
          interval={3000}
        />
      </div>
    </div>
  );
};

export default Property;
