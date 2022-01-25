import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
      <div className="container">
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <i className="fas fa-home" />
                Alkuun
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/luo" className="nav-link">
                Lisää Urheilija
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/urheilijat" className="nav-link">
                Näytä urheilijat
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
