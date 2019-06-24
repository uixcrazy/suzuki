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
    const { isMobile, data } = this.props;
    return (
      <Layout
      // Đại lý xe tải Suzuki ô tô du lịch Suzuki Sài Gòn Ngôi Sao tại TPHCM ®
      // <meta name="description" content="✅Đại lý xe tải Suzuki Sài Gòn Ngôi Sao là đại lý xe ô tô, xe tải Suzuki chất lượng 3S chính thức của Suzuki. Đại lý xe tải Suzuki chính hãng cung cấp Miền Nam. Hơn 10 năm hoạt động, cam kết cung cấp các dòng xe tải Suzuki, xe du lịch Suzuki chất lượng và giá cực ưu đãi tại Miền Nam.">


      // <title>Đại Lý Suzuki Đại Việt - Quận 2 - TPHCM</title>
// <meta name="description" content="Showroom Suzuki Đại Việt nằm tại 438-440 Nguyễn Duy Trinh, Phường Bình Trưng Đông, Quận 2, TP.HCM. Suzuki Quận 2 là đại lý 3S chính thức của Suzuki Việt Nam">




// <meta property="og:title" content="Đại Lý Suzuki Đại Việt - Quận 2 - TPHCM">

// <meta property="og:description" content="Showroom Suzuki Đại Việt nằm tại 438-440 Nguyễn Duy Trinh, Phường Bình Trưng Đông, Quận 2, TP.HCM. Suzuki Quận 2 là đại lý 3S chính thức của Suzuki Việt Nam">

        title='Đại lý xe tải | xe ô tô du lịch Suzuki tại Nguyễn Duy Trinh - Quận 2 - TPHCM '
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
              path="/xe-tai-nho/suzuki/"
            />
            <h2 className={`h2 ${isMobile ? "mb" :''}`}>
              Các dòng xe du lịch của <span>Suzuki</span>
            </h2>
            <Cards
              isMobile={isMobile}
              items={data["xe-du-lich"]}
              path="/xe-du-lich/suzuki/"
            />
          </div>
        </main>
      </Layout>
    )
  }
}
