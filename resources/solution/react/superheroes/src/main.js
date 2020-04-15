import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import Superheroes from "./db/superheroes";

const Main = () => {
  const superheroesWrapper = () => {
    return Superheroes.map((superhero, index) => {
      return (
        <Card className="superhero" style={{ width: "30%" }} key={index}>
          <Card.Img variant="top" src={"/img/superheroes/" + superhero.image} />
          <Card.Title>{superhero.name}</Card.Title>
          <Button href={"#superhero/" + superhero.id} variant="primary">Show me more!</Button>
        </Card>
      );
    });
  };

  return (
    <>
      <Row>
        <Col>
          <h1>Wellcome to React</h1>
          <p>This project is just to practice</p>
        </Col>
      </Row>
      <Row>{superheroesWrapper()}</Row>
    </>
  );
};

export default Main;
