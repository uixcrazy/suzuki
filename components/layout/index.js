import Head from 'next/head';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import HeaderDefault from './Header';
import FooterDefault from './Footer';

import '../../core/css/style.scss';

const useStyles = makeStyles(theme => ({
  main: {
    paddingTop: 35,
  },
  footer: {
    backgroundColor: 'var(--secondary)',
    color: '#c2dcea',
    padding: '15px 0',
    textAlign: 'center',
  },
}));

export default ({
  children,
  title = 'This is the default title',
  Header = HeaderDefault,
  Footer = FooterDefault,
  isMobile = false,
}) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
      </Head>
      {Header && <Header isMobile={isMobile}/>}

      <main className={classes.main}>
        <Container maxWidth="lg">
          {children}
        </Container>
      </main>

      <footer className={classes.footer}>
        <Container maxWidth="lg">
          {Footer && <Footer />}
        </Container>
      </footer>
    </React.Fragment>
  )
}
