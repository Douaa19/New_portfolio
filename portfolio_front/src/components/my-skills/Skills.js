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
import IconFront from "../../assets/icons/front.png";
import IconBack from "../../assets/icons/back.png";
import IconData from "../../assets/icons/db.png";
import IconDesign from "../../assets/icons/design.png";
import IconPlus from "../../assets/icons/plus.png";
import { IconBase } from "react-icons";

function Skills(skills) {
  console.log("skills", skills.skills);

  const styles = {
    card: {
      background: "none",
      border: "1px solid #454545",
      width: "26.5rem",
      color: "#FFFFFF",
      marginTop: "1.5rem",
      maxHeight: "26.5rem",
      padding: "1rem",
      height: "14rem",
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
            <CardHeader>
              <img src={IconFront} alt="" />
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
                    padding: "0.5rem 0",
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
        {/* back card */}
        <Col>
          <Card style={styles.card}>
            <CardHeader>
              <img src={IconBack} alt="" />
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
                    padding: "0.5rem 0",
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
        {/* database card */}
        <Col>
          <Card style={styles.card}>
            <CardHeader>
              <img src={IconData} alt="" />
            </CardHeader>
            <CardBody>
              <div className="head" style={styles.headCard}>
                <h4 style={styles.smallTitle}>databases</h4>
              </div>
              <div className="spans" style={styles.spans}>
                <div
                  className=""
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    textAlign: "center",
                    padding: "0.5rem 0",
                  }}
                >
                  <span style={styles.span}>mysql</span>
                  <span style={styles.span}>mongodb</span>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
        {/* database card */}
        {/* design card */}
        <Col>
          <Card style={styles.card}>
            <CardHeader>
              <img src={IconDesign} alt="" />
            </CardHeader>
            <CardBody>
              <div className="head" style={styles.headCard}>
                <h4 style={styles.smallTitle}>web design</h4>
              </div>
              <div className="spans" style={styles.spans}>
                <div
                  className=""
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    textAlign: "center",
                    padding: "0.5rem 0",
                  }}
                >
                  <span style={styles.span}>figma</span>
                  <span style={styles.span}>adob xd</span>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
        {/* design card */}
        {/* other card */}
        <Col>
          <Card style={styles.card}>
            <CardHeader>
              <img src={IconPlus} alt="" />
            </CardHeader>
            <CardBody>
              <div className="head" style={styles.headCard}>
                <h4 style={styles.smallTitle}>other</h4>
              </div>
              <div className="spans" style={styles.spans}>
                <div
                  className=""
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    textAlign: "center",
                    padding: "0.5rem 0",
                  }}
                >
                  <span style={styles.span}>git</span>
                  <span style={styles.span}>github</span>
                </div>
                <div
                  className=""
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    textAlign: "center",
                  }}
                >
                  <span style={styles.span}>docker</span>
                  <span style={styles.span}>heroku</span>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
        {/* other card */}
        <Col></Col>
        {/* Here we can finish the foreach loop "Col" */}
      </Row>
    </CardGroup>
  );
}

export default Skills;
