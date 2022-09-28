import React, { useState } from "react";
import { Container, Form, Button, FormGroup, Input } from "reactstrap";
import { addInfo } from "../../../../services/infosServices";

function AddForm() {
  const header =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMjg5MzIzMzkxMTIyNWJmZjBkNGQ2MSIsImVtYWlsIjoiZG91YS5sYXJpZkBnbWFpbC5jb20iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NjQyNzI1NTB9.YHatDqPv3bm4Ioejlwz16U-1zQ4x17kMoD4aLh1Grtk";
  //
  const [values, setValues] = useState({
    phone: "",
    email: "",
    address: "",
  });

  // handles
  const handlePhone = (e) => {
    setValues({ ...values, phone: e.target.value });
  };
  const handleEmail = (e) => {
    setValues({ ...values, email: e.target.value });
  };
  const handleAddress = (e) => {
    setValues({ ...values, address: e.target.value });
  };

  // handle submit function
  const handleSubmit = async (e) => {
    e.preventDefault();
    await addInfo(values, header).then((response) => {
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
          <h4 style={styles.title}>Add Info</h4>
        </div>
        <Form style={styles.form} method="POST" onSubmit={handleSubmit}>
          <FormGroup className="mb-3">
            <Input
              type="phone"
              placeholder="phone"
              style={styles.input}
              nmae="project_name"
              value={values.phone}
              onChange={handlePhone}
            />
          </FormGroup>
          <FormGroup className="mb-3">
            <Input
              id="exampleText"
              type="email"
              placeholder="email"
              style={styles.input}
              value={values.email}
              onChange={handleEmail}
            />
          </FormGroup>
          <FormGroup className="mb-3">
            <Input
              type="text"
              placeholder="address"
              style={styles.input}
              value={values.address}
              onChange={handleAddress}
            />
          </FormGroup>
          <div className="btns d-flex">
            <Button type="submit" style={styles.btn}>
              add info
            </Button>
          </div>
        </Form>
      </Container>
    </>
  );
}

export default AddForm;
