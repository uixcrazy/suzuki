import React from 'react';
import withStyles from 'react-jss';
import { HOTLINE, HOTLINE_ZALO } from '../../core/constants';

const QuickCallButton = ({classes}) => {
  return (
    <div>
      <div className="phonering-alo-phone">
        <div className="phonering-alo-ph-circle"></div>
        <div className="phonering-alo-ph-circle-fill"></div>
        <a href={`tel:${HOTLINE}`} className="pps-btn-img" title="Liên hệ">
          <div className="phonering-alo-ph-img-circle"></div>
        </a>
      </div>
      <a href={`https://zalo.me/${HOTLINE_ZALO}`} className={classes.btnZalo} rel="nofollow">
        <img src="https://lh3.googleusercontent.com/X7JUHmDCeT845_MgAttYi_F8RsiHQr9ufnRqk2SiyiJZ1KBZgZek9wFOMuOwDuy4leA=w300" alt={HOTLINE_ZALO} />
      </a>
    </div>
  );
};

export default withStyles({
  btnZalo: {
    position: 'fixed',
    bottom: 65,
    left: 120,
    cursor: 'pointer',
    zIndex: '9999',
    '& img': {
      width: '50px',
      borderRadius: '50%',
    }
  }
})(QuickCallButton);
