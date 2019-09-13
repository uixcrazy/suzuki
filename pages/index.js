import React from "react";
import fetch from 'isomorphic-unfetch';
import Layout from "../components/layout";
import Cards from "../components/index/Cards";
import Header from "../components/index/Header";
import { isMobileDetect } from "../core/mobile-detect";

export default class Index extends React.Component {
  static getInitialProps = async ({ query, pathname, req }) => {
    const isMobile = isMobileDetect(req && req.headers['user-agent']);
    const res = await fetch('https://cdn.uixcrazy.now.sh/api/suzuki-list.json', {
      headers: { Accept: 'application/json' }
    })
    const data = await res.json();

    return {
      pathname,
      data,
      isMobile,
    };
  };

  render() {
    const { isMobile, data } = this.props;
    return (
      <Layout
        title='Xe tải nhỏ | xe du lịch Suzuki '
        Header={Header}
        isMobile={isMobile}
      >
        <main style={{margin: '15px 0'}}>
          <div className="container">
            <h2 className={`h2 ${isMobile ? "mb" :''}`}>
              Các dòng xe tải nhỏ / xe thương mại của <span>Suzuki</span>
            </h2>
            <Cards
              isMobile={isMobile}
              items={data["xe-tai-nho"]}
            />
            <h2 className={`h2 ${isMobile ? "mb" :''}`}>
              Các dòng xe du lịch của <span>Suzuki</span>
            </h2>
            <Cards
              isMobile={isMobile}
              items={data["xe-du-lich"]}
            />
          </div>
        </main>
      </Layout>
    )
  }
}
