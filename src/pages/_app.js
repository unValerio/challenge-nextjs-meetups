import Head from 'next/head';

import Layout from '../presenter/components/Layout';
import MainNavigation from '../presenter/components/MainNavigation';

import GlobalStyle from '../presenter/theme/GlobalStyle/GlobalStyle';

function ReactMeetup({ Component, props }) {
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

export default ReactMeetup;
