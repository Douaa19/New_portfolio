import React from "react";
import { Container } from "reactstrap";
import Cards from "../my-projects/Crads";

function MyProjects() {
  const styles = {
    container: {
      padding: "6rem 0",
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
  };

  return (
    <div style={{ backgroundColor: "#676FA3" }}>
      <Container style={styles.container}>
        <div className="sectionTitle">
          <h1 style={styles.big}>my services</h1>
        </div>
        <Cards />
      </Container>
    </div>
  );
}

export default MyProjects;
