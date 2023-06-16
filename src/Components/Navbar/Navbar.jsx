import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
const Navbar = () => {
  return (
    <div className="nav">
      <Link className="nav__item" to="/">
        Home
      </Link>

      <Link className="nav__item" to="/createDrink">
        Add drink to a list
      </Link>

      <Link className="nav__item" to="/list/edit/${id}">
        Edit drink
      </Link>
    </div>
  );
};

export default Navbar;
