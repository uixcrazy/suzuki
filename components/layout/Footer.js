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
        <div>
          <small>Suzuki Đại Việt - 440 Nguyễn Duy Trinh, phường Bình Trưng Đông, Quận 2, Ho Chi Minh City, Vietnam</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
