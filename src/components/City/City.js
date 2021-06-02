import React from "react";
import classes from "./city.module.css";

const City = ({ setCity, city, index }) => {
  return (
    <h3 className={classes["city"]} onClick={()=>{
        setCity(index);
    }}>
      {city}
    </h3>
  );
};

export default City;
