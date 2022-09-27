import React, { useEffect, useState } from "react";
import { Table, Button } from "reactstrap";
import AddForm from "./AddForm";
import { FaPlus } from "react-icons/fa";
import { GiCancel } from "react-icons/gi";
import { MdDeleteForever, MdModeEdit } from "react-icons/md";
import axios from "axios";
import { useDispatch } from "react-redux";
import { infoAction } from "../../../../redux/actions/sctions";
import { deleteProject } from "../../../../services/projectsServices";
const INFOS_URL = "http://localhost:8080/infos/";

function Informations() {
  // states
  const [infos, setInfos] = useState([]);
  const dispatch = useDispatch();
  let [addInfo, setInfo] = useState(false);
  const header =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMjg5MzIzMzkxMTIyNWJmZjBkNGQ2MSIsImVtYWlsIjoiZG91YS5sYXJpZkBnbWFpbC5jb20iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NjQyNzI1NTB9.YHatDqPv3bm4Ioejlwz16U-1zQ4x17kMoD4aLh1Grtk";

  //   fetch projects
  useEffect(() => {
    axios.get(`${INFOS_URL}`).then((result) => {
      if (result) {
        setInfos(result.data);
      }
    });
  }, []);

  // hidden projects
  const hiddInfos = () => {
    dispatch(infoAction(false));
  };

  // show add project form
  const addInfoForm = () => {
    setInfo(true);
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
        <GiCancel onClick={() => hiddInfos()} style={styles.icon} />
      </div>
      <Table style={styles.table}>
        <thead>
          <tr>
            <th>phone</th>
            <th>email</th>
            <th>address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody style={styles.body}>
          {infos.map((info, index) => {
            return (
              <tr key={index}>
                <td>{info.phone}</td>
                <td>{info.email}</td>
                <td>{info.address}</td>
                <td
                  className="d-flex justify-content-around"
                  style={{ border: "none" }}
                >
                  <Button
                    className="bg-danger border-danger"
                    onClick={() => {
                      deleteProject(info._id, header).then((response) => {
                        window.location = "/dashboard";
                      });
                    }}
                  >
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
          onClick={() => addInfoForm()}
        >
          <FaPlus />
        </Button>
      </div>

      {/* Form add project */}
      {addInfo === true && <AddForm addInfo={addInfo} />}
      {/* Form add project */}
    </>
  );
}

export default Informations;
