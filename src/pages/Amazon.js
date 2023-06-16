import React, { useState } from "react";
import list from "../components/Data";
import Cards from "../components/Card";
import "../assets/css/Amazon.css";

const Amazon = ({ handleClick }) => {
  return (
    <section>
      {list.map((item) => (
        <Cards key={item.id} item={item} handleClick={handleClick} />
      ))}
    </section>
  );
};

export default Amazon;