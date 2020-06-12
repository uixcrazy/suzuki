import React from 'react';
import withStyles from 'react-jss';
import RequestInfo from '../ContactForm/RequestInfoLaiThu';
import { ADDRESS } from '../../core/constants';
const LaiThu = ({classes, id}) => {
  return (
    <div className={classes.laiThu}>
        <p className={classes.title}>ĐĂNG KÝ LÁI THỬ</p>
        <p className={classes.daiviet}>Suzuki Đại Việt</p>
        <p>{ADDRESS}. <a target="_blank" href="https://goo.gl/maps/q75hsUGCUwz8XFrn8">Xem bản đồ</a></p>
        <RequestInfo id={id}/>
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
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  daiviet: {
  display: 'block',
  fontSize: '1.375rem',
  fontWeight: 'bold',
},
})(LaiThu);