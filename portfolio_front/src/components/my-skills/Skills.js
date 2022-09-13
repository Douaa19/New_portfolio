import React from "react";

function Skills(skills) {
  const styles = {
    content: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-between",
    },
    element: {
      color: "#EEEEEE",
      fontSize: "24px",
      borderBottom: "1px solid #EEEEEE",
      margin: "0 1rem 4rem 1rem",
      width: "20rem",
      paddingBottom: "0.5rem",
    },
  };

  return (
    <div style={styles.content}>
      {skills.skills.map((element, index) => {
        return <span style={styles.element}>{element}</span>;
      })}
    </div>
  );
}

export default Skills;
