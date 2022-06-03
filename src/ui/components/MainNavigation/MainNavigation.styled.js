import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #77002e;
  padding: 0 10%;
`;

export const Logo = styled.div`
  font-size: 2rem;
  color: white;
  font-weight: bold;
`;

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: baseline;
`;

export const MenuOption = styled.li`
  margin-left: 3rem;
`;

export const MenuLink = styled.a`
  text-decoration: none;
  font-size: 1.5rem;
  color: #fcb8d2;
`;

// .header a:hover,
// .header a:active,
// .header a.active {
//   color: white;
// }

export const Badge = styled.span`
  background-color: #cc2062;
  color: white;
  border-radius: 12px;
  padding: 0 1rem;
  margin-left: 0.5rem;
`;
