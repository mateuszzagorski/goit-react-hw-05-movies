import { Outlet } from 'react-router-dom';
//import { Route, Routes } from 'react-router-dom';
//import { NavLink } from 'react-router-dom';
import { Link, HeaderStyled } from '../components/Header.styled';

export const Header = () => {
  return (
    <div>
      <HeaderStyled>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </HeaderStyled>
      <Outlet />
    </div>
  );
};
