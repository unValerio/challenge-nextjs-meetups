import Head from 'next/head';

import MeetupItem from './MeetupItem';
import { MeetupsContainer } from './AllMeetupsPage.styled';

export default function AllMeetups() {
  const meetup = {
    id: 'm1',
    title: 'This is a first meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
    address: 'Meetupstreet 5, 12345 Meetup City',
    description:
      'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
  };

  return (
    <>
      <Head>
        <title>React Meetups</title>
      </Head>
      <section>
        <h1>All Meetups</h1>
        <MeetupsContainer>
          <MeetupItem meetup={meetup} />
        </MeetupsContainer>
      </section>
    </>
  );
}
