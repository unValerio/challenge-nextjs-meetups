import Head from 'next/head';

import Layout from '../ui/components/Layout';
import MainNavigation from '../ui/components/MainNavigation';

import GlobalStyle from '../ui/theme/GlobalStyle/GlobalStyle';

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
