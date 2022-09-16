import React from "react";

function Shape() {
  const styles = {
    lines: {
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    vline: {
      height: "1.5rem",
      borderLeft: "1px solid #676FA3",
    },
    circle: {
      width: "0.8rem",
      height: "0.8rem",
      backgroundColor: "#676FA3",
      borderRadius: "50%",
    },
    circleYear: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: "7rem",
      height: "0.5rem",
      position: "relative",
      top: "0",
      left: "3.1rem",
    },
  };

  return (
    <div className="lines" style={styles.lines}>
      <div className="line1" style={styles.vline}></div>
      <div className="circleYear" style={styles.circleYear}>
        <div className="circle" style={styles.circle}></div>
        <div className="yearDiv">
          <span style={styles.year}>2022 - 2020</span>
        </div>
      </div>
      <div className="line1" style={styles.vline}></div>
    </div>
  );
}

export default Shape;
