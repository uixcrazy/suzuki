import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Link from 'next/link';

const useStyles = makeStyles(theme => ({
  banner: {
    height: '100%',
    overflow: 'hidden',
    paddingTop: 48,
  },
  bannerLink: {
    display: 'block',
    height: '100%',
    position: 'relative',
    '& img': {
      display: 'block',
      width: '100vw',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'center',
    }
  }
}));

const Banner = props => {
  const classes = useStyles();
  return (
    <div className={classes.banner}>
      {props.isMobile
      ? <Link href="www.google.com">
        <a className={classes.bannerLink}>
          <img
            src="https://images.unsplash.com/photo-1558981852-426c6c22a060?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"
            alt="suzuki nguyen duy trinh"
          />
        </a>
      </Link>
    : <Link href="wwww.google.com">
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