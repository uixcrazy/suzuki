import React, { Component } from 'react'
import * as semls from 'emailjs-com';
import withStyles from 'react-jss';
import { validateEmail } from '../../core/utils';

const TYPE = [
  {
    id: 'ertiga',
    name: 'Suzuki Ertiga 2020'
  },
  {
    id: 'suzuki-xl7',
    name: 'Suzuki XL7'
  },
  {
    id: 'carry-pro',
    name: 'Suzuki Carry Pro 2020'
  },
  {
    id: 'carry-truck',
    name: 'Suzuki Carry Truck'
  },
  {
    id: 'blind-van',
    name: 'Suzuki Blind Van'
  },
  {
    id: 'celerio',
    name: 'Suzuki Celerio'
  },
  {
    id: 'swift',
    name: 'Suzuki Swift'
  },
  {
    id: 'ciaz',
    name: 'Suzuki Ciaz'
  }
];

const ThanksBox = ({ classes }) => (
  <div className={classes.thanksbox}>
    <p>Cảm ơn bạn đã đăng ký lái thử với Suzuki Đại Việt</p>
    <p>Chúng tôi sẽ liên lạc với bạn trong thời gian sớm nhất!</p>
  </div>
)

class RequestInfoLaiThu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      sdt: '',
      email: '',
      type: '',
      error: false,
      already: false,
      isSubmitting: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    let already = false;
    if (localStorage.getItem(`xetainhosaigon___dklaithu___${this.props.id}`)) {
      already = true;
    }
    this.setState({type: this.props.id, already});
  }

  handleChange = (param, e) => {
    this.setState({error: false, [param]: e.target.value })
  }

  handleSubmit(event) {
    event.preventDefault();
    const { id } = this.props;
    const __this = this;
    const {
      name,
      sdt,
      email,
      type,
    } = this.state;
    this.setState({ isSubmitting: true });
    const isPhoneCheck = sdt.length > 9 && sdt.length < 20;

    const isEmailCheck = validateEmail(email);
    if (isPhoneCheck || isEmailCheck) {
      const templateParams = {
        from_name: `${name} ${sdt}`,
        to_name: 'cskh - DaiViet',
        subject: 'tuvan - xetainhosaigon',
        message_html: `
<div>
  <p style="color:#999999">Name: ${name}</p>
  <p style="color:#999999">SDT: ${sdt}</p>
  <p style="color:#999999">Email: ${email}</p>
  <p style="color:#999999">Type: ${type}</p>
<div>
        `,
      }
      semls.send('suzuki_cskh_gmail_com', 'template_0sB1Tjjx', templateParams, 'user_K7OtNxNUKO734y3WeiYT3')
      .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        localStorage.setItem(`xetainhosaigon___dklaithu___${id}`, "1");
        __this.setState({ already: true, isSubmitting: false });
      }, function(error) {
        console.log('FAILED...', error);
        __this.setState({ isSubmitting: false });
      });
    } else {
      this.setState({ error: true, isSubmitting: false });
    }
  }

  render() {
    const { classes, id } = this.props;
    const { already, error, isSubmitting } = this.state;
    const type = TYPE.find(t => t.id === id);

    return already ? <ThanksBox classes={classes} /> : (
      <form>
        <div className={classes.formGr}>
          <label htmlFor="name">Họ Tên:</label>
          <input
            type="text"
            id="name"
            autoComplete="off"
            value={this.state.name}
            onChange={this.handleChange.bind(this, 'name')} />
        </div>
        <div className={classes.formGr}>
          <label htmlFor="sdt">Số điện thoại:</label>
          <input
            type="text"
            id="sdt"
            autoComplete="off"
            value={this.state.sdt}
            onChange={this.handleChange.bind(this, 'sdt')} />
        </div>
        <div className={classes.formGr}>
          <label htmlFor="email">Email (nếu có):</label>
          <input
            type="email"
            id="email"
            autoComplete="off"
            value={this.state.email}
            onChange={this.handleChange.bind(this, 'email')} />
        </div>
        <div className={classes.formGr}>
          <label htmlFor="type">Mẫu xe:</label>
          <strong>{type && type.name}</strong>
        </div>
        {error ? <p className={classes.error}>Vui lòng kiểm tra lại <strong>Số điện thoại</strong> hay <strong>Email</strong> vừa nhập</p> : ""}
        <p className={classes.noteForU}>Vui lòng điền <strong>Số điện thoại</strong> hoặc <strong>Email</strong>, để chúng tôi liên hệ với bạn trong thời gian sớm nhất!.</p>
        {
          isSubmitting
          ? <input
            type="button"
            value="Đang Gửi Thông Tin ..."
            className={classes.btnIsSubmitting}
          />
          : <input
            type="button"
            value="Hoàn Tất Đăng Ký"
            className={classes.btnSubmit}
            onClick={this.handleSubmit}
          />
        }

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
  thanksbox: {
    color: '#2776b0',
    marginTop: 20,
    fontSize: '1.125rem',
  },
  noteForU: {
    paddingTop: 15,
    color: '#2776b0',
    fontSize: '0.875rem',
  },
  error: {
    paddingTop: 15,
    color: 'var(--danger)',
    fontSize: '0.875rem',
  },
  btnSubmit: {
    marginTop: 5,
    background: '#2776b0',
    color: '#fff',
    padding: '10px 30px',
    borderRadius: '30px',
    border: 0,
    borderRadius: '4px',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  btnIsSubmitting: {
    marginTop: 5,
    background: '#c8e0f1',
    color: '#2775b1',
    padding: '10px 30px',
    borderRadius: '30px',
    border: 0,
    borderRadius: '4px',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    cursor: 'default',
  }
})(RequestInfoLaiThu);
