import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="nav-style">
      <ul>
        <li>
            <NavLink to='/' exact>
                Home
            </NavLink>
        </li>
        <li>
            <NavLink to='/about'>
                About
            </NavLink>
        </li>
        <li>
            <NavLink to='/login'>
                Login
            </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;
