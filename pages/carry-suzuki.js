import React from 'react';
import { NextSeo } from 'next-seo';
import Layout from '../components/layout';
import { isMobileDetect } from '../core/mobile-detect';
import Header from '../components/carry-suzuki/Header';
import { BREADCRUMB, PATH } from '../core/constants';
import Content from '../components/carry-suzuki/Index';

export default class CarrySuzuki extends React.Component {
  static getInitialProps = async ({ query: { id }, req }) => {
    const isMobile = isMobileDetect(req && req.headers['user-agent']);

    const data = require(`../mockdata/${id}.json`);

    return {
      id,
      data,
      isMobile
    };
  };

  render() {
    const { id, isMobile, data } = this.props;
    return (
      <>
        <NextSeo
          title={`Xe tải nhỏ Sài Gòn | ${data.name_vi || data.name} - ${data.keywords ? data.keywords[0] : BREADCRUMB[data.cat_id]} | Suzuki`}
          description={data.description}
          canonical={`http://xetainhosaigon.com${PATH[data.cat_id]}/${data.id}`}
        />
        <Layout
          isMobile={isMobile}
          Header={Header}
          data={data}
        >
        <Content
          id={id}
          isMobile={isMobile}
          data={data}
        />
        </Layout>
      </>
    )
  }
}
