import React, { useEffect } from 'react';
import Head from 'next/head';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '@userInterface/react/state';
import MeetupItem from '@components/MeetupItem';
import { MeetupsContainer } from './AllMeetupsPage.styled';
import * as meetupActionCreators from '@state/actionCreators/meetup/meetupActionCreators';

export default function AllMeetups(): JSX.Element {
  const meetups = useSelector(
    (state: RootState) => state.meetupReducer.meetups
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(meetupActionCreators.getAllMeetups());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Head>
        <title>React Meetups</title>
      </Head>
      <section>
        <h1>All Meetups</h1>
        <MeetupsContainer>
          {meetups.map((meetup) => (
            <MeetupItem key={meetup.id} meetup={meetup} />
          ))}
        </MeetupsContainer>
      </section>
    </>
  );
}
