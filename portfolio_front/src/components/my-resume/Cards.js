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
      //   marginBottom: "1.5rem",
      textAlign: "center",
    },
    title: {
      color: "#FFF",
      fontWeight: "600",
      fontSize: "18px",
      padding: "0 0 14px  0",
      borderBottom: "1px solid #676FA3",
    },
    text: {
      color: "#FFF",
      fontSize: "16px",
      padding: "0.5rem 1.5rem",
    },
    lines: {
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    year: {
      borderBottom: "1px solid #676FA3",
      marginBottom: "0.5rem",
    },
    vline: {
      height: "1.5rem",
      borderLeft: "1px solid #676FA3",
    },
    circle: {
      width: "0.8rem",
      height: "0.8rem",
      backgroundColor: "#676FA3",
      borderRadius: "50%",
    },
    circleYear: {
        display: "flex",
        textAlign: "right"
    }
  };

  return (
    <>
      <CardGroup>
        <Row style={styles.row}>
          <Col sm="5">
            <div className="lines" style={styles.lines}>
              <div className="years">
                <span style={styles.year}>2022 - 2020</span>
              </div>
              <div className="line1" style={styles.vline}></div>

              <div className="circle" style={styles.circle}></div>

              <div className="line1" style={styles.vline}></div>
            </div>
            <Card body style={styles.card}>
              <CardTitle tag="h5" style={styles.title}>
                YouCode - Web developement
              </CardTitle>
              <CardText style={styles.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                cidid
              </CardText>
            </Card>
            <div className="lines" style={styles.lines}>
              <div className="line1" style={styles.vline}></div>
              <div className="circleYear" style={styles.circleYear}>
                <div className="circle" style={styles.circle}></div>
                <span style={styles.year}>2022 - 2020</span>
              </div>
              <div className="line1" style={styles.vline}></div>
            </div>
          </Col>
        </Row>
      </CardGroup>
    </>
  );
}

export default Cards;
