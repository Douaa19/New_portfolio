import React from "react";
import { Container, Form, Button, FormGroup, Input } from "reactstrap";

function AddForm(addPro) {
  const hidForm = () => {
    addPro = false;
  };
  // styles
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    title: {
      color: "#FF5959",
      fontWeight: "bold",
    },
    form: {
      width: "50%",
      display: "flex",
      flexDirection: "column",
      paddingBottom: "3rem",
    },
    input: {
      background: "none",
      border: "1px solid #454545",
      textTransform: "uppercase",
      color: "#D9D9D9",
      paddingLeft: "1.2rem",
      fontSize: "16px",
    },
    btn: {
      textTransform: "uppercase",
      width: "35%",
      padding: "0.5rem",
      fontWeight: "bold",
      fontSize: "16px",
      background: "#676FA3",
      border: "none",
      margin: "0 0.2rem",
    },
  };
  return (
    <>
      <Container style={styles.container}>
        <div className="title text-center">
          <h4 style={styles.title}>Add project</h4>
        </div>
        <Form style={styles.form}>
          <FormGroup className="mb-3" controlId="formBasicEmail">
            <Input
              type="text"
              placeholder="project name"
              style={styles.input}
              nmae="project_name"
            />
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
            <Input
              type="url"
              placeholder="link project"
              name=""
              style={styles.input}
            />
          </FormGroup>
          <FormGroup className="mb-3" controlId="formBasicEmail">
            <Input type="checkbox" placeholder="technologies" />
            html
          </FormGroup>
          <div className="btns d-flex">
            <Button variant="primary" type="submit" style={styles.btn}>
              add project
            </Button>
            <Button
              variant="warning"
              type="submit"
              style={styles.btn}
              onClick={() => hidForm()}
            >
              cancel
            </Button>
          </div>
        </Form>
      </Container>
    </>
  );
}

export default AddForm;
