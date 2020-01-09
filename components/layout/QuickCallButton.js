import React from 'react';
import { HOTLINE } from '../../core/constants';

const QuickCallButton = () => {
  return (
    <div className="phonering-alo-phone">
      <div className="phonering-alo-ph-circle"></div>
      <div className="phonering-alo-ph-circle-fill"></div>
      <a href={`tel:${HOTLINE}`} className="pps-btn-img" title="Liên hệ">
        <div className="phonering-alo-ph-img-circle"></div>
      </a>
    </div>
  );
};

export default QuickCallButton;