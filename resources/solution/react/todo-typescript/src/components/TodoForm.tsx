import { Button, Col, Input, Row } from "antd";
import React from "react";

interface TodoFormProps {
  addTodo: (value: string) => void;
}
interface TodoFormState {
  inputValue: string;
}

class TodoForm extends React.Component<TodoFormProps, TodoFormState> {
  constructor(props: TodoFormProps) {
    super(props);
    this.state = {
      inputValue: "",
    };
  }

  updateInputValue(evt: any) {
    this.setState({
      inputValue: evt.target.value,
    });
  }

  render() {
    return (
      <Row justify="center" style={{ marginTop: "20px" }}>
        <Col span={6}>
          <Input value={this.state.inputValue} onChange={(evt) => this.updateInputValue(evt)} size="large" />
        </Col>
        <Col span={2}>
          <Button
            size="large"
            type="primary"
            onClick={() => {
              this.props.addTodo(this.state.inputValue);
              this.setState({ inputValue: "" });
            }}
          >
            {" "}
            +
          </Button>
        </Col>
      </Row>
    );
  }
}

export default TodoForm;
