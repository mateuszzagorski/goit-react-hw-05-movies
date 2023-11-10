import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  padding: 10px;
  border-radius: 10px;
  text-decoration: none;
  color: white;
  font-weight: 500;

  &.active {
    background-color: orange;
  }
`;

export const HeaderStyled = styled.header`
  & > nav {
    display: flex;
    justify-content: space-around;
    margin-bottom: 20px;
    padding-top: 20px;
  }
`;
