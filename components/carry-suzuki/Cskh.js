import React from 'react';
import withStyles from 'react-jss';
import { HOTLINE, MAIL } from '../../core/constants';

const KhuVucGiaoHang = ({classes}) => {
  return (
    <div className={classes.khuvucgiaohang}>
      <p className={classes.h3}>GIAO XE TẬN NHÀ, HỖ TRỢ ĐĂNG KIỂM CÁC KHU VỰC SAU:</p>
<p><span className={classes.emc}>— Nam bộ:</span> TP. Hồ Chí Minh, Bình Dương, Bình Phước, Bà Rịa — Vũng Tàu, Đồng Nai, Tây Ninh. Và các tỉnh miền Tây: Cần Thơ, Bến Tre, An Giang, Hậu Giang, Tiền Giang, Cà Mau, Đồng Tháp, Long An, Vĩnh Long, Sóc Trăng, Trà Vinh, Bạc Liêu, Kiên Giang…</p>
<p><span className={classes.emc}>— Miền Trung:</span> Bình Thuận, Ninh Thuận, Quảng Ngãi, Khánh Hòa…</p>
<p><span className={classes.emc}>— Tây Nguyên:</span> Gia Lai, KonTum, Đắc Lắc, Lâm Đồng, Đắc Nông.</p>
      <img class="article-about-img-fluid" src="https://cdn.uixcrazy.now.sh/static/dichvu/kv_giaoxetannha__xetainhosaigon.jpg" alt="suzuki carry pro"></img>
    </div>
  );
};

const Cskh = ({classes, isMobile}) => {
  return (
    <div className={classes.cskh}>
      <div className="container">
        <p className={classes.h2}>Chăm sóc khách hàng</p>
        <KhuVucGiaoHang classes={classes} />
        <p className={classes.lienhe}>Liên hệ sđt: <a href={`tel:${HOTLINE}`}>{HOTLINE}</a> để nhận báo giá hoặc tư vấn cụ thể hơn</p>
      </div>
    </div>
  );
};

export default withStyles({
  cskh: {
    paddingTop: 25,
  },
  khuvucgiaohang: {
    '& > p': {
      padding: '5px 0',
      color: '#555',
    }
  },
  h2: {
    display: 'block',
    fontSize: '24px',
    lineHeight: '50px',
    color: '#777',
    fontWeight: 'bold',
  },
  h3: {
    display: 'block',
    fontSize: '18px',
    color: '#777',
    fontWeight: 'bold',
  },
  emc: {
    color: '#999',
  },
  lienhe: {
    marginTop: 10,
    textAlign: 'right',
    paddingBottom: 5
  }
})(Cskh);
