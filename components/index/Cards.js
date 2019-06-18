import React from 'react';
import PropTypes from 'prop-types';

import Card from './Card';

const Cards = ({items=[
  {
    thumb: 'http://lvtd.96.lt/swift/swift-thumb.png',
    id: 'swift',
    name: 'SWIFT',
    slogan: 'Nâng tầm phong cách',
    price: 549,
    priceType: 'exact', // exact | min | text
  },
],
path="/xe-du-lich/suzuki/"
}) => {
  return (
   <div className="row">
      {items.map((item, index) => {
        return (
          <div
            className="col-lg-4 col-md-6 col-sm-6 col-12"
            key={`${item.name}-${index}`}
          >
            <Card item={item} path={path}/>
          </div>
        )
      })}
    </div>
  );
};

Cards.propTypes = {

};

export default Cards;
