import React from 'react';
import useStyles from './Card.style';
import { makeSlug } from '../../path-map';
import Link from 'next/link';


const Card = ({
  item = {
    id: 123,
    thumb: 'http://templatecs.com/demo/template/car/images/b-img-2.jpg',
    name: 'FORD MUSTANG 2016 TURBO',
    slogan: 'Thuần chất Sedan',
    price: 329,
  }
}) => {
  const classes = useStyles();
  return (
    <div className={classes.productItem}>
      <Link
        as={`/xe-oto/${makeSlug(item.name, item.id)}`}
        href={`/xe-oto/${makeSlug(item.name, item.id)}`}
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
              as={`/xe-oto/${makeSlug(item.name, item.id)}`}
              href={`/xe-oto/${makeSlug(item.name, item.id)}`}
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