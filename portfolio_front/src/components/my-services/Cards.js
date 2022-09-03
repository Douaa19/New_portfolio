import React from "react";
import { Card, CardBody, CardText, CardGroup, Row, Col } from "reactstrap";

function Cards() {
  const styles = {
    cardGroupe: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gridTemplateRows: "repeat(2, 1fr)",
      gridGap: "1rem",
    },
    card: {
      background: "none",
      border: "1px solid #FF5959",
      width: "18rem",
      color: "#FFFFFF",
    },
    smellTitle: {
      fontWeight: "600",
      fontSize: "22px",
    },
  };

  return (
    <div styl={styles.cardGroupe}>
      <CardGroup>
        <Row xs={1} md={2} className="g-4">
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
        </Row>
      </CardGroup>
    </div>
  );
}

export default Cards;
