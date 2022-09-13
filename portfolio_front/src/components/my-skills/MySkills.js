import React from "react";
import { Container } from "reactstrap";
import Skills from "./Skills";
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

function MySkills() {
  const myArr = [
    {
      name: "html",
      icon: FaHtml5,
    },
    {
      name: "css",
      icon: FaCss3Alt,
    },
    {
      name: "php",
      icon: FaPhp,
    },
    {
      name: "laravel",
      icon: FaLaravel,
    },
    {
      name: "javascript",
      icon: IoLogoJavascript,
    },
    {
      name: "react",
      icon: FaReact,
    },
    {
      name: "nodejs",
      icon: FaNodeJs,
    },
    {
      name: "express js",
      icon: SiExpress,
    },
    {
      name: "mongodb",
      icon: DiMongodb,
    },
    {
      name: "mysql",
      icon: SiMysql,
    },
    {
      name: "api rest",
      icon: AiFillApi,
    },
    {
      name: "docker",
      icon: FaDocker,
    },
    {
      name: "adobxd",
      icon: SiAdobexd,
    },
    {
      name: "figma",
      icon: FiFigma,
    },
    {
      name: "git",
      icon: FaGit,
    },
    {
      name: "github",
      icon: FaGithub,
    },
    // "html / css",
    // "php / laravel",
    // "nodejs / express",
    // "javascript / react",
    // "adob xd / figma",
    // "mysql / mongodb",
    // "api rest",
    // "docker",
    // "git / github"
  ];

  //   Styles
  const styles = {
    container: {
      padding: "6rem 0",
      color: "#FFFFFF",
      textTransform: "uppercase",
      fontFamily: "'Montserrat', sans-serif",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    },
    big: {
      color: "#F4F4F4",
      fontWeight: "600",
      fontSize: "40px",
      width: "max-content",
      borderBottom: "3px solid #FF5959",
      letterSpacing: "4px",
      marginBottom: "3rem",
    },
  };

  return (
    <div style={{ backgroundColor: "#676FA3" }}>
      <Container style={styles.container}>
        <div className="sectionTitle">
          <h1 style={styles.big}>my skills</h1>
        </div>
        <Skills skills={myArr} />
      </Container>
    </div>
  );
}

export default MySkills;
