import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to={`/`}>Home</NavLink>
          </li>
          <li>
            <NavLink to={`/shop`}>Shop</NavLink>
          </li>
          <li>
            <NavLink to={`/about`}>About</NavLink>
          </li>
          <li>
            <NavLink to={`/contact`}>Contact</NavLink>
          </li>
          <li>
            <NavLink to={`/cart`}>Cart</NavLink>
          </li>
          <li>
            <NavLink to={`/login`}>Login</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
