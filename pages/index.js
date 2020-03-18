import React from "react";
import fetch from 'isomorphic-unfetch';
import { NextSeo } from 'next-seo';
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
      <>
        <NextSeo
          title="Xe tải nhỏ | xe du lịch Suzuki"
          description="Đại lý chính thức của Suzuki | phân phối xe tải nhẹ, xe tải nhỏ giá tốt nhất Sài Gòn | dòng SUV hàng đầu Suzuki Ertiga"
          canonical="http://xetainhosaigon.com/"
          site_name="Xe tải nhỏ Sài Gòn"
        />
        <Layout
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
            </div>
            <img style={{
              width: '100vw',
              height: '100%',
              display: 'block',
              objectFit: 'cover',
              objectPosition: 'center',
              marginBottom: 10,
            }}
            src="https://cdn.uixcrazy.now.sh/static/khuyenmai/carry_pro.jpg" alt="khuyến mãi carry pro" />
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
      </>
    )
  }
}
