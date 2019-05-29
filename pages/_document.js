import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class DocumentWrapper extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head title={"Linus"}>
          <link rel="manifest" href="/static/manifest.json" />
          <link href="https://fonts.googleapis.com/css?family=Raleway:100|Roboto&display=swap" rel="stylesheet" />
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