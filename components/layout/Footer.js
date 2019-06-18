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
        <p className="copyright">
          Copyright © 2019 SUZUKI 🚕 🚖 🚘  🌾 🌵 🌻 🦀 🍁 . All rights reserved.
        </p>
        <p>Địa chỉ: 440 Nguyễn Duy Trinh, phường Bình Trưng Đông, Quận 2, Ho Chi Minh City, Vietnam</p>
      </div>
    </footer>
  );
};

export default Footer;
