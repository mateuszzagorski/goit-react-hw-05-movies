import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Loader from '../components/loader/Loader';
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
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
}
