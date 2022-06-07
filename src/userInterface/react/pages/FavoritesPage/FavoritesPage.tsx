import { useEffect } from 'react';
import Head from 'next/head';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '@userInterface/react/state';
import MeetupItem from '@components/MeetupItem';
import * as meetupActionCreators from '@state/actionCreators/meetup/meetupActionCreators';
import { MeetupsContainer } from './FavoritesPage.styled';

export default function FavoritesPage(): JSX.Element {
  const dispatch = useDispatch();

  const { meetups, addToFavoritesSuccess, removeFromFavoritesSuccess } =
    useSelector((state: RootState) => state.meetupReducer);

  const favoriteMeetups = meetups.filter((meetup) => meetup.isFavorite);

  useEffect(() => {
    if (addToFavoritesSuccess || removeFromFavoritesSuccess) {
      dispatch(meetupActionCreators.getAllMeetups());
      dispatch(meetupActionCreators.clean());
    }
  }, [dispatch, addToFavoritesSuccess, removeFromFavoritesSuccess]);

  return (
    <>
      <Head>
        <title>React Meetups - Favorites</title>
      </Head>
      <section>
        <h1>Favorites Page</h1>
        <MeetupsContainer>
          {favoriteMeetups.map((meetup) => (
            <MeetupItem key={meetup.id} meetup={meetup} />
          ))}
          {favoriteMeetups.length === 0 && (
            <h3>You doesn&apos;t have favorites yet</h3>
          )}
        </MeetupsContainer>
      </section>
    </>
  );
}
