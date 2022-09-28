import React, { useEffect, useState } from "react";
import { Table, Button } from "reactstrap";
import AddForm from "./AddForm";
import { FaPlus } from "react-icons/fa";
import { GiCancel } from "react-icons/gi";
import { MdDeleteForever, MdModeEdit } from "react-icons/md";
import axios from "axios";
import { useDispatch } from "react-redux";
import { technoAction } from "../../../../redux/actions/sctions";
import { deletePart } from "../../../../services/partsServices";
const TECHNOS_URL = "http://localhost:8080/technos/";

function Technos() {
  // states
  const [technos, setTechnos] = useState([]);
  const dispatch = useDispatch();
  let [addTechno, setTechno] = useState(false);
  const header =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMjg5MzIzMzkxMTIyNWJmZjBkNGQ2MSIsImVtYWlsIjoiZG91YS5sYXJpZkBnbWFpbC5jb20iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NjQyNzI1NTB9.YHatDqPv3bm4Ioejlwz16U-1zQ4x17kMoD4aLh1Grtk";

  //   fetch projects
  useEffect(() => {
    axios.get(`${TECHNOS_URL}`).then((result) => {
      if (result) {
        setTechnos(result.data);
      }
    });
  }, []);

  // hidden projects
  const hiddTechnos = () => {
    dispatch(technoAction(false));
  };

  // show add project form
  const addService = () => {
    setTechno(true);
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
        <GiCancel onClick={() => hiddTechnos()} style={styles.icon} />
      </div>
      <Table style={styles.table}>
        <thead>
          <tr>
            <th>name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody style={styles.body}>
          {technos.map((techno, index) => {
            return (
              <tr key={index}>
                <td>{techno.techno_name}</td>
                <td
                  className="d-flex justify-content-around align-items-center"
                  style={{ border: "none" }}
                >
                  <Button
                    className="bg-danger border-danger"
                    onClick={() => {
                      deletePart(techno._id, header).then((response) => {
                        window.location = "/dashboard";
                      });
                    }}
                  >
                    <MdDeleteForever />
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
          onClick={() => addService()}
        >
          <FaPlus />
        </Button>
      </div>

      {/* Form add project */}
      {addTechno === true && <AddForm addTechno={addTechno} />}
      {/* Form add project */}
    </>
  );
}

export default Technos;
