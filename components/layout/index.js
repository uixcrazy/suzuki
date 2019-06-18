import Head from 'next/head';
import React from 'react';

import HeaderDefault from './Header';
import FooterDefault from './Footer';

import '../../core/css/style.scss';

export default ({
  children,
  title = 'This is the default title',
  Header = HeaderDefault,
  Footer = FooterDefault,
}) => {
  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
      </Head>
      {Header && <Header />}
      {children}
      {Footer && <Footer />}
    </React.Fragment>
  )
}
