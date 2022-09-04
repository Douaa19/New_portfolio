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

function Cards() {
  const styles = {
    cardGroupe: {},
    card: {
      background: "none",
      border: "1px solid #FF5959",
      width: "26.5rem",
      color: "#FFFFFF",
      marginTop: "1.5rem",
      maxHeight: "26.5rem",
    },
    smallTitle: {
      fontWeight: "600",
      fontSize: "18px",
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
                <h4 style={styles.smallTitle}>Card Title</h4>
                <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card style={styles.card}>
              <CardBody>
                <h4 style={styles.smallTitle}>Card Title</h4>
                <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card style={styles.card}>
              <CardBody>
                <h4 style={styles.smallTitle}>Card Title</h4>
                <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card style={styles.card}>
              <CardBody>
                <h4 style={styles.smallTitle}>Card Title</h4>
                <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card style={styles.card}>
              <CardBody>
                <h4 style={styles.smallTitle}>Card Title</h4>
                <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card style={styles.card}>
              <CardBody>
                <h4 style={styles.smallTitle}>Card Title</h4>
                <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
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
