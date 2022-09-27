import React from "react";
import { Button, Card, Col, Row } from "reactstrap";
import { useDispatch } from "react-redux";
import {
  projectAction,
  serviceAction,
  infoAction,
  clientAction,
} from "../../redux/actions/sctions";

function Sections() {
  const dispatch = useDispatch();

  //
  const showProject = () => {
    dispatch(projectAction(true));
    dispatch(serviceAction(false));
    dispatch(infoAction(false));
    dispatch(clientAction(false));
  };
  const showService = () => {
    dispatch(projectAction(false));
    dispatch(serviceAction(true));
    dispatch(infoAction(false));
    dispatch(clientAction(false));
  };
  const showInfos = () => {
    dispatch(serviceAction(false));
    dispatch(projectAction(false));
    dispatch(infoAction(true));
    dispatch(clientAction(false));
  };
  const showClients = () => {
    dispatch(serviceAction(false));
    dispatch(projectAction(false));
    dispatch(infoAction(false));
    dispatch(clientAction(true));
  };

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

  return (
    <div>
      <Row>
        <Col sm="3">
          <Card style={styles.card}>
            <Button style={styles.btn} onClick={() => showProject()}>
              projects
            </Button>
          </Card>
        </Col>
        <Col sm="3">
          <Card style={styles.card}>
            <Button style={styles.btn} onClick={() => showService()}>
              services
            </Button>
          </Card>
        </Col>
        <Col sm="3">
          <Card style={styles.card}>
            <Button style={styles.btn}>tachnologies</Button>
          </Card>
        </Col>
        <Col sm="3">
          <Card style={styles.card}>
            <Button style={styles.btn}>parts</Button>
          </Card>
        </Col>
        <Col sm="3">
          <Card style={styles.card}>
            <Button style={styles.btn} onClick={() => showInfos()}>
              informations
            </Button>
          </Card>
        </Col>
        <Col sm="3">
          <Card style={styles.card}>
            <Button style={styles.btn} onClick={() => showClients()}>
              clinets
            </Button>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Sections;
