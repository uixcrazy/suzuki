import React from 'react';
import Link from 'next/link';
import withStyles from 'react-jss';
import styles from './Card.style';
import { CDN_URL, PATH, MAIN_URL } from  '../../core/constants';

const Card = ({
  classes,
  item = {
    id: 'swift',
    name: 'SWIFT',
    slogan: 'Nâng tầm phong cách',
    price: 549,
    cat_id: "xe-du-lich",
    thumbnail: 'swift/swift-thumb.png',
  },
}) => {
  // const pathFull = `${MAIN_URL}${PATH[item.cat_id]}/${item.id}`;
  // prefetch={false}
  const path = `${PATH[item.cat_id]}/${item.id}`;
  return (
    <div className={classes.productItem}>
      <Link as={path} href={path} >
        <a className={classes.alink}>
          <div className={classes.productImgWrapper}>
            <img className={classes.productImg}
              src={`${CDN_URL}${item.thumbnail}`}
              alt={item.name}
            />
          </div>
          <div className={classes.productDesc}>
            <div className={classes.left}>
              <h3 className={classes.productName}>
                {item.name}
              </h3>
              <p className={classes.productSlogan}>{item.slogan}</p>
            </div>
            <div className={classes.productPrice}>
              {item.price} <small>{typeof item.price === 'number' ? 'TRIỆU' : ''}</small>
            </div>
          </div>
        </a>
      </Link>
  </div>
  );
};

export default withStyles(styles)(Card);
