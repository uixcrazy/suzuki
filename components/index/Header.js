import React from 'react';
import withStyles from 'react-jss';
import TopMenu from '../layout/TopMenu';
import Banner from './Banner';

const Header = props => {
  const classes = props.classes;
  return (
    <header className={classes.header}>
      <TopMenu isMobile={props.isMobile}/>
      <div className={classes.banner}>
        <Banner isMobile={props.isMobile}/>
      </div>
    </header>
  );
};

const styles = {
  header: {
    boxShadow: '0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12)',
    position: 'relative',
  },
};

export default withStyles(styles)(Header);
