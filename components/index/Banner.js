import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Link from 'next/link';


const useStyles = makeStyles(theme => ({
  banner: {
    height: '100%',
  },
  bannerLink: {
    display: 'block',
    position: 'relative',
    '& img': {
      display: 'block',
      width: '100%',
    }
  }
}));

const Banner = props => {
  const classes = useStyles();
  return (
    <div className={classes.banner}>
      {props.isMobile
      ? <Link href="/">
        <a className={classes.bannerLink}>
          <img
            src="https://images.unsplash.com/photo-1558981852-426c6c22a060?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"
            alt="suzuki nguyen duy trinh"
          />
        </a>
      </Link>
    :<Link href="/">
      <a className={classes.bannerLink}>
        <img
          src="https://images.unsplash.com/photo-1558981852-426c6c22a060?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"
          alt="suzuki nguyen duy trinh"
        />
      </a>
    </Link>
    }

    </div>
  );
};

Banner.propTypes = {

};

export default Banner;