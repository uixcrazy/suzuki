import React from 'react';
import Link from 'next/link';
import useStyles from './Card.style';
import { makePath } from '../../core/makePath';
import { CDN_URL } from  '../constants';

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
        as={`${path}${makePath(item.id)}`}
        href={`${path}${makePath(item.id)}`}
      >
        <a className={classes.productImgWrapper}>
          <img className={classes.productImg}
            src={`${CDN_URL}${item.thumb}`}
            alt={item.name}
            />
        </a>
      </Link>

      <div className={classes.productDesc}>
        <div className={classes.left}>
          <h3 className={classes.productName}>
            <Link
              as={`${path}${makePath(item.id)}`}
              href={`${path}${makePath(item.id)}`}
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