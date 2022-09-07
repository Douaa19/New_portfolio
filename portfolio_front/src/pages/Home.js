import React from "react";
import Header from "../components/header/Header";
import About from "../components/about/About";
import MyServices from "../components/my-services/MyServices";
import MyProjects from "../components/my-projects/MyProjects";

function Home() {
  return (
    <>
      <Header />
      <About />
      <MyServices />
      <MyProjects />
    </>
  );
}

export default Home;
