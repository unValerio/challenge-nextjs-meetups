import type { AppProps } from 'next/app';
import Head from 'next/head';

import Layout from '@components/Layout';
import MainNavigation from '@components/MainNavigation';

import GlobalStyle from '@theme/GlobalStyle/GlobalStyle';

export default function ReactMeetupApp({ Component, props }): AppProps {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <GlobalStyle />
      <MainNavigation />
      <Layout>
        <Component {...props} />
      </Layout>
    </>
  );
}
