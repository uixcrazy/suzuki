import React from 'react';
import withStyles from 'react-jss';
import TopMenu from '../layout/TopMenu';

const path = "/xe-du-lich-suzuki/";
const bannerItem = {
  id: 'ertiga',
  thumb: 'ertiga/banner/ertiga-thumb.jpg',
  thumbMb: 'ertiga/banner/ertiga-thumb-mb.jpg',
  name: 'Ertiga 2020',
}

const Header = props => {
  const classes = props.classes;
  return (
    <header className={classes.header}>
      <TopMenu isMobile={props.isMobile}/>
      <div className={`${classes.banner} ${props.isMobile ? classes.mb : ''}`}>
        <div className={classes.bannerCt}>
          <a className={classes.bannerLink}
            href={`${process.env.MAIN_URL}${path}${bannerItem.id}`}>
            <img
              src={`${process.env.CDN_URL}${props.isMobile ? bannerItem.thumbMb : bannerItem.thumb}`}
              alt={bannerItem.name}
            />
          </a>
        </div>
      </div>
    </header>
  );
};

const styles = {
  mb: {},
  header: {
    boxShadow: '0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12)',
    position: 'relative',
  },
  banner: {
  },
  bannerCt: {
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

export default withStyles(styles)(Header);
