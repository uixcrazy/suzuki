import React from 'react';
import withStyles from 'react-jss';
import TopMenu from '../layout/TopMenu';
import Banner from './Banner';

const Header = props => {
  const classes = props.classes;
  return (
    <header className={classes.header}>
      <TopMenu isMobile={props.isMobile}/>
      <div className={`${classes.banner} ${props.isMobile ? classes.mb : ''}`}>
        <Banner isMobile={props.isMobile}/>
      </div>
    </header>
  );
};

const styles = {
  mb: {},
  header: {
    boxShadow: '0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12)',
    position: 'relative',
    // backgroundImage: 'url(static/images/banner/suzuki-ertiga-2019-2.jpg)',
    // backgroundImage: 'url(https://images.unsplash.com/photo-1558981852-426c6c22a060?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80)',
    // backgroundSize: 'cover',
    // backgroundRepeat: 'no-repeat',
    // backgroundPosition: 'center center',
  },
  banner: {
    height: 450,
    '&$mb': {
      height: 320,
    }
  },
};

export default withStyles(styles)(Header);
