import React from 'react';
import {Modal as ModalBS, Button} from 'react-bootstrap';
import Superhero from './superhero';

const Modal = (props) => {
  const id = props.id || 1;

  return (
    <ModalBS {...props} size="lg" centered>
      <ModalBS.Header closeButton>
        <ModalBS.Title>Superhero Information</ModalBS.Title>
      </ModalBS.Header>
      <ModalBS.Body>
        <Superhero id={id} />
      </ModalBS.Body>
      <ModalBS.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </ModalBS.Footer>
    </ModalBS>
  )
}

export default Modal;