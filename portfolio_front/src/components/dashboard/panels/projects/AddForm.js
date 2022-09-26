import React from "react";
import { Container, Form, Button, FormGroup, Input } from "reactstrap";

function AddForm() {
  // styles
  const styles = {
    title: {},
    form: {
      width: "60%",
    },
    input: {},
  };
  return (
    <>
      <Container styles={styles.container}>
        <div className="title text-center">
          <h4>Add project</h4>
        </div>
        <Form style={styles.form}>
          <FormGroup className="mb-3" controlId="formBasicEmail">
            <Input type="text" placeholder="project name" nmae="project_name" />
          </FormGroup>
          <FormGroup className="mb-3" controlId="formBasicEmail">
            <Input
              id="exampleText"
              name="description"
              type="textarea"
              placeholder="description"
              style={styles.input}
            />
          </FormGroup>
          <FormGroup className="mb-3" controlId="formBasicEmail">
            <Input type="url" placeholder="link project" name="" />
          </FormGroup>
          <FormGroup className="mb-3" controlId="formBasicEmail">
            <Input type="checkbox" placeholder="technologies" />html
          </FormGroup>
          <Button variant="primary" type="submit">
            add project
          </Button>
        </Form>
      </Container>
    </>
  );
}

export default AddForm;
