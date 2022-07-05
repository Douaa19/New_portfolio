import React from "react";
import { Container } from "react-bootstrap";
import ProfilImg from "../../assets/8G9A0004.JPG";

function HearoHeader() {
  // ---------------------------
  // styles
  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "absolute",
      top: "10%",
      right: "8%",
    },
    content: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      padding: "8rem 0",
      height: "40rem",
    },
    profile_img: {
      borderRadius: "50%",
      width: "150px",
      height: "150px",
    },
    texts: {
      textTransform: "uppercase",
      textAlign: "center",
      letterSpacing: "3px",
    },
    name: {
      color: "#FF5959",
      fontSize: "48px",
    },
    span: {
      color: "#F4F4F4",
      fontSize: "16px",
      marginTop: "1rem",
    },
  };
  // ---------------------------
  return (
    <>
      <Container style={styles.container}>
        <div className="content" style={styles.content}>
          <div className="profile_img" style={styles.profile_img}>
            <img src={ProfilImg} alt="person_img" style={styles.profile_img} />
          </div>
          <div className="text" style={styles.texts}>
            <h2 style={styles.name}>douaa larif</h2>
            <span style={styles.span}>a full stack developer</span>
          </div>
        </div>
      </Container>
    </>
  );
}

export default HearoHeader;
