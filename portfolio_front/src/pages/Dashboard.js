import React, { useState } from "react";
import { Container } from "reactstrap";
import Sections from "../components/dashboard/Sections";
import Projects from "../components/dashboard/panels/Projects";

function Dashboard() {
  // states
  const [showProjects, setShowProjects] = useState(false);


  // styles
  const styles = {
    body: {
      backgroundColor: "#101010",
      width: "100%",
      height: "100vh",
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
  };
  return (
    <div className="" style={styles.body}>
      <Container style={styles.container}>
        <h2 style={styles.title}>dashboard</h2>
        <Sections show={showProjects} />
        {showProjects === true && (
          <>
            {/* Panels */}
            <Projects />
            {/* Panels */}
          </>
        )}
      </Container>
    </div>
  );
}

export default Dashboard;
