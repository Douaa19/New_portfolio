import React from "react";
import { Button, Card, Col, Row } from "reactstrap";

function Sections() {
  // styles
  const styles = {
    card: {
      border: "none",
      margin: "0 0 1rem",
    },
    btn: {
      border: "none",
      padding: "0.8rem 0",
      textTransform: "uppercase",
      fontFamily: "'Montserrat', sans-serif",
      letterSpacing: "2px",
      background: "#676FA3",
      width: "100%",
    },
    link: {
      color: "#FFFFFF",
      textDecoration: "none",
      fontSize: "18px",
    },
  };

  const showProject = () => {
    
  }

  return (
    <div>
      <Row>
        <Col sm="3">
          <Card style={styles.card}>
            <a href="" style={styles.link}>
              <Button style={styles.btn} onClick={() => showProject()}>projects</Button>
            </a>
          </Card>
        </Col>
        <Col sm="3">
          <Card style={styles.card}>
            <a href="" style={styles.link}>
              <Button style={styles.btn}>services</Button>
            </a>
          </Card>
        </Col>
        <Col sm="3">
          <Card style={styles.card}>
            <a href="" style={styles.link}>
              <Button style={styles.btn}>tachnologies</Button>
            </a>
          </Card>
        </Col>
        <Col sm="3">
          <Card style={styles.card}>
            <a href="" style={styles.link}>
              <Button style={styles.btn}>parts</Button>
            </a>
          </Card>
        </Col>
        <Col sm="3">
          <Card style={styles.card}>
            <a href="" style={styles.link}>
              <Button style={styles.btn}>informations</Button>
            </a>
          </Card>
        </Col>
        <Col sm="3">
          <Card style={styles.card}>
            <a href="" style={styles.link}>
              <Button style={styles.btn}>clinets</Button>
            </a>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Sections;
