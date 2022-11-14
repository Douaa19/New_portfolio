import React from "react";
import Header from "../components/header/Header";
import About from "../components/about/About";
import MyServices from "../components/my-services/MyServices";
import MyProjects from "../components/my-projects/MyProjects";
import MySkills from "../components/my-skills/MySkills";
import MyResume from "../components/my-resume/MyResume";
import Contact from "../components/contact/Contact";
import { SiUpwork, SiFiverr } from "react-icons/si";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";

function Home() {
  // styles
  const styles = {
    footer: {
      height: "8rem",
      background: "#454545",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      alignItems: "center",
      padding: "1rem 0",
    },
    icons: {
      color: "#FF5959",
      display: "flex",
      justifyContent: "space-between",
      width: "12rem",
    },
    divIcon: {
      border: "1px solid #FF5959",
      padding: "0.5rem",
      borderRadius: "50%",
      cursor: "pointer",
    },
    icon: {
      width: "20px",
      height: "20px",
    },
    address: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "#FF5959",
    },
    copyright: {
      color: "#FFF",
      fontWeight: "600",
      fontSize: "16px",
    },
    span: {
      color: "#FF5959",
      fontSize: "14px",
    },
  };

  return (
    <>
      <Header />
      <About />
      <MyServices />
      <MySkills />
      <MyProjects />
      <MyResume />
      <Contact />
      <div className="footer" style={styles.footer}>
        <div className="icons" style={styles.icons}>
          <div className="iconUp" style={styles.divIcon}>
            <a href="#" style={styles.address}>
              <SiUpwork style={styles.icon} />
            </a>
          </div>
          <div className="iconFi" style={styles.divIcon}>
            <a href="#" style={styles.address}>
              <SiFiverr style={styles.icon} />
            </a>
          </div>
          <div className="iconInsta" style={styles.divIcon}>
            <a href="#" style={styles.address}>
              <FaInstagram style={styles.icon} />
            </a>
          </div>
          <div className="iconIn" style={styles.divIcon}>
            <a href="#" style={styles.address}>
              <FaLinkedinIn style={styles.icon} />
            </a>
          </div>
        </div>
        <div className="copyright" style={styles.copyright}>
          <span>
            @COPYRIGHT FOR D<span style={styles.span}>OLR</span>
          </span>
        </div>
      </div>
    </>
  );
}

export default Home;
