import React from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  return (
    <>
      <nav class="navbar navbar-expand-sm bg-light navbar-dark bg-custom">
        <Header />
        <div class="container-fluid">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/aboutus" className="nav-link">
                About Us
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/menu" className="nav-link">
                Menu
              </Link>
            </li>
            <li class="nav-item">
              <Link to="locations" className="nav-link">
                Our Locations
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
