import React from "react";
import { Link, Outlet } from "react-router-dom";

const Locations = () => {
  return (
    <div className="Page">
      <p>Browse our locations - or use the search facility to find particular restaurant</p>
      <nav className="navbar navbar-expand-sm bg-light navbar-dark bg-custom">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/locations/list" className="nav-link">
                List
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/locations/search" className="nav-link">
                Search
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <Outlet />
    </div>
  );
};

export default Locations;
