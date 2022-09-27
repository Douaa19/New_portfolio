import React, { useState } from "react";
import { Container, Form, Button, FormGroup, Input } from "reactstrap";
import { addService } from "../../../../services/services";

function AddForm() {
  const header =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMjg5MzIzMzkxMTIyNWJmZjBkNGQ2MSIsImVtYWlsIjoiZG91YS5sYXJpZkBnbWFpbC5jb20iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NjQyNzI1NTB9.YHatDqPv3bm4Ioejlwz16U-1zQ4x17kMoD4aLh1Grtk";
  //
  const [values, setValues] = useState({
    service_name: "",
    description: "",
  });

  const handleName = (e) => {
    setValues({ ...values, service_name: e.target.value });
  };
  const handleDescription = (e) => {
    setValues({ ...values, description: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (values) {
      await addService(values, header).then((response) => {
        window.location = "/dashboard";
      });
    }
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
          <h4 style={styles.title}>Add service</h4>
        </div>
        <Form style={styles.form} method="post" onSubmit={handleSubmit}>
          <FormGroup className="mb-3">
            <Input
              type="text"
              placeholder="service name"
              style={styles.input}
              nmae="service_name"
              value={values.service_name}
              onChange={handleName}
            />
          </FormGroup>
          <FormGroup className="mb-3">
            <Input
              id="exampleText"
              type="textarea"
              placeholder="description"
              style={styles.input}
              value={values.description}
              onChange={handleDescription}
            />
          </FormGroup>
          <div className="btns d-flex">
            <Button type="submit" style={styles.btn}>
              add service
            </Button>
          </div>
        </Form>
      </Container>
    </>
  );
}

export default AddForm;
