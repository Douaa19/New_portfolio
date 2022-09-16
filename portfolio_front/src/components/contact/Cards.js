import React from "react";
import { Card, CardGroup, CardTitle, CardText, Row, Col } from "reactstrap";

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
      border: "1px solid #FF5959",
      minHeight: "8rem",
      maxHeight: "22rem",
      padding: "1rem 1rem",
      width: "25rem",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
    },
    title: {
      color: "#FFF",
      fontWeight: "600",
      fontSize: "18px",
    },
    text: {
      color: "#FFF",
      fontSize: "16px",
      display: "flex",
      flexDirection: "column",
    },
  };

  return (
    <>
      <CardGroup>
        <Row style={styles.row}>
          <Col sm="4">
            <Card body style={styles.card}>
              <CardTitle tag="h5" style={styles.title}>
                location
              </CardTitle>
              <CardText style={styles.text}>
                <span>morocco, youssoufia </span>
                <span>street abdessamad el kanfaoui n°12 </span>
              </CardText>
            </Card>
          </Col>
          <Col sm="4">
            <Card body style={styles.card}>
              <CardTitle tag="h5" style={styles.title}>
                email
              </CardTitle>
              <CardText style={styles.text}>doua.larif@gmail.com</CardText>
            </Card>
          </Col>
          <Col sm="4">
            <Card body style={styles.card}>
              <CardTitle tag="h5" style={styles.title}>
                phone
              </CardTitle>
              <CardText style={styles.text}>+212 640731248</CardText>
            </Card>
          </Col>
        </Row>
      </CardGroup>
    </>
  );
}

export default Cards;
