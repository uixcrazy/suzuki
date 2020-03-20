import React from 'react';
import Card from './Card';

const Cards = ({items=[
  {
    id: 'swift',
    name: 'SWIFT',
    slogan: 'Nâng tầm phong cách',
    price: 549,
    cat_id: "xe-du-lich",
    thumbnail: 'swift/swift-thumb.png',
  },
],
}) => {
  return (
   <div className="row">
      {items.map((item, index) => {
        return (
          <div
            className="col-lg-4 col-md-6 col-sm-6 col-12"
            key={`${item.name}-${index}`}
          >
            <Card item={item} />
          </div>
        )
      })}
    </div>
  );
};

export default Cards;

export const CardsTwoCol = ({items=[
  {
    id: 'swift',
    name: 'SWIFT',
    slogan: 'Nâng tầm phong cách',
    price: 549,
    cat_id: "xe-du-lich",
    thumbnail: 'swift/swift-thumb.png',
  },
],
}) => {
  return (
   <div className="row">
      {items.map((item, index) => {
        return (
          <div
            className="col-lg-6 col-md-6 col-sm-6 col-12"
            key={`${item.name}-${index}`}
          >
            <Card item={item} />
          </div>
        )
      })}
    </div>
  );
};
