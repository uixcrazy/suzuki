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
    },
    '&.mb': {
      height: 90,
      lineHeight: '45px',
    },
  },
  topNavCt: {
    display: 'flex',
    height: '100%',
    '&.mb': {
      height: '50%',
    }
  },
  homelink: {
    display: 'inline-flex',
    width: 150,
    borderRight: '1px solid rgba(255, 255, 255, 0.2)',
  },
  logoImage: {
    height: '100%',
  },
  social: {
    display: 'flex',
    listStyle: 'none',
  },
  slogan: {
    background: 'var(--primary)',
    paddingRight: 25,
    paddingLeft: 25,
    fontWeight: 'bold',
    fontSize: '1.25rem',
    '&.mb': {
      paddingRight: 5,
      paddingLeft: 5,
      fontSize: '1rem',
      width: '100%',
      textAlign: 'center',
      lineHeight: 1.2,
      display: 'flex',
      alignItems: 'center',
    }
  },
  contactDetails: {
    display: 'flex',
    listStyle: 'none',
    marginLeft: 10,
    '& li': {
      color: '#c2dcea',
      paddingRight: 20,
      '&:hover': {
        color: '#c2e6fb',
      },
      '& a': {
        color: '#fff',
        transition: 'all 0.5s ease',
        '&:hover': {
          color: '#c2e6fb',
          textDecoration: 'none',
        },
      },
      '&.phone':{
        '& a': {
          color: '#fff',
        },
        '& .material-icons': {
          color: '#c2e6fb',
          position: 'relative',
          top: 7,
        },
      },
      '&.mail':{
        '& .material-icons': {
          position: 'relative',
          top: 7,
        },
      },
    }
  },
  contactDetailsMb: {
    position: 'absolute',
    top: 45,
    left: 0,
    width: '100%',
    textAlign: 'center',
    background: '#fff',
    '& a': {
      fontSize: '1.25rem',
      color: 'var(--primary)',
    }
  }
};

export default styles;
