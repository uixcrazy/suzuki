import App from 'next/app';
// import { DefaultSeo } from 'next-seo';
// import SEO from '../core/next-seo.config';

export default class MyApp extends App {
  componentDidMount () {
    const style = document.getElementById('server-side-styles')

    if (style) {
      style.parentNode.removeChild(style);
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <React.Fragment>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no" />
          <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
          <meta name="robots" content="index, follow"/>
          <meta httpEquiv="content-language" content="vi"/>
          <meta httpEquiv="x-ua-compatible" content="ie=edge"/>
          <link rel="shortcut icon" href="https://xetainhosaigon.com/static/favicon.ico" />
          <link rel="icon" type="image/png" href="https://xetainhosaigon.com/static/favicon-suzuki.png" sizes="32x32"/>
          <link rel="icon" type="image/png" href="https://xetainhosaigon.com/static/favicon-suzuki.png" sizes="16x16"/>
          <meta name="theme-color" content={"#fff"} />
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
        </Head>
        {/* <DefaultSeo {...SEO} /> */}
        <Component {...pageProps} />
      </React.Fragment>
    );
  }
}
