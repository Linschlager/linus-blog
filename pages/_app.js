import React from 'react'
import App, { Container } from 'next/app'
import { ApolloProvider } from "react-apollo";
import Layout from "../components/Layout";
import initApollo from "../lib/initApollo";

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
    const apolloClient = initApollo();
    return (
     <Container>
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