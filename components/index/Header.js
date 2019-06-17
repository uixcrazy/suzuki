import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Link from 'next/link';

import Container from '@material-ui/core/Container';

import TopMenu from '../layout/TopMenu';
import Banner from './Banner';
import Logo from '../../static/images/logo.png';

const useStyles = makeStyles(theme => ({
  mb: {},
  header: {
    boxShadow: '0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12)',
    height: 500,
    paddingTop: '50px',
    position: 'relative',
    // backgroundImage: 'url(static/images/banner/suzuki-ertiga-2019-2.jpg)',
    // backgroundImage: 'url(https://images.unsplash.com/photo-1558981852-426c6c22a060?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80)',
    // backgroundSize: 'cover',
    // backgroundRepeat: 'no-repeat',
    // backgroundPosition: 'center center',
    '&$mb': {
      height: 360,
    }
  },
  banner: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  logoImage: {
    marginTop: 20,
  },
}));

const Header = props => {
  const classes = useStyles();
  return (
    <header className={`${classes.header} ${props.isMobile ? classes.mb : ''}`}>
      <div className={classes.banner}>
        <Banner isMobile={props.isMobile}/>
      </div>
      <TopMenu isMobile={props.isMobile}/>
      <Container maxWidth="lg">
        {/* <Toolbar className={classes.toolbar}> */}
        <Link href="/">
          <a>
            <img
              className={classes.logoImage}
              src={Logo}
              alt="suzuki nguyen duy trinh"
            />
          </a>
        </Link>
        {/* </Toolbar> */}
        {/* {Nav && <Nav />} */}
      </Container>
    </header>
  );
};

export default Header;
