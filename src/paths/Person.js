import React from "react";
import { Link, useParams } from "react-router-dom";

const Person = ({ people }) => {
  const { personId } = useParams();
  const currentItem = people.filter((entry) => {
    return entry.id === personId;
  });
  const { fullName, bio } = currentItem[0];
  return (
    <>
      <h2>Staff member: {fullName}</h2>
      <p>{bio}</p>
    </>
  );
};
export default Person;
