import React from "react";
import { Col, Row } from "react-bootstrap";
import { Redirect } from "react-router-dom";

import Superheroes from "./db/superheroes";

const Superhero = (props) => {
  const { id } = props || props.match.params;

  const selectedSuperheroArray = Superheroes.filter((s) => s.id === +id); // filter always return an array
  const selectedSuperhero = selectedSuperheroArray[0]; // get the first element from the filter

  if (!selectedSuperhero) {
    return <Redirect to={"/404"} />;
  }

  return (
    <Row>
      <Col style={{ textAlign: "center" }}>
        <img style={{maxWidth: "100%"}} src={"/img/superheroes/" + selectedSuperhero.image} />
      </Col>
      <Col style={{ textAlign: "center" }}>
        <h2>{selectedSuperhero.name}</h2>
        <p>{selectedSuperhero.description}</p>
      </Col>
    </Row>
  );
};

export default Superhero;
