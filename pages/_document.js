import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class DocumentWrapper extends Document {
  static async getInitialProps(ctx) {
    const isProduction = process.env.NODE_ENV === "production";
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps, isProduction };
  }

  static setGoogleTags() {
    return {
      __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){ window.dataLayer.push(arguments); }
        gtag('js', new Date());
        gtag('config', 'UA-141582672-1');
      `
    }
  }

  render() {
    const { isProduction } = this.props;
    return (
      <Html lang="en">
        <Head title={"Linus"}>
          <meta name="theme-color" content="#000000" />
          <link rel="icon" type="image/png" href="/static/L_192x192.png" />
          <link rel="manifest" href="/static/manifest.json" />
          <link href="https://fonts.googleapis.com/css?family=Raleway:100|Roboto&display=swap" rel="stylesheet" />
          { isProduction && (
            <>
              <script async src="https://www.googletagmanager.com/gtag/js?id=UA-141582672-1"/>
              <script dangerouslySetInnerHTML={DocumentWrapper.setGoogleTags()}/>
            </>
          ) }
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default DocumentWrapper;