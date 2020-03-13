import React from "react";
import Layout from "../components/layout";
import Cards from "../components/index/Cards";
import Header from "../components/index/Header";
import { isMobileDetect } from "../core/mobile-detect";

const LISTDATA = {
  "xe-du-lich": [
    {
      id: 'swift',
      "cat_id" : "xe-du-lich",
      name: 'Swift',
      slogan: 'Nâng tầm phong cách',
      price: "liên hệ",
      thumbnail: 'swift/swift-thumb.jpg',
    },
    {
      id: 'celerio',
      "cat_id" : "xe-du-lich",
      name: 'Celerio',
      slogan: 'Xe nhỏ ý tưởng lớn',
      price: "liên hệ",
      thumbnail: 'celerio/celerio-thumb.jpg',
    },
    {
      id: 'ciaz',
      "cat_id" : "xe-du-lich",
      name: 'Ciaz',
      slogan: 'Thuần chất Sedan',
      price: "liên hệ",
      thumbnail: 'ciaz/ciaz-thumb.jpg',
    },
  ]
};

export default class CarSuzukiList extends React.Component {
  static getInitialProps = async ({ query, pathname, req }) => {
    const isMobile = isMobileDetect(req && req.headers['user-agent']);

    const resp = LISTDATA["xe-du-lich"]
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
              items={data}
            />
          </div>
        </main>
      </Layout>
    )
  }
}
