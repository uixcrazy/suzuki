import React from 'react';
import Link from 'next/link';
import withStyles from 'react-jss';
import styles from './Card.style';
import { makePath } from '../../core/makePath';
import { CDN_URL } from  '../constants';

const Card = ({
  classes,
  item = {
    id: 'swift',
    name: 'SWIFT',
    slogan: 'Nâng tầm phong cách',
    price: 549,
    thumbnail: 'swift/swift-thumb.png',
  },
  path = "/xe-du-lich-suzuki/",
}) => {
  return (
    <div className={classes.productItem}>
      <Link
        as={`${path}${makePath(item.id)}`}
        href={`${path}${makePath(item.id)}`}
      >
        <a className={classes.productImgWrapper}>
          <img className={classes.productImg}
            src={`${CDN_URL}${item.thumbnail}`}
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

export default withStyles(styles)(Card);
