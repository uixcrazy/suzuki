import React from "react";
import Layout from "../components/layout";
import Cards from "../components/index/Cards";
import Header from "../components/index/Header";
import { isMobileDetect } from "../core/mobile-detect";

import LISTDATA from "../mockdata/list";

export default class Index extends React.Component {
  static getInitialProps = async ({ query, pathname, req }) => {
    const isMobile = isMobileDetect(req && req.headers['user-agent']);

    const resp = LISTDATA
    return {
      pathname,
      data: resp,
      isMobile
    };
  };

  render() {
    return (
      <Layout
        title='🚖 🚘 xe ô tô du lịch vs xe tải Suzuki tại Nguyễn Duy Trinh - TPHCM '
        isMobile={this.props.isMobile}
        Header={Header}
      >
        aaa
        {/* <h2
        style={{
          display: 'block',
          textAlign: 'center',
          padding: '0 20px',
          fontSize: '22px',
          lineHeight: '50px',
          color: '#777',
          textTransform: 'uppercase',
          fontWeight: 'bold',
        }}
        >Các dòng xe du lịch &amp; xe tải / xe thương mại <span style={{color: '#0b3145'}}>Suzuki</span> chính hãng</h2>
        <Cards
          isMobile={this.props.isMobile}
          items={this.props.data}
        /> */}
      </Layout>
    )
  }
}
