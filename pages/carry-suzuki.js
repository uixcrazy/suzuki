import React from 'react';
import Layout from '../components/layout';
import { isMobileDetect } from '../core/mobile-detect';
import Header from '../components/carry-suzuki/Header';
import { BREADCRUMB } from '../core/constants';
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
    const { isMobile, data } = this.props;
    return (
      <Layout
        title={`${data.name_vi || data.name} -
        ${data.keywords ? data.keywords[0] : BREADCRUMB[data.cat_id]} | Suzuki`}
        isMobile={isMobile}
        Header={Header}
        data={data}
      >
       <Content
        isMobile={isMobile}
        data={data}
       />
      </Layout>
    )
  }
}
