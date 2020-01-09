import Head from 'next/head';
import React from 'react';
import HeaderDefault from './Header';
import FooterDefault from './Footer';
import QuickCallButton from './QuickCallButton'

import '../../core/css/style.scss';

export default ({
  children,
  title = 'This is the default title',
  Header = HeaderDefault,
  Footer = FooterDefault,
  isMobile = false,
  data,
}) => {
  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
      </Head>
      {Header && <Header isMobile={isMobile} data={data}/>}
      {children}
      {Footer && <Footer />}
      <QuickCallButton />
    </React.Fragment>
  )
}
