import React from "react";
import { NavLink, NavbarBrand, Navbar, Nav } from "react-bootstrap";
import { Container } from "reactstrap";

function NavbarComponent() {
  // -----------------------
  // styles
  const styles = {
    container: {
      fontFamily: "'Montserrat', sans-serif",
      textTransform: "uppercase",
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
      fontWeight: "600",
      color: "#FF5959",
      fontSize: "22px",
    },
    links: {
      fontSize: "12px",
    },
    nav_link: {
      color: "#F4F4F4",
      padding: "0.5rem 1.8rem",
      margin: "0 0.5rem",
    },
    nav_btn: {
      color: "#FF5959",
      border: "solid 1px #FF5959",
      borderRadius: "3px",
      padding: "0.5rem 1.8rem",
      margin: "0 0 0 0.5rem",
    },
  };
  // -----------------------

  return (
    <>
      <Container style={styles.container}>
        <Navbar style={styles.navbar}>
          <NavbarBrand href="/" style={styles.brand}>
            <span style={styles.brand_d}>D</span>OLR
          </NavbarBrand>
          <div className="links" style={styles.links}>
            <Nav>
              <NavLink href="" style={styles.nav_link}>
                home
              </NavLink>
              <NavLink href="" style={styles.nav_link}>
                about
              </NavLink>
              <NavLink href="" style={styles.nav_link}>
                service
              </NavLink>
              <NavLink href="" style={styles.nav_link}>
                portfolio
              </NavLink>
              <NavLink href="" style={styles.nav_link}>
                resume
              </NavLink>
              <NavLink href="" style={styles.nav_btn}>
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
