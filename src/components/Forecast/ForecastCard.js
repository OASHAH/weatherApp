import React from "react";
import classes from "./Forecast.module.css";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

const ForecastCard = ({ data }) => {
  return <DayCard data={data}></DayCard>;
};



const DayCard = ({ data }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={data.day.condition.icon}></Card.Img>
      <Card.Body>
        <Card.Title>
          <strong>{data.date}</strong>
        </Card.Title>
        <ListGroup>
          <ListGroupItem>
            <strong>Avg </strong> {data.day.avgtemp_c}
            <strong> (C)</strong>
          </ListGroupItem>
          <ListGroupItem>
            <strong>Max </strong> {data.day.maxtemp_c}
            <strong> (C)</strong>
          </ListGroupItem>
          <ListGroupItem>
            <strong>Min </strong> {data.day.mintemp_c} <strong> (C)</strong>
          </ListGroupItem>
          <ListGroupItem>
            <strong>Wind </strong> {data.day.maxwind_mph}{" "}
            <strong> (Mph)</strong>
          </ListGroupItem>
          <ListGroupItem>
            <strong>Humidity </strong> {data.day.avghumidity}
            <strong>%</strong>
          </ListGroupItem>
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default ForecastCard;
