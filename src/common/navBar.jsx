import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          Learn-react
        </Link>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <NavLink className="nav-item nav-link" to="/movies">
            Movies
          </NavLink>
          <NavLink className="nav-item nav-link" to="/customers">
            Customers
          </NavLink>
          <NavLink className="nav-item nav-link" to="/rentals">
            Rentals
          </NavLink>
          <NavLink className=" nav-item nav-link" to="/login">
            Login
          </NavLink>
          <NavLink className=" nav-item nav-link" to="/register">
            Register
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
