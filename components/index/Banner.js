import React from 'react';
import withStyles from 'react-jss';

const bannerItem = {
  id: 'carry_pro',
  thumb: 'khuyenmai/carry_pro.jpg',
  thumbMb: 'khuyenmai/carry_pro_mb.jpg',
  name: 'Suzuki Carry Pro 2020',
}
const path = `/xe-tai-nho-suzuki/carry-pro`;

const Banner = ({classes, isMobile}) => {
  return (
    <div className={classes.banner}>
      <a className={classes.bannerLink} href={`${process.env.MAIN_URL}${path}`}>
        <img
          src={`${process.env.CDN_URL}${isMobile ? bannerItem.thumbMb : bannerItem.thumb}`}
          alt={bannerItem.name}
        />
      </a>
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
