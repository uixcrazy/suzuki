import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import flush from 'styled-jsx/server';
import { ServerStyleSheets } from '@material-ui/styles';

class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no" />
          <meta http-equiv="content-type" content="text/html; charset=UTF-8" />
          <meta http-equiv="content-language" content="vi"/>
          <meta http-equiv="x-ua-compatible" content="ie=edge"/>
          <link rel="shortcut icon" href="static/favicon.ico" />
          <link rel="icon" type="image/png" href="static/favicon-suzuki.png" sizes="32x32"/>
          <link rel="icon" type="image/png" href="static/favicon-suzuki.png" sizes="16x16"/>
          <meta name="theme-color" content={"#fff"} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

MyDocument.getInitialProps = async ctx => {
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;
  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: App => props => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: (
      <React.Fragment>
        {initialProps.styles}
        {sheets.getStyleElement()}
      </React.Fragment>
    ),
  };
};

export default MyDocument;
