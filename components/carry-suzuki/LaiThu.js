import React from 'react';
import withStyles from 'react-jss';
import RequestInfo from '../ContactForm/RequestInfo';

const LaiThu = ({classes}) => {
  return (
    <div className={classes.laiThu}>
        <p className={classes.title}>ĐĂNG KÝ LÁI THỬ</p>
        <RequestInfo />
        {/* <p className={classes.lienhe}>Liên hệ sđt: <a href={`tel:${HOTLINE}`}>{HOTLINE}</a> để nhận báo giá hoặc tư vấn cụ thể hơn</p> */}
    </div>
  );
};

export default withStyles({
  laiThu: {
    marginTop: 45,
    marginBottom: 10,
    padding: 20,
    textAlign: 'center',
    maxWidth: 500,
    with: '90%',
    marginRight: 'auto',
    marginLeft: 'auto',
    border: '12px solid #f5f5f5',
  },
  title: {
    color: '#2776b0',
    display: 'block',
    fontSize: '24px',
    fontWeight: 'bold',
  },
})(LaiThu);