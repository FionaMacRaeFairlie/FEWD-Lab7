import React from "react";
import People from "./People";

const AboutUs = ({people}) => {
    return (
      <div>
        <h2>About Us</h2>
        <p>We are a small local chain of cafes specialising in simple wholesome, locally sourced dishes.</p>
        <p>It’s easy to dismiss chain restaurants in favour of a one-off local But, sometimes, big can mean better. We are a homegrown business that proved so popular we outgrew our original location and expanded to meet demand.</p>
        <p>We take pride in providing straightforward,good value food.</p>
        <People people={people} />
      </div>
    );
  };
  export default AboutUs