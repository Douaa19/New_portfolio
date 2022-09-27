import React from "react";
import { Container } from "reactstrap";
import Sections from "../components/dashboard/Sections";
import Projects from "../components/dashboard/panels/projects/Projects";
import Services from "../components/dashboard/panels/services/Sevices";
import Informations from "../components/dashboard/panels/informations/Informations";
import Clients from "../components/dashboard/panels/clients/Clients";
import { useSelector } from "react-redux";

function Dashboard() {
  const prj = useSelector((state) => state.showProjects.showProjects);
  const ser = useSelector((state) => state.showServices.showServices);
  const info = useSelector((state) => state.showInfos.showInfos);
  const client = useSelector((state) => state.showClients.showClients);
  // styles
  const styles = {
    body: {
      backgroundColor: "#101010",
      width: "100%",
      height: "max-content",
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
        <Sections />
        {/* Panels */}
        {prj === true && <Projects />}
        {ser === true && <Services />}
        {info === true && <Informations />}
        {client === true && <Clients />}
        {/* Panels */}
      </Container>
    </div>
  );
}

export default Dashboard;
