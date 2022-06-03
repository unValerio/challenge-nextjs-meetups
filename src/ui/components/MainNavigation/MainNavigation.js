import {
  Header,
  Logo,
  List,
  MenuOption,
  MenuLink,
  Badge,
} from './MainNavigation.styled';

export default function MainNavigation() {
  return (
    <Header data-test="navigation-header">
      <Logo>React Meetups</Logo>
      <nav>
        <List>
          <MenuOption>
            <MenuLink>All Meetups</MenuLink>
          </MenuOption>

          <MenuOption>
            <MenuLink>Add New Meetup</MenuLink>
          </MenuOption>
          <MenuOption>
            <MenuLink>
              My Favorites
              <Badge>{0}</Badge>
            </MenuLink>
          </MenuOption>
        </List>
      </nav>
    </Header>
  );
}
