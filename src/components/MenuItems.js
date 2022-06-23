import React from "react";
import { Link, Outlet } from "react-router-dom";

const MenuItems = ({ items }) => {
  return (
    <>
         <div className="container-fluid">
        <div className="row">
          <div className="col-2 submenu">
            <ul>
              {items.map((item) => (
                <li key={item.id}>
                  <Link to={item.name}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-6" style={{margin:"5%"}}>
            <Outlet />
          </div>
          <div className="col-4"></div>
        </div>
      </div>
    </>
  );
};
export default MenuItems;
