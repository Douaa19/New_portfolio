import React, { useState } from "react";
import { Container, Form, Button, FormGroup, Input } from "reactstrap";
import { addPart } from "../../../../services/partsServices";

function AddForm() {
  const header =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMjg5MzIzMzkxMTIyNWJmZjBkNGQ2MSIsImVtYWlsIjoiZG91YS5sYXJpZkBnbWFpbC5jb20iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NjQyNzI1NTB9.YHatDqPv3bm4Ioejlwz16U-1zQ4x17kMoD4aLh1Grtk";
  //
  const [values, setValues] = useState({
    part_name: "",
    // technos: "",
  });

  // handles
  const handleName = (e) => {
    setValues({ ...values, part_name: e.target.value });
  };
  // const handleTachnos = (e) => {
  //   setValues({ ...values, technos: e.target.value });
  // };

  // handle submit function
  const handleSubmit = async (e) => {
    e.preventDefault();
    await addPart(values, header).then((response) => {
      window.location = "/dashboard";
    });
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
          <h4 style={styles.title}>Add part</h4>
        </div>
        <Form style={styles.form} method="POST" onSubmit={handleSubmit}>
          <FormGroup className="mb-3">
            <Input
              type="text"
              placeholder="name"
              style={styles.input}
              nmae="part_name"
              value={values.name}
              onChange={handleName}
            />
          </FormGroup>
          {/* <FormGroup className="mb-3">
            <Input
              id="exampleText"
              type="email"
              placeholder="email"
              style={styles.input}
              value={values.technos}
              onChange={handleTachnos}
            />
          </FormGroup> */}
          <div className="btns d-flex">
            <Button type="submit" style={styles.btn}>
              add part
            </Button>
          </div>
        </Form>
      </Container>
    </>
  );
}

export default AddForm;
