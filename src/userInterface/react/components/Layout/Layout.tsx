import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Main } from './Layout.styled';
import * as meetupActionCreators from '@state/actionCreators/meetup/meetupActionCreators';
import MainNavigation from '@components/MainNavigation';

export default function Layout({ children }): JSX.Element {
  const dispatch = useDispatch();

  const meetups = useSelector(
    (state: RootState) => state.meetupReducer.meetups
  );

  useEffect(() => {
    dispatch(meetupActionCreators.getAllMeetups());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <MainNavigation meetups={meetups} />
      <Main>{children}</Main>
    </>
  );
}
