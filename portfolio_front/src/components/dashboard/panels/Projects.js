import React, { useEffect, useState } from "react";
import { Table, Button } from "reactstrap";
import { FaPlus } from "react-icons/fa";
import axios from "axios";
import { useDispatch } from "react-redux";
import { projectAction } from "../../../redux/actions/sctions";
const PROJECTS_URL = "http://localhost:8080/projects/";

function Projects() {
  const [projects, setProjects] = useState([]);
  const dispatch = useDispatch();

  //   fetch projects
  useEffect(() => {
    axios.get(`${PROJECTS_URL}`).then((result) => {
      if (result) {
        setProjects(result.data);
      }
    });
  }, []);

  const hiddeProjects = () => {
    dispatch(projectAction(false));
  };

  //   styles
  const styles = {
    table: {
      color: "#FFF",
      textAlign: "center",
      border: "1px solid #FF5959",
      margin: "1rem 0",
    },
    body: {
      textTransform: "lowercase",
      fontSize: "16px",
    },
    btn: {
      textTransform: "uppercase",
      padding: "0.5rem 1rem",
      outline: "none",
      border: "none",
      width: "8rem",
      fontSize: "16px",
      margin: " 0 0.2rem",
    },
  };

  return (
    <>
      <Table style={styles.table}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Technologies</th>
            <th>Description</th>
            <th>Link</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody style={styles.body}>
          {projects.map((project, index) => {
            return (
              <tr key={index}>
                <td>{project.project_name}</td>
                <td>
                  {project.technologies.map((techno, index) => {
                    return (
                      <>
                        <span key={index}>{techno}</span>
                      </>
                    );
                  })}
                </td>
                <td>{project.description}</td>
                <td>{project.link}</td>
                <td className="d-flex justify-content-around">
                  <Button style={styles.btn} className="bg-danger">
                    delete
                  </Button>
                  <Button style={styles.btn} className="bg-success">
                    edit
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <div className="addBtn d-flex justify-content-end">
        <Button className="bg-primary" style={styles.btn}>
          project <FaPlus />
        </Button>
        <Button
          className="bg-info"
          style={styles.btn}
          oClick={() => hiddeProjects()}
        >
          cancel
        </Button>
      </div>
    </>
  );
}

export default Projects;
