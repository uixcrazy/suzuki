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
          Copyright © 2020 xetainhosaigon.com. All rights reserved.
        </small>
        <small>
          <p>Cam kết <strong>GIÁ</strong> Suzuki các loại <strong>tốt nhất Sài Gòn</strong>. Chế độ hậu mãi chăm sóc khách hàng UY TÍN.</p>
          <p>Xem xe trực tiếp và thử lái tại Đại lý chính hãng</p>
        </small>
      </div>
    </footer>
  );
};

export default Footer;
