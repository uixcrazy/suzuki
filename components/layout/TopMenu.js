import React from 'react';
// import MailIcon from '@material-ui/icons/Mail';
import Link from 'next/link';
import withStyles from 'react-jss';
import styles from './TopMenu.style';
import { HOTLINE, MAIL } from '../../core/constants';

const TopMenu = ({classes, isMobile}) => {
  return (
    <div className={classes.topNav}>
      <div className="container">
        <div className={classes.topNavCt}>
          <Link href="/">
            <a className={classes.homelink}>
              <img
                className={classes.logoImage}
                src="/static/logo.jpg"
                alt="suzuki"
              />
            </a>
          </Link>
          <ul className={classes.contactDetails}>
            <li className="phone">
              <a href={`tel:${HOTLINE}`}><i className="material-icons">phone</i>&nbsp;
              Hotline:&nbsp;{HOTLINE}</a>
            </li>
            {!isMobile &&
            <li className="mail">
              <i className="material-icons">mail</i>&nbsp;
              Email:&nbsp;
              <a href={`mailto:${MAIL}`}>{MAIL}</a>
            </li>}
          </ul>
          {/* <ul className={classes.social}>
            <li className="facebook">fb</li>
            <li className="zalo">zalo</li>
          </ul> */}
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(TopMenu);
