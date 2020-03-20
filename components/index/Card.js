import React from 'react';
import withStyles from 'react-jss';
import styles from './Card.style';
import { PATH } from  '../../core/constants';

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
  const path = `${process.env.MAIN_URL}${PATH[item.cat_id]}/${item.id}`;
  return (
    <div className={classes.productItem}>
      <a className={classes.alink} href={path}>
        <div className={classes.productImgWrapper}>
          <img className={classes.productImg}
            src={`${process.env.CDN_URL}${item.thumbnail}`}
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
    </div>
  );
};

export default withStyles(styles)(Card);
