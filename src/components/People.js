import React from "react";
import { Link, Outlet } from "react-router-dom";

const People = ({ people }) => {
  return (
    <>
      <h2>Meet our staff</h2>
      <ul>
        {people.map((person) => (
          <li key={person.id}>
            <Link to={`/aboutus/${person.id}`}>{person.fullName}</Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </>
  );
};
export default People;
