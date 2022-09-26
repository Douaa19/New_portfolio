import React from "react";
import { Button, Card, Col, Row } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { projectAction } from "../../redux/actions/sctions";

function Sections() {
  const dispatch = useDispatch();
  const prj = useSelector((state) => state.showProjects.showProjects);

  //
  const showProject = () => {
    dispatch(projectAction(true));
    console.log(prj);
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
            <Button style={styles.btn}>services</Button>
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
            <Button style={styles.btn}>informations</Button>
          </Card>
        </Col>
        <Col sm="3">
          <Card style={styles.card}>
            <Button style={styles.btn}>clinets</Button>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Sections;
