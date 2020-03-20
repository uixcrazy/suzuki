import React from 'react';

export default ({data}) => (
  <article
    dangerouslySetInnerHTML={{ __html: data.replace(/\/static\//g, process.env.CDN_URL) }}
  />
);
