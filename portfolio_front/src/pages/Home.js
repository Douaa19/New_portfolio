import React from "react";
import Header from "../components/header/Header";
import About from "../components/about/About";
import MyServices from "../components/my-services/MyServices";

function Home() {
  return (
    <>
      <Header />
      <About />
      <MyServices />
    </>
  );
}

export default Home;
