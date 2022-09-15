import React from "react";
import {
  CardGroup,
  Card,
  Row,
  Col,
  CardBody,
  CardText,
  CardHeader,
} from "reactstrap";
import { ReactComponent as IconFront } from "../../assets/icons/front.svg";
// import IconBack from "../../assets/icons/back.svg";
// import IconData from "../../assets/icons/db.svg";
// import IconDesign from "../../assets/icons/design.svg";
// import IconPlus from "../../assets/icons/plus.svg";

function Skills(skills) {
  console.log("skills", skills.skills);

  const styles = {
    card: {
      background: "none",
      border: "1px solid #454545",
      width: "26rem",
      color: "#FFFFFF",
      marginTop: "1.5rem",
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
    spans: {
      display: "flex",
      flexDirection: "column",
      alignItems: "space-between",
    },
    span: {
      width: "8rem",
      textAlign: "left",
    },
  };

  return (
    <CardGroup style={{ textAlign: "left" }}>
      <Row>
        {/* Here we can start the foreach loop "Col" */}
        {/* front card */}
        <Col>
          <Card style={styles.card}>
            <CardHeader style={{}}>
              <IconFront />
            </CardHeader>
            <CardBody>
              <div className="head" style={styles.headCard}>
                <h4 style={styles.smallTitle}>front-end</h4>
              </div>
              <div className="spans" style={styles.spans}>
                <div
                  className=""
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    textAlign: "center",
                  }}
                >
                  <span style={styles.span}>html</span>
                  <span style={styles.span}>css</span>
                </div>
                <div
                  className=""
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    textAlign: "center",
                  }}
                >
                  <span style={styles.span}>react js</span>
                  <span style={styles.span}>javascript</span>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
        {/* front card */}
        <Col>
          <Card style={styles.card}>
            <CardHeader>
              
            </CardHeader>
            <CardBody>
              <div className="head" style={styles.headCard}>
                <h4 style={styles.smallTitle}>front-end</h4>
              </div>
              <div className="spans" style={styles.spans}>
                <div
                  className=""
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    textAlign: "center",
                  }}
                >
                  <span style={styles.span}>html</span>
                  <span style={styles.span}>css</span>
                </div>
                <div
                  className=""
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    textAlign: "center",
                  }}
                >
                  <span style={styles.span}>react js</span>
                  <span style={styles.span}>javascript</span>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
        {/* back card */}
        <Col>
          <Card style={styles.card}>
            <CardHeader>
              <IconFront />
            </CardHeader>
            <CardBody>
              <div className="head" style={styles.headCard}>
                <h4 style={styles.smallTitle}>back-end</h4>
              </div>
              <div className="spans" style={styles.spans}>
                <div
                  className=""
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    textAlign: "center",
                  }}
                >
                  <span style={styles.span}>php</span>
                  <span style={styles.span}>laravel</span>
                </div>
                <div
                  className=""
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    textAlign: "center",
                  }}
                >
                  <span style={styles.span}>node js</span>
                  <span style={styles.span}>express js</span>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
        {/* back card */}
        <Col>
          <Card style={styles.card}>
            <CardHeader>
              
            </CardHeader>
            <CardBody>
              <div className="head" style={styles.headCard}>
                <h4 style={styles.smallTitle}>front-end</h4>
              </div>
              <div className="spans" style={styles.spans}>
                <div
                  className=""
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    textAlign: "center",
                  }}
                >
                  <span style={styles.span}>html</span>
                  <span style={styles.span}>css</span>
                </div>
                <div
                  className=""
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    textAlign: "center",
                  }}
                >
                  <span style={styles.span}>react js</span>
                  <span style={styles.span}>javascript</span>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Card style={styles.card}>
            <CardHeader>
              
            </CardHeader>
            <CardBody>
              <div className="head" style={styles.headCard}>
                <h4 style={styles.smallTitle}>front-end</h4>
              </div>
              <div className="spans" style={styles.spans}>
                <div
                  className=""
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    textAlign: "center",
                  }}
                >
                  <span style={styles.span}>html</span>
                  <span style={styles.span}>css</span>
                </div>
                <div
                  className=""
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    textAlign: "center",
                  }}
                >
                  <span style={styles.span}>react js</span>
                  <span style={styles.span}>javascript</span>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Card style={styles.card}>
            <CardHeader>
            
            </CardHeader>
            <CardBody>
              <div className="head" style={styles.headCard}>
                <h4 style={styles.smallTitle}>front-end</h4>
              </div>
              <div className="spans" style={styles.spans}>
                <div
                  className=""
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    textAlign: "center",
                  }}
                >
                  <span style={styles.span}>html</span>
                  <span style={styles.span}>css</span>
                </div>
                <div
                  className=""
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    textAlign: "center",
                  }}
                >
                  <span style={styles.span}>react js</span>
                  <span style={styles.span}>javascript</span>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col></Col>
        {/* Here we can finish the foreach loop "Col" */}
      </Row>
    </CardGroup>
  );
}

export default Skills;
