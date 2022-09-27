import React, { useState } from "react";
import { Container, Form, Button, FormGroup, Input } from "reactstrap";
import { addProject } from "../../../../services/projectsServices";

function AddForm() {
  const header =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMjg5MzIzMzkxMTIyNWJmZjBkNGQ2MSIsImVtYWlsIjoiZG91YS5sYXJpZkBnbWFpbC5jb20iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NjQyNzI1NTB9.YHatDqPv3bm4Ioejlwz16U-1zQ4x17kMoD4aLh1Grtk";
  //
  const [values, setValues] = useState({
    project_name: "",
    // technologies: [],
    description: "",
    link: "",
  });

  // handles
  const handleName = (e) => {
    setValues({ ...values, project_name: e.target.value });
  };
  // const handleTechnos = (e) => {
  //   setValues({ ...values, technologies: e.target.value });
  // };
  const handleDescription = (e) => {
    setValues({ ...values, description: e.target.value });
  };
  const handleLink = (e) => {
    setValues({ ...values, link: e.target.value });
  };

  // handle submit function
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (values && header) {
      await addProject(values, header).then((response) => {
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
          <h4 style={styles.title}>Add project</h4>
        </div>
        <Form style={styles.form} method="POST" onSubmit={handleSubmit}>
          <FormGroup className="mb-3">
            <Input
              type="text"
              placeholder="project name"
              style={styles.input}
              nmae="project_name"
              value={values.project_name}
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
          <FormGroup className="mb-3">
            <Input
              type="url"
              placeholder="link project"
              style={styles.input}
              value={values.link}
              onChange={handleLink}
            />
          </FormGroup>
          <FormGroup className="mb-3">
            <Input type="checkbox" placeholder="technologies" />
            html
          </FormGroup>
          <div className="btns d-flex">
            <Button type="submit" style={styles.btn}>
              add project
            </Button>
          </div>
        </Form>
      </Container>
    </>
  );
}

export default AddForm;
