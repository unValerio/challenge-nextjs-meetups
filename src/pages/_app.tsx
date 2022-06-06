import Head from 'next/head';
import { Provider } from 'react-redux';

import Layout from '@components/Layout';
import GlobalStyle from '@theme/GlobalStyle/GlobalStyle';
import { store } from '@userInterface/react/state';

export default function ReactMeetupApp({ Component, props }): JSX.Element {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <GlobalStyle />
      <Provider store={store}>
        <Layout>
          <Component {...props} />
        </Layout>
      </Provider>
    </>
  );
}
