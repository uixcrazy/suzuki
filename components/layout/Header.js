import React from 'react';
import TopMenu from './TopMenu';

const Header = props => {
  return (
    <header>
      <TopMenu isMobile={props.isMobile}/>
    </header>
  );
};

export default Header;
