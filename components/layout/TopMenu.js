import React from 'react';
import Link from 'next/link';
import withStyles from 'react-jss';
import styles from './TopMenu.style';
import { HOTLINE, HOTLINE_SHOW, MAIL, SLOGAN } from '../../core/constants';

const TopMenu = ({classes, isMobile}) => {
  return (
    <div className={`${classes.topNav} ${isMobile && 'mb'}`}>
      <div className="container">
        <div className={`${classes.topNavCt} ${isMobile && 'mb'}`}>
          <Link href="/">
            <a className={classes.homelink}>
              <img
                className={classes.logoImage}
                src="/logo.jpg"
                alt="suzuki"
              />
            </a>
          </Link>
          <div className={`${classes.slogan} ${isMobile ? 'mb' : ''}`}
            dangerouslySetInnerHTML={{ __html: SLOGAN }} />
          {!isMobile &&
            <ul className={classes.contactDetails}>
              <li className="phone">
                <a href={`tel:${HOTLINE}`}><i className="material-icons">phone</i>&nbsp;
                {HOTLINE_SHOW}</a>
              </li>
              <li className="mail">
                <i className="material-icons">mail</i>&nbsp;<a href={`mailto:${MAIL}`}>{MAIL}</a>
              </li>
            </ul>
          }
        </div>
      </div>
      { isMobile &&
        <div className={classes.contactDetailsMb}>
          <a href={`tel:${HOTLINE}`}>Liên hệ: <strong>{HOTLINE_SHOW}</strong></a>
        </div>
      }
    </div>
  );
};

export default withStyles(styles)(TopMenu);
