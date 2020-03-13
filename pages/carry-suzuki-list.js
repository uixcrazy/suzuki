import React from "react";
import Layout from "../components/layout";
import Cards from "../components/index/Cards";
import Header from "../components/carry-suzuki-list/Header";
import { isMobileDetect } from "../core/mobile-detect";

const LISTDATA = {
  "xe-tai-nho": [
    {
      id: 'carry-pro',
      "cat_id" : "xe-tai-nho",
      name: 'Carry Pro',
      slogan: 'Bạn đường lý tưởng',
      price: "liên hệ",
      thumbnail: 'carry-pro/carry-pro-thumb.png',
    },
    {
      id: 'carry-truck',
      "cat_id" : "xe-tai-nho",
      name: 'Carry Truck',
      slogan: 'Xe tải nhẹ hàng đầu',
      price: 249,
      thumbnail: 'carry-truck/carry-truck-thumb.png',
    },
    {
      id: 'blind-van',
      "cat_id" : "xe-tai-nho",
      name: 'Blind Van',
      slogan: 'Kinh tế, hiệu quả, bền bỉ',
      price: 293,
      thumbnail: 'blind-van/blind-van-thumb.png',
    },
  ]
}

export default class CarrySuzukiList extends React.Component {
  static getInitialProps = async ({ query, pathname, req }) => {
    const isMobile = isMobileDetect(req && req.headers['user-agent']);

    const resp = LISTDATA["xe-tai-nho"]
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
              Các dòng xe tải nhỏ / xe thương mại của <span>Suzuki</span>
            </h2>
            <Cards
              isMobile={isMobile}
              items={data}
            />
          </div>
        </main>
      </Layout>
    )
  }
}
