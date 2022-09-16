import React from "react";
import {
  CardGroup,
  Card,
  Row,
  Col,
  CardTitle,
  CardText,
} from "reactstrap";

function Crads() {
  // styles
  const styles = {
    row: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: "1.5rem",
    },
    card: {
      background: "none",
      color: "#FFF",
      border: "1px solid #454545",
      minHeight: "19rem",
      maxHeight: "22rem",
      padding: "2rem 2.5rem",
      marginBottom: "1.5rem",
    },
    title: {
      color: "#676FA3",
      fontWeight: "600",
      fontSize: "24px",
      padding: "0 0 14px  0",
    },
    smallTitle: {
      color: "#FFF",
      fontWeight: "bold",
      fontSize: "18px",
      padding: "0 0 14px  0",
    },
    text: {
      color: "#FFF",
      fontSize: "16px",
    },
  };

  return (
    <CardGroup>
      <Row style={styles.row}>
        <Col sm="5">
          <Card body style={styles.card}>
            <CardTitle tag="h5" style={styles.title}>
              Project 1
            </CardTitle>
            <h5 style={styles.smallTitle}>technologies</h5>
            <CardText style={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incidid
            </CardText>
          </Card>
        </Col>
        <Col sm="5">
          <Card body style={styles.card}>
            <CardTitle tag="h5" style={styles.title}>
              Project 1
            </CardTitle>
            <h5 style={styles.smallTitle}>technologies</h5>
            <CardText style={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incidid
            </CardText>
          </Card>
        </Col>
        <Col sm="5">
          <Card body style={styles.card}>
            <CardTitle tag="h5" style={styles.title}>
              Project 1
            </CardTitle>
            <h5 style={styles.smallTitle}>technologies</h5>
            <CardText style={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incidid
            </CardText>
          </Card>
        </Col>
        <Col sm="5">
          <Card body style={styles.card}>
            <CardTitle tag="h5" style={styles.title}>
              Project 1
            </CardTitle>
            <h5 style={styles.smallTitle}>technologies</h5>
            <CardText style={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incidid
            </CardText>
          </Card>
        </Col>
      </Row>
    </CardGroup>
  );
}

export default Crads;
