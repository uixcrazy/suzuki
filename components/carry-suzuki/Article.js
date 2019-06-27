import React from 'react';
import { CDN_URL } from '../../core/constants';

export default ({data}) => (
  <article
    dangerouslySetInnerHTML={{ __html: data.replace(/\/static\//g, CDN_URL) }}
  />
);
