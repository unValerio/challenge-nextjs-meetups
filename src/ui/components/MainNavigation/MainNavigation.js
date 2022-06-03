import React from 'react';
import Link from 'next/link';

import useVisibilityOnScroll from '../../../utils/hooks/useVisibilityOnScroll';
import {
  Header,
  Logo,
  List,
  MenuOption,
  MenuLink,
  Badge,
} from './MainNavigation.styled';

export default function MainNavigation() {
  const { visible } = useVisibilityOnScroll();

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
                <Badge>{0}</Badge>
              </MenuLink>
            </Link>
          </MenuOption>
        </List>
      </nav>
    </Header>
  );
}
