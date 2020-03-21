import React from 'react';
import * as semls from 'emailjs-com';
import withStyles from 'react-jss';
import Dialog from "../Dialog/Dialog";

class RequestBookingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      sdt: '',
      requestContent: '',
      error: false,
      isSubmitting: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (param, e) => {
    this.setState({error: false, [param]: e.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { onClose } = this.props;
    const {
      name,
      sdt,
      requestContent,
    } = this.state;
    this.setState({ isSubmitting: true });
    const isPhoneCheck = sdt.length > 9 && sdt.length < 20;
    if (isPhoneCheck) {
      const templateParams = {
        from_name: `${name} ${sdt}`,
        to_name: 'cskh - DaiViet',
        subject: 'ycBaogia - xetainhosaigon',
        message_html: `
<div>
  <p style="color:#999999">Name: ${name}</p>
  <p style="color:#999999">SDT: ${sdt}</p>
  <p style="color:#999999">Content: ${requestContent}</p>
<div>
        `,
      }
      semls.send('suzuki_cskh_gmail_com', 'template_0sB1Tjjx', templateParams, 'user_K7OtNxNUKO734y3WeiYT3')
      .then(function(response) {
        onClose(); // Close dialog
      }, function(error) {
        console.log('FAILED...', error);
        onClose(); // Close dialog
      });
    } else {
      this.setState({ error: true, isSubmitting: false });
    }
  }

  renderNoteForU = () => {
    const { classes, onClose, isMobile } = this.props;
    return (
      <p className={isMobile ? classes.noteForUMb : classes.noteForU}>Liên hệ với chúng tôi, bạn sẽ có <strong>giá tốt nhất</strong> và <strong>nhiều ưu đãi nhất</strong></p>
    )
  }

  render() {
    const { classes, onClose, isMobile } = this.props;
    const { name, sdt, requestContent, error, isSubmitting } = this.state;
    return (
      <div className={`${classes.dialog} ${isMobile ? 'mb' : ''}`}>
        <button className={classes.btnClose} onClick={onClose}>
          Đóng
        </button>
        <div className={classes.content}>
          <p className={classes.title}>Yêu Cầu Tư Vấn Báo Giá</p>
          {!isMobile ? this.renderNoteForU() : ''}

          <form>
            <div className={classes.formGr}>
              <label htmlFor="name">Họ Tên:</label>
              <input
                type="text"
                id="name"
                value={name}
                autoComplete="off"
                onChange={this.handleChange.bind(this, 'name')} />
            </div>
            <div className={classes.formGr}>
              <label htmlFor="sdt">Số điện thoại:</label>
              <input
                type="text"
                id="sdt"
                value={sdt}
                autoComplete="off"
                onChange={this.handleChange.bind(this, 'sdt')} />
            </div>
            <div className={classes.formGr}>
              <label htmlFor="requestContent">Yêu cầu:</label>
              <textarea
                id="requestContent"
                rows={isMobile ? 4 : 3}
                placeholder="Ví dụ: Cần tư vấn xe Carry Pro, Muốn tìm hiểu thêm dịch vụ bảo trì, làm đẹp xe, Đăng ký lái thử. Hoặc Chỉ được gọi điện tư vấn từ 8-22h"
                value={requestContent}
                onChange={this.handleChange.bind(this, 'requestContent')} />
            </div>
            {error ? <p className={classes.error}>Vui lòng kiểm tra lại <strong>Số điện thoại</strong> vừa nhập</p> : ""}
            {
              isSubmitting
              ? <button
                type="button"
                className={classes.btnIsSubmitting}
              >Đang Gửi Yêu Cầu ...</button>
              : <button
                type="button"
                className={classes.btnSubmit}
                onClick={this.handleSubmit}
              >Gửi Yêu Cầu</button>
            }
          </form>
          {isMobile ? this.renderNoteForU() : ''}
        </div>
      </div>
    )
  }
}

class RequestBooking extends React.Component {
  state = {
    dialogContent: null,
  };

  handleClose = () => {
    this.setState({ dialogContent: null });
  };

  openDialog = () => {
    const {classes, isMobile} = this.props;
    this.setState({ dialogContent:
      <RequestBookingForm
        classes={classes}
        isMobile={isMobile}
        onClose={this.handleClose}
      />
    });
  }

  render() {
    const {classes, isMobile} = this.props;
    return (
      <React.Fragment>
        <button
          type="button"
          className={`${classes.btnRequest} ${isMobile ? 'mb' : ''}`}
          onClick={this.openDialog}
        >
          Yêu Cầu Tư Vấn Báo Giá
        </button>
        <Dialog onClose={this.handleClose}
          backdropStyle={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          {this.state.dialogContent}
        </Dialog>
      </React.Fragment>
    );
  }
};

export default withStyles({
  btnRequest: {
    position: 'fixed',
    right: 5,
    bottom: 0,
    zIndex: '1000',
    padding: '8px 25px',
    color: '#fff',
    background: 'var(--primary)',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: '5px',
    borderTopRightRadius: '5px',
    boxShadow: '0px 0px 10px 5px rgba(255,255,255,.75)',
    '&.mb': {
      width: 300,
      height: 50,
      padding: 0,
      bottom: 15,
      borderRadius: '5px',
      right: 'calc(50% - 150px)',
    }
  },
  dialog: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 450,
    width: '100%',
    padding: 0,
    margin: '30px auto 20px',

    borderRadius: 2,
    backgroundColor: '#337ab7',
    position: 'relative',
    '&.mb': {
      '& $content': {
        padding: '10px 20px',
      },
      '& $formGr': {
        marginTop: 10,
        textAlign: 'left',
        alignItems: 'center',
        display: 'flex',
        '& label': {
          width: '110px',
          minWidth: 'auto',
          flex: '0 0 110px',
        }
      },
    }
  },
  content: {
    color: '#fff',
    padding: '30px 35px 25px',
    overflow: 'scroll',
    maxHeight: '90vh',
    '& input': {
      color: '#555'
    },
    '& textarea': {
      color: '#555',
      '&::placeholder': {
        fontSize: 12,
        color: '#a7b4bf',
      }
    }
  },
  title: {
    textAlign: 'center',
    fontSize: '22px',
    fontWeight: 'bold',
  },
  noteForU: {
    textAlign: 'center',
    margin: '10px 0 0',
  },
  noteForUMb: {
    textAlign: 'center',
    margin: '15px 0 5px',
  },
  btnClose: {
    top: '-35px',
    right: '0',
    color: '#fff',
    zIndex: '1',
    position: 'absolute',
    background: 'transparent',
    fontSize: '20px',
    padding: '10px 0 10px 20px',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    '&:hover': {
      color: '#dbeeff',
    },
  },
  formGr: {
    marginTop: 15,
    textAlign: 'left',
    '& label': {
      marginBottom: 0,
      minWidth: 100,
    }
  },
  error: {
    color: '#ffe3e5',
    fontSize: '1rem',
    paddingTop: 5,
  },
  btnSubmit: {
    marginTop: 5,
    // background: '#f41112',
    background: '#ca1b14',
    color: '#fff',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '10px 30px',
    borderRadius: '30px',
    border: 0,
    borderRadius: '4px',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    display: 'block',
    '&:hover': {
      background: '#ab1711',
    },
  },
  btnIsSubmitting: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 5,
    background: '#c8e0f1',
    color: '#2775b1',
    padding: '10px 30px',
    borderRadius: '30px',
    border: 0,
    borderRadius: '4px',
    fontWeight: 'bold',
    cursor: 'default',
  }
})(RequestBooking);
