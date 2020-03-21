import React from 'react';
import dynamic from 'next/dynamic';
import HeaderDefault from './Header';
import FooterDefault from './Footer';
const QuickCallButton = dynamic(
  () => import('./QuickCallButton'),
  { ssr: false }
);
const RequestBooking = dynamic(
  () => import('./RequestBooking'),
  { ssr: false }
);

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
      {Footer && <Footer isMobile={isMobile}/>}
      <QuickCallButton isMobile={isMobile}/>
      <RequestBooking isMobile={isMobile}/>
    </React.Fragment>
  )
}
