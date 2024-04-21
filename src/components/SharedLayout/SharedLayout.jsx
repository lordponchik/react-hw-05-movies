import { Outlet, NavLink } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/">HomePage</NavLink>
          <NavLink to="/movies">MoviesPage</NavLink>
        </nav>
      </header>
      <Outlet></Outlet>
    </>
  );
};
