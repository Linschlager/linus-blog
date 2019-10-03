import React from 'react'
import Router from 'next/router';
import App, { Container } from 'next/app'
import Head from 'next/head';
import { ApolloProvider } from "react-apollo";
import Layout from "../components/design/Layout";
import initApollo from "../lib/initApollo";
import { trackPage } from "../lib/trackUsage";

class AppWrapper extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  componentDidMount() {
    Router.onRouteChangeComplete = trackPage;
  }

  constructor(...args) {
    super(...args);
  }

  render() {
    const { Component, pageProps } = this.props;
    const apolloClient = initApollo();
    return (
     <Container>
       <Head>
         <title>Linus Vettiger</title>
       </Head>
       <ApolloProvider client={apolloClient}>
         <Layout>
          <Component {...pageProps} />
         </Layout>
       </ApolloProvider>
     </Container>
    )
  }
}

export default AppWrapper;