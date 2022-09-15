import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaPhp,
  FaLaravel,
  FaNodeJs,
  FaDocker,
  FaGit,
  FaGithub,
} from "react-icons/fa";
import { SiExpress, SiAdobexd, SiMysql } from "react-icons/si";
import { FiFigma } from "react-icons/fi";
import { DiMongodb } from "react-icons/di";
import { AiFillApi } from "react-icons/ai";
import { IoLogoJavascript } from "react-icons/io";

function Skills(skills) {
  console.log("skills", skills.skills);

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
      borderBottom: "1px solid #6971A6",
      margin: "0 1rem 4rem 1rem",
      width: "12rem",
      paddingBottom: "0.5rem",
    },
    icon: {
      color: "#6971A6",
    },
  };

  return (
    <div style={styles.content}>
      {skills.skills.map((element, index) => {
        return (
          <span style={styles.element}>
            {element.name} <element.icon style={styles.icon} />
          </span>
        );
      })}
    </div>
  );
}

export default Skills;
