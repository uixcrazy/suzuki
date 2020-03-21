import React from "react";
import fetch from 'isomorphic-unfetch';
import { NextSeo } from 'next-seo';
import Layout from "../components/layout";
import Cards, { CardsTwoCol } from "../components/index/Cards";
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
      <>
        <NextSeo
          title="Xe tải nhỏ | xe du lịch Suzuki"
          description="Đại lý chính thức của Suzuki | phân phối xe tải nhẹ, xe tải nhỏ giá tốt nhất Sài Gòn | và những mẫu xe đa dụng 7 chỗ Suzuki Ertiga. Xe tải nhỏ tầm 100 triệu. Chất lượng Nhật Bản"
          canonical="http://xetainhosaigon.com/"
        />
        <Layout
          Header={Header}
          isMobile={isMobile}
        >
          <main style={{margin: '15px 0'}}>
            <div className="container">
              <h2 className={`h2 ${isMobile ? "mb" :''}`}>
                Các dòng xe tải nhỏ | xe du lịch 7 chỗ chính hãng <span>Suzuki</span>
              </h2>
              <CardsTwoCol
                isMobile={isMobile}
                items={data["xe-bay-cho"]}
              />
              <Cards
                isMobile={isMobile}
                items={data["xe-tai-nho"]}
              />
            </div>
            <div className="container">
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
