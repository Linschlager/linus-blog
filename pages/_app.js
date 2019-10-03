import React from 'react'
import Router from 'next/router';
import App  from 'next/app'
import Head from 'next/head';
import { ApolloProvider } from "react-apollo-hooks";
import Layout from "../components/design/Layout";
import initApollo from "../lib/initApollo";
import { trackPage } from "../lib/trackUsage";

class AppWrapper extends App {
  render() {
    const { Component, pageProps } = this.props;
    const apolloClient = initApollo();
    return (
     <>
       <Head>
         <title>Linus Vettiger</title>
       </Head>
       <ApolloProvider client={apolloClient}>
         <Layout>
          <Component {...pageProps} />
         </Layout>
       </ApolloProvider>
     </>
    )
  }
}

export default AppWrapper;