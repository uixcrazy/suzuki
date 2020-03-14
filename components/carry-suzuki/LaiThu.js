import React from 'react';
import withStyles from 'react-jss';
import RequestInfo from '../ContactForm/RequestInfoLaiThu';

const LaiThu = ({classes, id}) => {
  return (
    <div className={classes.laiThu}>
        <p className={classes.title}>ĐĂNG KÝ LÁI THỬ</p>
        <p className={classes.daiviet}>Suzuki Đại Việt</p>
        <p>440 Đường Nguyễn Duy Trinh, Bình Trưng Đông, Quận 2, Hồ Chí Minh <a target="_blank" href="https://goo.gl/maps/q75hsUGCUwz8XFrn8">Xem bản đồ</a></p>
        <RequestInfo id={id}/>
        {/* <p className={classes.lienhe}>Liên hệ sđt: <a href={`tel:${HOTLINE}`}>{HOTLINE}</a> để nhận báo giá hoặc tư vấn cụ thể hơn</p> */}

        {/* Giá được đăng trên Website chỉ là giá công bố. Liên hệ ngay với chúng tôi bạn sẽ có giá tốt nhất và nhiều ưu đãi nhất.  */}
{/* Hiện tại Admin không Online, để lại nhu cầu của bạn.Chúng tôi sẽ liên hệ trong thời gian sớm nhất! */}
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
  daiviet: {
  display: 'block',
  fontSize: '22px',
  fontWeight: 'bold',
},
})(LaiThu);