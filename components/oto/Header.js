import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Link from 'next/link';

import Container from '@material-ui/core/Container';
import TopMenu from '../layout/TopMenu';
import Logo from '../../static/images/logo.png';

const useStyles = makeStyles(theme => ({
  header: {
    boxShadow: '0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12)',
    height: 500,
    paddingTop: '50px',
    backgroundImage: 'url(static/images/banner/suzuki-ertiga-2019-2.jpg)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    position: 'relative',
  },
  toolbar: {
  },
  logoImage: {
    marginTop: 20,
  },
}));

const Header = props => {
  const classes = useStyles();
  return (
    <header className={classes.header}>
      <TopMenu isMobile={props.isMobile}/>
      <Container maxWidth="lg">
        <Toolbar className={classes.toolbar}>
          <Link href="/">
            <a>
              <img
                className={classes.logoImage}
                src={Logo}
                alt="suzuki nguyen duy trinh"
              />
            </a>
          </Link>
        </Toolbar>
        {/* {Nav && <Nav />} */}
      </Container>
    </header>
  );
};

export default Header;
