import React from 'react';
import Link from 'next/link';

import useVisibilityOnScroll from '../../utils/hooks/useVisibilityOnScroll';
import {
  Header,
  Logo,
  List,
  MenuOption,
  MenuLink,
  Badge,
} from './MainNavigation.styled';

export default function MainNavigation({ meetups }): JSX.Element {
  const { visible } = useVisibilityOnScroll();

  const favoriteMeetups = meetups.reduce((total, meetup) => {
    if (meetup.isFavorite) {
      return total + 1;
    }
    return total;
  }, 0);

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
                <Badge>{favoriteMeetups}</Badge>
              </MenuLink>
            </Link>
          </MenuOption>
        </List>
      </nav>
    </Header>
  );
}
