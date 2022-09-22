import React from "react";
import { Container, Button, Card, Col, Row } from "reactstrap";

function Dashboard() {
  const myObj = [
    "projects",
    "services",
    "tachnologies",
    "part",
    "informations",
    "clinets",
  ];

  // styles
  const styles = {
    body: {
      backgroundColor: "#101010",
      width: "100%",
      height: "100%",
    },
    container: {
      padding: "1rem 0",
      textTransform: "uppercase",
      fontFamily: "'Montserrat', sans-serif",
    },
    title: {
      color: "#F4F4F4",
      fontWeight: "600",
      fontSize: "40px",
      width: "max-content",
      borderBottom: "3px solid #FF5959",
      letterSpacing: "4px",
      marginBottom: "2rem",
    },
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
      width: "100%"
    },
    link: {
      color: "#FFFFFF",
      textDecoration: "none",
      fontSize: "18px",
    },
  };
  return (
    <div className="" style={styles.body}>
      <Container style={styles.container}>
        <h2 style={styles.title}>dashboard</h2>
        <Row>
          {myObj.map((element, index) => {
            return (
              <Col sm="3" key={index}>
                <Card style={styles.card}>
                  <a href="" style={styles.link}>
                    <Button style={styles.btn}>{element}</Button>
                  </a>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default Dashboard;
