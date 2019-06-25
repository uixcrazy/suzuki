import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import {
  createGenerateClassName,
  JssProvider,
  SheetsRegistry,
} from 'react-jss';

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
  const registry = new SheetsRegistry();
  const generateClassName = createGenerateClassName();

  const originalRenderPage = ctx.renderPage;
  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: App => props => (
        <JssProvider
          registry={registry}
          generateClassName={generateClassName}
          // jss={jss}
        >
          <App {...props} />
        </JssProvider>
      )
    })

  const initialProps = await Document.getInitialProps(ctx)

  return {
    ...initialProps,
    styles: (
      <>
        {initialProps.styles}
        <style id='server-side-styles'>{registry.toString()}</style>
      </>
    )
  }
};

export default MyDocument;
