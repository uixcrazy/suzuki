import React from 'react';
import PropTypes from 'prop-types';

import Card from './Card';

const Cards = ({items=[
  {
    thumb: 'http://templatecs.com/demo/template/car/images/b-img-2.jpg',
    name: 'FORD MUSTANG 2016 TURBO',
    slogan: 'Thuần chất Sedan',
    href: 'https://unsplash.com/developers',
    price: 329,
  }
]
}) => {
  return (
   <div className="row">
      {items.map((item, index) => {
        return (
          <div
            className="col-lg-4 col-md-6 col-sm-6 col-12"
            key={`${item.name}-${index}`}
          >
            <Card item={item}/>
          </div>
        )
      })}
    </div>
  );
};

Cards.propTypes = {

};

export default Cards;
