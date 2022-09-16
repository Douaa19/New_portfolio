import React from "react";
import { Container, Form, FormGroup, Input, Button } from "reactstrap";
import Cards from "./Cards";

function Contact() {
  // styles
  const styles = {
    container: {
      padding: "3rem 0",
      color: "#FFFFFF",
      textTransform: "uppercase",
      fontFamily: "'Montserrat', sans-serif",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    },
    big: {
      color: "#F4F4F4",
      fontWeight: "600",
      fontSize: "40px",
      width: "max-content",
      borderBottom: "3px solid #FF5959",
      letterSpacing: "4px",
      marginBottom: "2rem",
    },
    contact: {
      width: "100%",
      marginTop: "1.5rem",
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
    },
    form: {
      width: "50%",
      display: "flex",
      flexDirection: "column",
      paddingBottom: "3rem"
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
    },
  };

  return (
    <div style={{ backgroundColor: "#101010" }}>
      <Container style={styles.container}>
        <div className="sectionTitle">
          <h1 style={styles.big}>contact me</h1>
        </div>
        <div className="contact" style={styles.contact}>
          <Form style={styles.form}>
            <FormGroup>
              <Input
                id="exampleEmail"
                name="name"
                placeholder="name"
                type="text"
                style={styles.input}
              />
            </FormGroup>
            <FormGroup>
              <Input
                id="exampleEmail"
                name="email"
                placeholder="email"
                type="email"
                style={styles.input}
              />
            </FormGroup>
            <FormGroup>
              <Input
                id="exampleText"
                name="text"
                type="textarea"
                placeholder="message"
                style={styles.input}
              />
            </FormGroup>
            <div className="btn">
              <Button style={styles.btn}>send message</Button>
            </div>
          </Form>
          <Cards />
        </div>
      </Container>
    </div>
  );
}

export default Contact;
