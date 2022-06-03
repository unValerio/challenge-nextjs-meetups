import Layout from '../ui/components/Layout';
import MainNavigation from '../ui/components/MainNavigation';

import GlobalStyle from '../ui/theme/GlobalStyle/GlobalStyle';

function ReactMeetup({ Component, props }) {
  return (
    <>
      <GlobalStyle />
      <MainNavigation />
      <Layout>
        <Component {...props} />
      </Layout>
    </>
  );
}

export default ReactMeetup;
