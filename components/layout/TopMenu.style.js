import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
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
  iconLocation: {
    fontSize: '1rem',
    marginTop: '-3px',
    marginRight: 3,
  },
  iconCall: {
    fontSize: '1rem',
    color: '#fff',
    marginRight: 3,
  },
  iconMail: {
    fontSize: '1rem',
    color: '#c2dcea',
    marginRight: 5,
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
      '&.phone a': {
        color: '#fff',
      },
      '&.phone.mb a': {
        textDecoration: 'underline',
        marginLeft: 5,
      }
    }
    // color: '#B1BCC2'
  },
}));

export default useStyles;
