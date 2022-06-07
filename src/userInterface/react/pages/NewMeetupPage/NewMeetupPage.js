import Head from 'next/head';

import NewMeetupForm from './NewMeetupForm';

export default function NewMeetupPage() {
  return (
    <>
      <Head>
        <title>React Meetups - New Meetup</title>
      </Head>
      <section>
        <h1>Add New Meetup</h1>
        <NewMeetupForm />
      </section>
    </>
  );
}
