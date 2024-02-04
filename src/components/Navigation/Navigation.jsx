import React from 'react';
import { NavLink } from 'react-router-dom';
import UserMenu from '../UserMenu/UserMenu';
import css from './Navigation.module.css';
const Navigation = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink
              className={({ isActive }) =>
                `${css.navLink} ${isActive ? css.active : ''}`
              }
              to="/register"
            >
              Register
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `${css.navLink} ${isActive ? css.active : ''}`
              }
              to="/login"
            >
              Login
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `${css.navLink} ${isActive ? css.active : ''}`
              }
              to="/contacts"
            >
              Contacts
            </NavLink>
          </li>
        </ul>
      </nav>
      <UserMenu />
    </header>
  );
};

export default Navigation;
