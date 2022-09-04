import React from "react";
import {
  Card,
  Container,
  CardBody,
  CardText,
  CardGroup,
  Row,
  Col,
} from "reactstrap";
import { FaPencilRuler } from "react-icons/fa";

function Cards() {
  const styles = {
    card: {
      background: "none",
      border: "1px solid #FF5959",
      width: "26.5rem",
      color: "#FFFFFF",
      marginTop: "1.5rem",
      height: "12rem",
      maxHeight: "26.5rem",
      padding: "1rem",
    },
    smallTitle: {
      fontWeight: "600",
      fontSize: "18px",
    },
    headCard: {
      display: "flex",
      paddingBottom: "0.8rem",
    },
    icon: {
      color: "#FF5959",
      marginLeft: "1rem",
    },
  };

  return (
    <>
      <CardGroup>
        <Row>
          {/* Here we can start the foreach loop "Col" */}
          <Col>
            <Card style={styles.card}>
              <CardBody>
                <div className="head" style={styles.headCard}>
                  <h4 style={styles.smallTitle}>creative design</h4>
                  <FaPencilRuler style={styles.icon} />
                </div>
                <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content. bulk of the card's content.
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card style={styles.card}>
              <CardBody>
                <div className="head" style={styles.headCard}>
                  <h4 style={styles.smallTitle}>branding</h4>
                  <FaPencilRuler style={styles.icon} />
                </div>
                <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content. bulk of the card's content.
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card style={styles.card}>
              <CardBody>
                <div className="head" style={styles.headCard}>
                  <h4 style={styles.smallTitle}>user interface</h4>
                  <FaPencilRuler style={styles.icon} />
                </div>
                <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content. bulk of the card's content.
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card style={styles.card}>
              <CardBody>
                <div className="head" style={styles.headCard}>
                  <h4 style={styles.smallTitle}>user experience</h4>
                  <FaPencilRuler style={styles.icon} />
                </div>
                <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content. bulk of the card's content.
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card style={styles.card}>
              <CardBody>
                <div className="head" style={styles.headCard}>
                  <h4 style={styles.smallTitle}>clean code</h4>
                  <FaPencilRuler style={styles.icon} />
                </div>
                <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content. bulk of the card's content.
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card style={styles.card}>
              <CardBody>
                <div className="head" style={styles.headCard}>
                  <h4 style={styles.smallTitle}>fast support</h4>
                  <FaPencilRuler style={styles.icon} />
                </div>
                <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content. bulk of the card's content.
                </CardText>
              </CardBody>
            </Card>
          </Col>
          {/* Here we can finish the foreach loop "Col" */}
        </Row>
      </CardGroup>
    </>
  );
}

export default Cards;
