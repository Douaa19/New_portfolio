import React, { useEffect, useState } from "react";
import { Table, Button } from "reactstrap";
import AddForm from "./AddForm";
import { FaPlus } from "react-icons/fa";
import { GiCancel } from "react-icons/gi";
import { MdDeleteForever, MdModeEdit } from "react-icons/md";
import axios from "axios";
import { useDispatch } from "react-redux";
import { projectAction } from "../../../../redux/actions/sctions";
const PROJECTS_URL = "http://localhost:8080/projects/";

function Projects() {
  // states
  const [projects, setProjects] = useState([]);
  const dispatch = useDispatch();
  let [addPro, setPro] = useState(false);

  //   fetch projects
  useEffect(() => {
    axios.get(`${PROJECTS_URL}`).then((result) => {
      if (result) {
        setProjects(result.data);
      }
    });
  }, []);

  // hidden projects
  const hiddProjects = () => {
    dispatch(projectAction(false));
  };

  // show add project form
  const addProject = () => {
    setPro(true);
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
    icon: {
      color: "red",
      cursor: "pointer",
    },
  };

  return (
    <>
      <div className="exit d-flex justify-content-end">
        <GiCancel onClick={() => hiddProjects()} style={styles.icon} />
      </div>
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
                <td
                  className="d-flex justify-content-around"
                  style={{ border: "none" }}
                >
                  <Button className="bg-danger border-danger">
                    <MdDeleteForever />
                  </Button>
                  <Button className="bg-success border-success">
                    <MdModeEdit />
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <div className="addBtn d-flex justify-content-end">
        <Button
          className="bg-primary border-primary"
          onClick={() => addProject()}
        >
          <FaPlus />
        </Button>
      </div>

      {/* Form add project */}
      {addPro === true && <AddForm addPro={addPro} />}
      {/* Form add project */}
    </>
  );
}

export default Projects;
