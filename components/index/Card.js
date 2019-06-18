import React from 'react';
import useStyles from './Card.style';
import { makeSlug } from '../../path-map';
import Link from 'next/link';

const Card = ({
  item = {
    thumb: 'http://lvtd.96.lt/swift/swift-thumb.png',
    id: 'swift',
    name: 'SWIFT',
    slogan: 'Nâng tầm phong cách',
    price: 549,
    priceType: 'exact', // exact | min | text
  },
  path = "/xe-du-lich/suzuki/"
}) => {
  const classes = useStyles();
  return (
    <div className={classes.productItem}>
      <Link
        as={`${path}${makeSlug(item.id)}`}
        href={`${path}${makeSlug(item.id)}`}
      >
        <a className={classes.productImgWrapper}>
          <img className={classes.productImg}
            src={item.thumb}
            alt={item.name}
            />
        </a>
      </Link>

      <div className={classes.productDesc}>
        <div className={classes.left}>
          <h3 className={classes.productName}>
            <Link
              as={`${path}${makeSlug(item.id)}`}
              href={`${path}${makeSlug(item.id)}`}
            >
              <a>{item.name}</a>
            </Link>
          </h3>
          <p className={classes.productSlogan}>{item.slogan}</p>
        </div>
        <div className={classes.productPrice}>{item.price} TRIỆU</div>
      </div>
  </div>
  );
};
export default Card;