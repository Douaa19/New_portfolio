import React, { useState } from "react";
import { NavLink, NavbarBrand, Navbar, Nav } from "react-bootstrap";
import { Container } from "reactstrap";

function NavbarComponent() {
  // -----------------------
  // styles
  let styles = {
    container: {
      fontFamily: "'Montserrat', sans-serif",
      textTransform: "uppercase",
      position: "absolute",
      top: 0,
      right: "8%",
    },
    navbar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    brand_d: {
      color: "#F4F4F4",
      fontSize: "32px",
    },
    brand: {
      fontWeight: "bold",
      color: "#FF5959",
      fontSize: "22px",
    },
    links: {
      fontSize: "16px",
    },
    nav_link: {
      color: "#F4F4F4",
      padding: "0.2rem 1.8rem",
      margin: "0 0.5rem",
    },
  };
  // -----------------------
  // styles button and hover on it
  const [navBtn, setNavBtn] = useState({
    color: "#FF5959",
    border: "solid 1px #FF5959",
    borderRadius: "3px",
    padding: "0.2rem 1.8rem",
    margin: "0 0 0 0.5rem",
  });
  const hoverBtn = () => {
    setNavBtn({
      color: "#F4F4F4",
      border: "solid 1px #F4F4F4",
      borderRadius: "3px",
      padding: "0.2rem 1.8rem",
      margin: "0 0 0 0.5rem",
    });
  };
  // styles button and hover on it

  //  style links and hover on they
  const [link, setLink] = useState(styles.nav_link);

  const hoverLink = (param) => {};
  //  style links and hover on they

  return (
    <>
      <Container style={styles.container}>
        <Navbar style={styles.navbar}>
          <NavbarBrand href="/" style={styles.brand}>
            <span style={styles.brand_d}>D</span>OLR
          </NavbarBrand>
          <div className="links" style={styles.links}>
            <Nav>
              <NavLink
                href="#about"
                style={link}
                onMouseOver={() => hoverLink("about")}
              >
                about
              </NavLink>
              <NavLink
                href="#service"
                style={link}
                onMouseOver={() => hoverLink("service")}
              >
                service
              </NavLink>
              <NavLink
                href="#skill"
                style={link}
                onMouseOver={() => hoverLink("skill")}
              >
                skill
              </NavLink>
              <NavLink
                href="#project"
                style={link}
                onMouseOver={() => hoverLink("project")}
              >
                project
              </NavLink>
              <NavLink
                href="#resume"
                style={link}
                onMouseOver={() => hoverLink("resume")}
              >
                resume
              </NavLink>
              <NavLink
                href="#contact"
                style={navBtn}
                onMouseOver={() => hoverBtn()}
                onMouseOut={() => {
                  setNavBtn({
                    color: "#FF5959",
                    border: "solid 1px #FF5959",
                    borderRadius: "3px",
                    padding: "0.2rem 1.8rem",
                    margin: "0 0 0 0.5rem",
                  });
                }}
              >
                contact
              </NavLink>
            </Nav>
          </div>
        </Navbar>
      </Container>
    </>
  );
}

export default NavbarComponent;
