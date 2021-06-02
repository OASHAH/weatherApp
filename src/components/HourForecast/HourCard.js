import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

const HourCard = ({ data }) => {
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={data.condition.icon}></Card.Img>
        <Card.Body>
          <Card.Title>
            <strong>{data.time}</strong>
          </Card.Title>
          <ListGroup>
            <ListGroupItem>
              <strong>Temp </strong> {data.temp_c}
              <strong> (C)</strong>
            </ListGroupItem>
           
            <ListGroupItem>
              <strong>Wind </strong> {data.maxwind_mph}{" "}
              <strong> (Mph)</strong>
            </ListGroupItem>
            <ListGroupItem>
              <strong>Humidity </strong> {data.humidity}
              <strong>%</strong>
            </ListGroupItem>
          </ListGroup>
        </Card.Body>
      </Card>
    );
  };

  export default HourCard;