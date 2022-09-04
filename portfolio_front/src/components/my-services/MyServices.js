import React from "react";
import Cards from "./Cards";
import { Container } from "reactstrap";

function MyServices() {
  const styles = {
    container: {
      padding: "6rem 0",
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
      marginBottom: "2rem"
    },
  };

  return (
    <div style={{ backgroundColor: "#717BB7" }}>
      <Container style={styles.container}>
        {/* <div className="content"> */}
        <div className="sectionTitle">
          <h1 style={styles.big}>my services</h1>
        </div>
        <div className="cards">
          <Cards />
        </div>
        {/* </div> */}
      </Container>
    </div>
  );
}

export default MyServices;
