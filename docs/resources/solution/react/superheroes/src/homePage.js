import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";

import Superheroes from "./db/superheroes";
import Modal from "./modal"

const Main = () => {
  const [modalShow, setModalShow] = React.useState({show: false, id: null});

  const superheroesWrapper = () => {
    return Superheroes.map((superhero, index) => {
      return (
        <Card className="superhero" style={{ width: "30%" }} key={index}>
          <Card.Img variant="top" src={"/img/superheroes/" + superhero.image} />
          <Card.Title>{superhero.name}</Card.Title>
          <Button href={"#superhero/" + superhero.id} variant="primary">
            Show me more!
          </Button>
          <br />
          <Button onClick={()=> setModalShow({show: true, id: superhero.id})} variant="secondary">
            Open in the modal
          </Button>
          <br />
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
      <Modal show={modalShow.show} id={modalShow.id} onHide={()=> setModalShow({show: false})} />
    </>
  );
};

export default Main;
