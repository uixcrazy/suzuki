import React from 'react';
import withStyles from 'react-jss';
import { HOTLINE, HOTLINE_ZALO } from '../../core/constants';

const QuickCallButton = ({classes, isMobile}) => {
  return (
    <div className={`${classes.grpCal} ${isMobile ? 'mb' : ''}`}>
      <a href={`https://zalo.me/${HOTLINE_ZALO}`} className={classes.btnZalo} rel="nofollow">
        <img src="https://lh3.googleusercontent.com/X7JUHmDCeT845_MgAttYi_F8RsiHQr9ufnRqk2SiyiJZ1KBZgZek9wFOMuOwDuy4leA=w300" alt={HOTLINE_ZALO} />
      </a>

      <div className="phonering-alo-phone">
        <div className="phonering-alo-ph-circle"></div>
        <div className="phonering-alo-ph-circle-fill"></div>
        <a href={`tel:${HOTLINE}`} className="pps-btn-img" title="Liên hệ">
          <div className="phonering-alo-ph-img-circle"></div>
        </a>
      </div>
    </div>
  );
};

export default withStyles({
  grpCal: {
    position: 'fixed',
    right: 0,
    top: '45%',
    zIndex: '1000',
    '&.mb': {
      right: -10,
    }
  },
  btnZalo: {
    position: 'absolute',
    right: 40,
    bottom: 120,
    cursor: 'pointer',
    '& img': {
      width: '50px',
      borderRadius: '50%',
      boxShadow: '0px 0px 15px 8px rgba(255,255,255,1)',
    }
  }
})(QuickCallButton);
