import React from 'react';
import dynamic from 'next/dynamic';
import HeaderDefault from './Header';
import FooterDefault from './Footer';
// import QuickCallButton from './QuickCallButton';
const QuickCallButton = dynamic(
  () => import('./QuickCallButton'),
  { ssr: false }
)

export default ({
  children,
  Header = HeaderDefault,
  Footer = FooterDefault,
  isMobile = false,
  data,
}) => {
  return (
    <React.Fragment>
      {Header && <Header isMobile={isMobile} data={data}/>}
      {children}
      {Footer && <Footer />}
      <QuickCallButton isMobile={isMobile}/>
    </React.Fragment>
  )
}
