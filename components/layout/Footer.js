import React from 'react';

const Footer = props => {
  return (
    <footer style={{
      backgroundColor: 'var(--secondary)',
      color: '#c2dcea',
      padding: '15px 0',
      textAlign: 'center',
    }}>
      <div className="container">
        <small className="copyright">
          Copyright © 2019 xetainhosaigon.com. All rights reserved.
        </small>
        {/* <div>
          <small>474 lũy bán Bích, hoà thanh tân phú, hcm </small>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
