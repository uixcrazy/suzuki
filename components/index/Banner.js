import React from 'react';
import withStyles from 'react-jss';
import Link from 'next/link';
import { CDN_URL } from  '../../core/constants';

const path = "/xe-du-lich-suzuki/";
const bannerItem = {
  id: 'ertiga',
  thumb: 'ertiga/ertiga-thumb.jpg',
  thumbMb: 'ertiga/ertiga-thumb-mb.jpg',
  name: 'Ertiga 2019',
}

const Banner = ({classes, isMobile}) => {
  return (
    <div className={classes.banner}>
      <Link as={`${path}${bannerItem.id}`} href={`${path}${bannerItem.id}`}>
        <a className={classes.bannerLink}>
          <img
            src={`${CDN_URL}${isMobile ? bannerItem.thumbMb : bannerItem.thumb}`}
            alt={bannerItem.name}
          />
        </a>
      </Link>
    </div>
  );
};

const styles = {
  banner: {
    height: '100%',
    overflow: 'hidden',
  },
  bannerLink: {
    display: 'block',
    height: '100%',
    position: 'relative',
    '& img': {
      display: 'block',
      width: '100vw',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'center',
    }
  }
};

export default withStyles(styles)(Banner);
