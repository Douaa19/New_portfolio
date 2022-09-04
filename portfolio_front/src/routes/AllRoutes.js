import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "../pages/Home";

function AllRoutes() {
  return (
    <>
      <React.Fragment>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </React.Fragment>
    </>
  );
}

export default AllRoutes;