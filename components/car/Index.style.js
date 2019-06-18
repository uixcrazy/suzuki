import { makeStyles } from '@material-ui/core/styles';

const styles =theme => ({
  main: {
    height: '100%',
    marginTop: 'var(--height-header)',
    paddingBottom: 150,

    position: 'relative',
    zIndex: '1',
    // '&.isMobile': {
    //   paddingLeft: 'var(--padding-horizontal-lg) 0',
    // },
    // '& > div': {
    //   borderBottom: '50px solid #f9fafb',
    // },
    // '& .container': {
    //   padding: 'var(--padding-horizontal-xl) 0',
    // },
  },
  [`@media (max-width: 1200px`]: {
    main: {
      '& .container': {
        margin: '0 auto',
        padding: 'var(--padding-horizontal-xl) var(--padding-horizontal-lg) var(--padding-horizontal-lg)',
      },
    }
  },
});

export default styles;
