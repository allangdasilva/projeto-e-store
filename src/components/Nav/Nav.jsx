import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import style from "./Nav.module.css";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/user/login-reducer";

const Nav = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.login);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login", { replace: true });
  };

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
          {data?.access_token && (
            <li>
              <NavLink to={`/favorites`}>Fav</NavLink>
            </li>
          )}

          <li>
            {data?.access_token ? (
              <NavLink to={`/cart`}>Cart</NavLink>
            ) : (
              <NavLink to={`/login`}>Login</NavLink>
            )}
          </li>
          <li>
            {data?.access_token ? (
              <p>{data.name}</p>
            ) : (
              <NavLink to={`/signup`}>Sign Up</NavLink>
            )}
          </li>
          {data?.access_token && (
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
