import Head from 'next/head';

import MeetupItem from './MeetupItem';
import { MeetupsContainer } from './AllMeetupsPage.styled';

export default function AllMeetups() {
  return (
    <>
      <Head>
        <title>React Meetups</title>
      </Head>
      <section>
        <h1>All Meetups</h1>
        <MeetupsContainer>
          <MeetupItem />
          <MeetupItem />
          <MeetupItem />
          <MeetupItem />
        </MeetupsContainer>
      </section>
    </>
  );
}
