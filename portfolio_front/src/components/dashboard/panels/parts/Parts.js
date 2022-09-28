import React, { useEffect, useState } from "react";
import { Table, Button } from "reactstrap";
import AddForm from "./AddForm";
import { FaPlus } from "react-icons/fa";
import { GiCancel } from "react-icons/gi";
import { MdDeleteForever, MdModeEdit } from "react-icons/md";
import axios from "axios";
import { useDispatch } from "react-redux";
import { partAction } from "../../../../redux/actions/sctions";
import { deletePart } from "../../../../services/partsServices";
const PARTS_URL = "http://localhost:8080/parts/";

function Parts() {
  // states
  const [parts, setParts] = useState([]);
  const dispatch = useDispatch();
  let [addPart, setPart] = useState(false);
  const header =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMjg5MzIzMzkxMTIyNWJmZjBkNGQ2MSIsImVtYWlsIjoiZG91YS5sYXJpZkBnbWFpbC5jb20iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NjQyNzI1NTB9.YHatDqPv3bm4Ioejlwz16U-1zQ4x17kMoD4aLh1Grtk";

  //   fetch projects
  useEffect(() => {
    axios.get(`${PARTS_URL}`).then((result) => {
      if (result) {
        setParts(result.data);
      }
    });
  }, []);

  // hidden projects
  const hiddParts = () => {
    dispatch(partAction(false));
  };

  // show add project form
  const addService = () => {
    setPart(true);
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
        <GiCancel onClick={() => hiddParts()} style={styles.icon} />
      </div>
      <Table style={styles.table}>
        <thead>
          <tr>
            <th>name</th>
            <th>technologies</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody style={styles.body}>
          {parts.map((part, index) => {
            return (
              <tr key={index}>
                <td>{part.part_name}</td>
                <td style={{ width: "50%" }}>
                  {part.technos_id.map((techno, index) => {
                    return (
                      <>
                        <span key={index}>{techno} </span>
                      </>
                    );
                  })}
                </td>
                <td
                  className="d-flex justify-content-around align-items-center"
                  style={{ border: "none" }}
                >
                  <Button
                    className="bg-danger border-danger"
                    onClick={() => {
                      deletePart(part._id, header).then((response) => {
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
          onClick={() => addService()}
        >
          <FaPlus />
        </Button>
      </div>

      {/* Form add project */}
      {addPart === true && <AddForm addPart={addPart} />}
      {/* Form add project */}
    </>
  );
}

export default Parts;
