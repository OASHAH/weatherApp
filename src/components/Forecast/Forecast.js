import React from "react";
import ForecastCard from "./ForecastCard";
const Forecast = ({ forecastData, setHourData }) => {
  return (
    <div style={{ cursor: "pointer" }} onClick={()=>setHourData(forecastData)}>
      <ForecastCard data={forecastData}></ForecastCard>
    </div>
  );
};

export default Forecast;
