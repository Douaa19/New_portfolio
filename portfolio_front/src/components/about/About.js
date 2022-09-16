import React from "react";
import Description from "./Description";
import { Container } from "reactstrap";
import Image from "../../assets/dave-hoefler-P7zKTSC52LA-unsplash.jpg";

function About() {
  // -----------------------
  // styles
  const styles = {
    container: {
      display: "flex",
      padding: "3rem 0",
    },
    div_img: {
      borderRadius: "4px",
      width: "580px",
      height: "auto",
      boxShadow: "0px 0px 4px -1px #FFF",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    image: {
      width: "100%",
      height: "auto",
    },
  };
  // -----------------------
  return (
    <div style={{ backgroundColor: "#101010" }}>
      <Container style={styles.container}>
        <div className="image" style={styles.div_img}>
          <img src={Image} alt="img" style={styles.image} />
        </div>
        <div className="description">
          <Description />
        </div>
      </Container>
    </div>
  );
}

export default About;
