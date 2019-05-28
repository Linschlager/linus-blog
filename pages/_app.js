import React from 'react'
import App, { Container } from 'next/app'
import Layout from "../components/Layout";

class AppWrapper extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  constructor(...args) {
    super(...args);
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
     <Container>
       <Layout>
        <Component {...pageProps} />
       </Layout>
     </Container>
    )
  }
}

export default AppWrapper;