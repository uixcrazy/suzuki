import React, { Component } from 'react'
import * as emailjs from 'emailjs-com';
import withStyles from 'react-jss';

const TYPE = [
  {
    id: 'carry-pro',
    name: 'Suzuki Carry Pro'
  },
  {
    id: 'carry-truck',
    name: 'Suzuki Carry Truck'
  },
  {
    id: 'blind-van',
    name: 'Suzuki Blind Van'
  },
]

class RequestInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      sdt: '',
      email: '',
      address: '',
      type: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (param, e) => {
    this.setState({ [param]: e.target.value })
  }

  handleSubmit(event) {
    event.preventDefault();
    const {
      name,
      sdt,
      email,
      address,
      type,
    } = this.state
    let templateParams = {
      from_name: `${name} ${sdt}`,
      to_name: 'suzuki_cskh_gmail_com',
      subject: 'tuvan -  xetainhosaigon',
      message_html: `
      <div>
        <p style="color:#999999">Name: ${name}</p>
        <p style="color:#999999">SDT: ${sdt}</p>
        <p style="color:#999999">Email: ${email}</p>
        <p style="color:#999999">Address: ${address}</p>
        <p style="color:#999999">Type: ${type}</p>
      <div>
      `,
    }
    console.log(templateParams)
    // emailjs.send('suzuki_cskh_gmail_com', 'template_0sB1Tjjx', templateParams, 'user_K7OtNxNUKO734y3WeiYT3')
    //   .then(function(response) {
    //     console.log('SUCCESS!', response.status, response.text);
    //   }, function(error) {
    //     console.log('FAILED...', error);
    //   });
    // this.resetForm() notReset
    // show box " ban da gui email thanh cong. Chung toi se lien lac voi ban trong thoi gian som nhat"
  }

  render() {
    const { classes } = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className={classes.formGr}>
          <label htmlFor="name">Họ Tên:</label>
          <input
            type="text"
            id="name"
            value={this.state.name}
            onChange={this.handleChange.bind(this, 'name')} />
        </div>
        <div className={classes.formGr}>
          <label htmlFor="sdt">Số điện thoại:</label>
          <input
            type="text"
            id="sdt"
            value={this.state.sdt}
            onChange={this.handleChange.bind(this, 'sdt')} />
        </div>
        <div className={classes.formGr}>
          <label htmlFor="email">Email (nếu có):</label>
          <input
            type="email"
            id="email"
            value={this.state.email}
            onChange={this.handleChange.bind(this, 'email')} />
        </div>
        <div className={classes.formGr}>
          <label htmlFor="address">Địa chỉ nhà:</label>
          <p className={classes.noteForU}>Vui lòng điền Quận/Huyện và Tỉnh/Thành phố nơi bạn đăng ký trong Hộ Khẩu, để chúng tôi giúp bạn tính phí đăng kiểm/hoàn tất thủ tục chính xác nhất.</p>
          <input
            type="text"
            id="address"
            value={this.state.address}
            onChange={this.handleChange.bind(this, 'address')} />
        </div>
        <div className={classes.formGr}>
          <label htmlFor="type">Mẫu xe:</label>
          <select
            id="type"
            value={this.state.type}
            onChange={this.handleChange.bind(this, 'type')}
          >
            {TYPE.map(item => (
               <option key={item.id} value={item.id}>{item.name}</option>
            ))}
          </select>
        </div>


        <input type="submit" value="Hoàn Tất Đăng Ký" className={classes.btnSubmit} />
      </form>
    );
  }
}

export default withStyles({
  formGr: {
    marginTop: 10,
    textAlign: 'left',
    '& label': {
      marginBottom: 0,
      color: '#555',
      minWidth: 100,
    }
  },
  noteForU: {
    color: '#2776b0',
    fontSize: 12,
  },
  btnSubmit: {
    marginTop: 15,
    background: '#2776b0',
    color: '#fff',
    padding: '10px 30px',
    borderRadius: '30px',
    border: 0,
    borderRadius: '4px',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  }
})(RequestInfo);

