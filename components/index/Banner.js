import React from 'react';
import withStyles from 'react-jss';
import Link from 'next/link';

const bannerItem = {
  id: 'ertiga',
  thumb: 'ertiga/ertiga-thumb.jpg',
  thumbMb: 'ertiga/ertiga-thumb-mb.jpg',
  name: 'Ertiga 2019',
}
const path = `/xe-du-lich-suzuki/${bannerItem.id}`;

const Banner = ({classes, isMobile}) => {
  return (
    <div className={classes.banner}>
      <Link as={path} href={path}>
        <a className={classes.bannerLink}>
          <img
            src={`${process.env.CDN_URL}${isMobile ? bannerItem.thumbMb : bannerItem.thumb}`}
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
