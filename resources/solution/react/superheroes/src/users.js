import React from "react";
import { Spinner, Row, Col, Table } from "react-bootstrap";

const Users = () => {
  const [state, setState] = React.useState({
    isLoading: true,
    users: [],
    error: null,
  });

  const getData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((respose) => respose.json())
      .then((data) =>
        setState({
          isLoading: false,
          users: data,
          error: null,
        })
      )
      .catch((error) =>
        this.setState({
          isLoading: false,
          users: [],
          error: error,
        })
      );
  };

  const usersWrapper = () => {
    const users = state.users;
    if (users && users.length > 0) {
      return users.map((user) => {
        return (
          <tr>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.website}</td>
          </tr>
        );
      });
    } else {
      return <></>;
    }
  };

  if (state.error) {
    return <div>There is an error: {state.error}</div>;
  }

  return (
    <>
      <h2>
        User information from{" "}
        <a href="https://jsonplaceholder.typicode.com/users">https://jsonplaceholder.typicode.com/users</a>
      </h2>
      <hr />
      {state.isLoading ? (
        <Row className="justify-content-lg-center">
          <Col className="col-md-auto">
            <Spinner size="lg" animation="border" role="status" />
            <span>Loading...</span>
            {getData()}
          </Col>
        </Row>
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Website</th>
            </tr>
          </thead>
          <tbody>{usersWrapper()}</tbody>
        </Table>
      )}
    </>
  );
};

export default Users;
