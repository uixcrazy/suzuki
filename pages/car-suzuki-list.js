import React from "react";
import { NextSeo } from 'next-seo';
import Layout from "../components/layout";
import Cards, { CardsTwoCol } from "../components/index/Cards";
import Header from "../components/car-suzuki-list/Header";
import { isMobileDetect } from "../core/mobile-detect";

const LISTDATA = {
  "xe-bay-cho": [
    {
      "id": "ertiga",
      "cat_id" : "xe-du-lich",
      "name": "Ertiga 2020",
      "slogan": "Xe 7 chỗ dành cho gia đình",
      "price": "liên hệ",
      "thumbnail": "ertiga/ertiga-thumb.jpg"
    },
    {
      "id": "suzuki-xl7",
      "cat_id" : "xe-du-lich",
      "name": "Suzuki XL7",
      "slogan": "Phong cách thể thao, cá tính",
      "price": "sắp ra mắt",
      "thumbnail": "xl7/xl7-thumb.jpg"
    }
  ],
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
      <>
        <NextSeo
          title="Xe 7 chỗ | Xe du lịch | Đại lý chính thức của Suzuki"
          description="Đại lý chính thức của Suzuki | những mẫu xe đa dụng 7 chỗ dành cho gia đình dã ngoại | giá tốt nhất Sài Gòn"
          canonical="http://xetainhosaigon.com/xe-du-lich-suzuki"
        />
        <Layout
          Header={Header}
          isMobile={isMobile}
        >
          <main style={{margin: '15px 0'}}>
            <div className="container">
              <h2 className={`h2 ${isMobile ? "mb" :''}`}>
                Các dòng xe du lịch 7 chỗ chính hãng <span>Suzuki</span>
              </h2>
              <CardsTwoCol
                isMobile={isMobile}
                items={data["xe-bay-cho"]}
              />
              <Cards
                isMobile={isMobile}
                items={data["xe-du-lich"]}
              />
            </div>
          </main>
        </Layout>
      </>
    )
  }
}
