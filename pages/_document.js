import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { SheetsRegistry, JssProvider, createGenerateId } from 'react-jss';

export default class JssDocument extends Document {
  static async getInitialProps (ctx) {
    const registry = new SheetsRegistry()
    const generateId = createGenerateId()
    const originalRenderPage = ctx.renderPage
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: App => props => (
          <JssProvider registry={registry} generateId={generateId}>
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
  }

  render() {
    return (
      <html lang="en">
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
          <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,400i,500,700&display=swap&subset=vietnamese" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
