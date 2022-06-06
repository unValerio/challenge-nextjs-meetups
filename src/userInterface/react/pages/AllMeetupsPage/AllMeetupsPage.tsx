import { useEffect } from 'react';
import Head from 'next/head';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '@userInterface/react/state';
import MeetupItem from '@components/MeetupItem';
import { MeetupsContainer } from './AllMeetupsPage.styled';
import * as meetupActionCreators from '@state/actionCreators/meetup/meetupActionCreators';

export default function AllMeetups(): JSX.Element {
  const dispatch = useDispatch();

  const { meetups, addToFavoritesSuccess, removeFromFavoritesSuccess } =
    useSelector((state: RootState) => state.meetupReducer);

  useEffect(() => {
    if (addToFavoritesSuccess || removeFromFavoritesSuccess) {
      dispatch(meetupActionCreators.getAllMeetups());
      dispatch(meetupActionCreators.clean());
    }
  }, [dispatch, addToFavoritesSuccess, removeFromFavoritesSuccess]);

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
