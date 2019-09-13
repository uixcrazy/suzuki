import React from "react";
import Layout from "../components/layout";
import Cards from "../components/index/Cards";
import Header from "../components/index/Header";
import { isMobileDetect } from "../core/mobile-detect";

import LISTDATA from "../mockdata/list";

export default class CarSuzukiList extends React.Component {
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
    const { isMobile, data } = this.props;
    return (
      <Layout
        title='Đại lý xe tải | xe ô tô du lịch Suzuki'
        Header={Header}
        isMobile={isMobile}
      >
        <main style={{margin: '15px 0'}}>
          <div className="container">
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
