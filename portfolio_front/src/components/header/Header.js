import React from "react";
import NavbarComponent from "./NavbarComponent";
import HearoHeader from "./HearoHeader";
import Background from "../../assets/john-towner-JgOeRuGD_Y4-unsplash.jpg";

function Header() {
  // ---------------------------
  // styles
  const styles = {
    background: {
      backgroundImage: `url(${Background})`,
      backgroundSize: "cover",
      width: "100%",
    },
    opacity: {
      backgroundColor: "#000000",
      opacity: "0.4",
      height: "750px"
    },
  };
  // ---------------------------

  return (
    <>
      <div className="background" style={styles.background}>
        <div className="opacity" style={styles.opacity}>
        </div>
          {/* <div className="content" style={styles.content}> */}
          <NavbarComponent />
          <HearoHeader />
          {/* </div> */}
      </div>
    </>
  );
}

export default Header;
