import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TopMenu from '../layout/TopMenu';
// import Banner from './Banner';

const useStyles = makeStyles(theme => ({
  mb: {},
  header: {
    boxShadow: '0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12)',
    position: 'relative',
  },
  banner: {
    height: 450,
    '&$mb': {
      height: 320,
    }
  },

}));

const Header = props => {
  const classes = useStyles();
  return (
    <header className={classes.header}>
      <TopMenu isMobile={props.isMobile}/>
      <div className={`${classes.banner} ${props.isMobile ? classes.mb : ''}`}>
        page-banner here!
        {/* <Banner isMobile={props.isMobile}/> */}
      </div>
    </header>
  );
};

export default Header;
