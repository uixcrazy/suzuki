import React from 'react';
import PlaceIcon from '@material-ui/icons/Place';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import Link from 'next/link';
import withStyles from 'react-jss';
import styles from './TopMenu.style';
import { HOTLINE, MAIL } from '../constants';

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
                alt="suzuki nguyen duy trinh"
              />
            </a>
          </Link>
          {isMobile
          ? <ul className={classes.contactDetails}>
            <li className="phone mb">
              <PhoneIcon
                classes={{
                  root: classes.iconCall,
                }}/>
              Tư vấn:
              <a href={`tel:${HOTLINE}`}>{HOTLINE}</a>
            </li>
          </ul>
          : <ul className={classes.contactDetails}>
              <li className="address">
                <address>
                  <PlaceIcon
                    classes={{
                      root: classes.iconLocation,
                    }}/>
                  440, Nguyễn Duy Trinh, Bình Trưng Đông, Quận 2, HCM
                </address>
              </li>
              <li className="phone">
                <PhoneIcon
                  classes={{
                    root: classes.iconCall,
                  }}/>
                <a href={`tel:${HOTLINE}`}>{HOTLINE}</a>
              </li>
              <li className="mail">
                <MailIcon
                  classes={{
                    root: classes.iconMail,
                  }}/>
                <a href={`mailto:${MAIL}`}>
                  {MAIL}
                </a>
              </li>
            </ul>
          }
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
