import { Outlet } from 'react-router-dom';
//import { Route, Routes } from 'react-router-dom';
//import { NavLink } from 'react-router-dom';
import { Link } from './Header.styled';

export const Header = () => {
  return (
    <div>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};
