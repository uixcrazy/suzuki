const styles =  {
  topNav: {
    position: 'relative',
    width: '100%',
    height: 48,
    lineHeight: '48px',
    color: '#fff',
    background: 'var(--secondary)', // #0b3145
    '& .container': {
      height: '100%',
    }
  },
  topNavCt: {
    display: 'flex',
    height: '100%',
  },
  homelink: {
    display: 'inline-flex',
    width: 150,
    borderRight: '1px solid rgba(255, 255, 255, 0.2)',
    marginRight: 10,
  },
  logoImage: {
    height: '100%',
  },
  social: {
    display: 'flex',
    listStyle: 'none',
  },
  contactDetails: {
    display: 'flex',
    listStyle: 'none',
    '& li': {
      color: '#c2dcea',
      paddingRight: 20,
      '&:hover': {
        color: '#c2e6fb',
      },
      '& a': {
        color: '#c2dcea',
        transition: 'all 0.5s ease',
        '&:hover': {
          color: '#c2e6fb',
        },
      },
      '&.phone':{
        '& a': {
          color: '#fff',
        },
        '& .material-icons': {
          position: 'relative',
          top: 7,
        },
      },
      // '&.phone.mb a': {
      //   textDecoration: 'underline',
      //   marginLeft: 5,
      // },
      '&.mail':{
        '& .material-icons': {
          position: 'relative',
          top: 7,
        },
      },
    }
  },
};

export default styles;
