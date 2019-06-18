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
          Copyright © 2019 SUZUKI Nguyen Duy Trinh 🚕 🚖 🚘  🌾 🌵 🌻 🦀 🍁 . All rights reserved.
        </small>
      </div>
    </footer>
  );
};

export default Footer;
