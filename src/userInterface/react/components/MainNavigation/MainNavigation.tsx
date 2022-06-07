import React from 'react';
import Link from 'next/link';

import MeetupEntity from '@domain/meetup/MeetupEntity';
import useVisibilityOnScroll from '../../utils/hooks/useVisibilityOnScroll';
import {
  Header,
  Logo,
  List,
  MenuOption,
  MenuLink,
  Badge,
} from './MainNavigation.styled';

type MeetupList = Array<MeetupEntity>;

export const findFavoriteMeetupsTotal = (meetups: MeetupList): number =>
  meetups.reduce((total, meetup) => {
    if (meetup.isFavorite) {
      return total + 1;
    }
    return total;
  }, 0);

export default function MainNavigation({ meetups }): JSX.Element {
  const { visible } = useVisibilityOnScroll();
  const favoriteMeetupsTotal = findFavoriteMeetupsTotal(meetups);

  return (
    <Header visible={visible} data-test="navigation-header">
      <Logo>React Meetups</Logo>
      <nav>
        <List>
          <MenuOption>
            <Link href="/">
              <MenuLink>All Meetups</MenuLink>
            </Link>
          </MenuOption>

          <MenuOption>
            <Link href="/new-meetup">
              <MenuLink>Add New Meetup</MenuLink>
            </Link>
          </MenuOption>
          <MenuOption>
            <Link href="/favorites">
              <MenuLink>
                My Favorites
                <Badge>{favoriteMeetupsTotal}</Badge>
              </MenuLink>
            </Link>
          </MenuOption>
        </List>
      </nav>
    </Header>
  );
}
