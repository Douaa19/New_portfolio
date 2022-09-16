import React from "react";
import { CardGroup, Row, Col, CardTitle, CardText, Card } from "reactstrap";

function Cards() {
  // styles
  const styles = {
    row: {
      display: "flex",
      justifyContent: "center",
    },
    card: {
      background: "none",
      color: "#FFF",
      border: "1px solid #454545",
      minHeight: "max-content",
      maxHeight: "22rem",
      padding: "1rem 1rem",
      marginBottom: "1.5rem",
      textAlign: "center",
    },
    title: {
      color: "#FFF",
      fontWeight: "600",
      fontSize: "24px",
      padding: "0 0 14px  0",
      borderBottom: "1px solid #676FA3",
    },
    text: {
      color: "#FFF",
      fontSize: "16px",
      padding: "0.5rem 1.5rem"
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
            <CardText style={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. cidid
            </CardText>
          </Card>
        </Col>
      </Row>
    </CardGroup>
  );
}

export default Cards;
