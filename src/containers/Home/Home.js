import React, { useState, useEffect } from "react";
import City from "../../components/City/City";
import classes from "./home.module.css";
import Forecast from "../../components/Forecast/Forecast";
import HourForecast from "../../components/HourForecast/HourForecast";
import useInterval from "../../components/UseInterval/useInterval";
const Home = () => {
  const [currentCity, setCurrentCity] = useState(0);
  const [weatherData, setWeatherData] = useState(null);
  const [hourData, setHourData] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const setCity = (cityName) => {
    setCurrentCity(() => cityName);
  };

  const [delay, setDelay] = useState(5*60*1000);

  
  useInterval(() => {
    let urls = [`http://api.weatherapi.com/v1/forecast.json?key=f75f0e5a06b84ef9be5184725210106&days=10&q=Lahore&aqi=no&alerts=no`,
  `http://api.weatherapi.com/v1/forecast.json?key=f75f0e5a06b84ef9be5184725210106&days=10&q=Islamabad&aqi=no&alerts=no`,
  `http://api.weatherapi.com/v1/forecast.json?key=f75f0e5a06b84ef9be5184725210106&days=10&q=Karachi&aqi=no&alerts=no`]
  Promise.all(urls.map(url =>
    fetch(url)
    ))
    .then(responses => 
      Promise.all(responses.map(res=>res.json())))
    .then(data => {
      setWeatherData(data);
      setIsLoaded(true);
    });
    
  }, delay);

    
  useEffect(() => {
    let urls = [`http://api.weatherapi.com/v1/forecast.json?key=f75f0e5a06b84ef9be5184725210106&days=10&q=Lahore&aqi=no&alerts=no`,
    `http://api.weatherapi.com/v1/forecast.json?key=f75f0e5a06b84ef9be5184725210106&days=10&q=Islamabad&aqi=no&alerts=no`,
    `http://api.weatherapi.com/v1/forecast.json?key=f75f0e5a06b84ef9be5184725210106&days=10&q=Karachi&aqi=no&alerts=no`]
    Promise.all(urls.map(url =>
      fetch(url)
      ))
      .then(responses => 
        Promise.all(responses.map(res=>res.json())))
      .then(data => {
        setWeatherData(data);
        setIsLoaded(true);
      });
}, [weatherData]);

  


  return (
    <div>
      <h1>Weather App</h1>
      <div className={classes["city-group"]}>
        {["Lahore", "Islamabad", "Karachi"].map((cityName,index) => (
          <City key={cityName} index={index} setCity={setCity} city={cityName}></City>
        ))}
      </div>
      <div className={classes["days"]}>
        {isLoaded && weatherData &&
          weatherData[currentCity].forecast.forecastday.map((forecastData) => (
            <Forecast
              key={forecastData.date}
              forecastData={forecastData}
              setHourData={setHourData}
            ></Forecast>
          ))}
      </div>

      {hourData && <h2>Selected Hour</h2>}
      <div className={classes["hours"]}>
        {hourData &&
          hourData.hour.map((hourForecast) => (
            <HourForecast
              key={hourForecast.time}
              data={hourForecast}
            ></HourForecast>
          ))}
      </div>
    </div>
  );
};

export default Home;
