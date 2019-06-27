import React from "react";
import Layout from "../layout";
import Cards from "../index/Cards";
import { isMobileDetect } from "../../core/mobile-detect";

import LISTDATA from "../../mockdata/list";

export default class CarSuzuki extends React.Component {
  static getInitialProps = async ({ query: { id }, req }) => {
    const isMobile = isMobileDetect(req && req.headers['user-agent']);

    const resp = LISTDATA
    return {
      id,
      data: resp,
      isMobile
    };
  };
  // chỉnh title theo ten xe

  render() {
    return (
      <Layout
        title='xe ô tô suzuki celerio - THUẦN CHẤT SEDAN | Nguyễn Duy Trinh, TPHCM '
        isMobile={this.props.isMobile}
      >
        {this.props.id}
        <br />
        {this.props.isMobile}
      </Layout>
    )
  }
}





// export default () => (
//   <Layout
//     title='🚕 🚖 🚘  🌾 🌵 🌻 🦀 🍁 About us'
//     // Header='header'
//     // Nav='nav'
//     // Footer='Footer'
//     // Fixed
//   >
//     <h2
//     style={{
//       display: 'block',
//       textAlign: 'center',
//       padding: '0 20px',
//       fontSize: '22px',
//       lineHeight: '50px',
//       color: '#777',
//       textTransform: 'uppercase',
//       fontWeight: 'bold',
//     }}
//     >Các dòng xe du lịch &amp; xe tải / xe thương mại <span style={{color: '#0b3145'}}>Suzuki</span> chính hãng</h2>
//     <Cards />
//   </Layout>
// )
