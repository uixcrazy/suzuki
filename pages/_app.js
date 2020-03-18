import App from 'next/app';
import { DefaultSeo } from 'next-seo';
import SEO from '../core/next-seo.config';

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
      <>
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </>
    )
  }
}
