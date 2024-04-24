import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
import { Container } from 'components/Container/Container';

export const Header = () => {
  return (
    <header className={s.header}>
      <Container>
        <nav className={s.nav}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              [s.navLink, isActive ? s.active : ''].join(' ')
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/movies"
            className={({ isActive }) =>
              [s.navLink, isActive ? s.active : ''].join(' ')
            }
          >
            Movies
          </NavLink>
        </nav>
      </Container>
    </header>
  );
};
