import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  topNav: {
    position: 'absolute',
    left: '0',
    top: '0',
    width: '100%',
    zIndex: '30',
    height: 48,
    lineHeight: '48px',
    color: '#fff',
    background: 'var(--secondary)', // #0b3145
  },
  topNavCt: {
    display: 'flex',
    justifyContent: 'space-between',
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
