import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Nav.module.css";

const Nav = () => {
  return (
    <header className={style.header}>
      <nav className={style.nav}>
        <NavLink to={`/`}>e-Store</NavLink>

        <ul className={style.ul}>
          <li>
            <NavLink to={`/shop`}>Shop</NavLink>
          </li>
          <li>
            <NavLink to={`/about`}>About</NavLink>
          </li>
          <li className={style.liSearch}>
            <input name="search" placeholder="Search..." type="search" />
            <button>Search</button>
          </li>
          <li>
            <NavLink to={`/cart`}>Cart</NavLink>
          </li>
          <li>
            <NavLink to={`/login`}>Login</NavLink>
          </li>
          <li>
            <NavLink to={`/favorites`}>Fav</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
