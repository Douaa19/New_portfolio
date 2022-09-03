import React from "react";
import { Container, Button } from "reactstrap";
import MyFile from "file:///C:/Users/Youcode/Documents/CV/Douaa%20Larif%20-%20JavaScript.pdf";

function Description() {
  // -----------------------
  // styles
  const styles = {
    container: {
      // border: "1px solid black",
      display: "flex",
      padding: "0 0 0 4rem",
      textTransform: "uppercase",
      fontFamily: "'Montserrat', sans-serif",
    },
    small: {
      color: "#FF5959",
      fontWeight: "600",
      fontSize: "22px",
      letterSpacing: "4px",
    },
    big: {
      color: "#F4F4F4",
      fontWeight: "600",
      fontSize: "40px",
      width: "max-content",
      borderBottom: "3px solid #FF5959",
      letterSpacing: "4px",
    },
    text: {
      color: "#F4F4F4",
      fontSize: "16px",
      padding: "0 0 1rem 0",
    },
    p: {
      marginBottom: "0",
    },
    infos: {
      color: "#F4F4F4",
      fontSize: "16px",
      borderLeft: "1px solid #FF5959",
      padding: "20px 30px",
    },
    info: {
      display: "flex",
      flexDirection: "column",
    },
    span: {
      padding: "0.2rem 0",
    },
    link: {
      color: "#F4F4F4",
      textDecoration: "none",
    },
    div_btn: {
      display: "flex",
      justifyContent: "center",
    },
    btn: {
      backgroundColor: "#FF5959",
      padding: "0.9rem 2rem",
      textTransform: "uppercase",
      fontWeight: "bold",
      borderRadius: "4px",
      outline: "none",
      border: "none",
      fontSize: "16px",
      margin: "1rem 0",
      letterSpacing: "2px",
    },
  };
  // -----------------------
  return (
    <>
      <Container style={styles.container}>
        <div className="content">
          <h2 style={styles.small}>discover</h2>
          <h1 style={styles.big}>about me</h1>
          <div className="text" style={styles.text}>
            <p style={styles.p}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="infos" style={styles.infos}>
            <div className="info1" style={styles.info}>
              <span style={styles.span}>name: douaa larif</span>
              <span style={styles.span}>age: 25</span>
              <span style={styles.span}>mobile: +212640731248</span>
            </div>
            <div className="info2" style={styles.info}>
              <span style={styles.span}>email: doua.larif@gmail.com</span>
              <span style={styles.span}>address: morocco, youssoufia</span>
              <span style={styles.span}>
                linkedin:{" "}
                <a
                  href="https://www.linkedin.com/in/douaa-larif-07279a20b/"
                  style={styles.link}
                >
                  douaa larif
                </a>
              </span>
            </div>
          </div>
          <div className="btn" style={styles.div_btn}>
            <Button style={styles.btn}>
              <a href={MyFile} download style={styles.link}>
                download cv
              </a>
            </Button>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Description;
