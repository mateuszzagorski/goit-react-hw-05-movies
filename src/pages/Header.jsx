import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Link, HeaderStyled } from '../components/header/Header.styled';

export default function Header() {
  return (
    <>
      <HeaderStyled>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </HeaderStyled>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
}
