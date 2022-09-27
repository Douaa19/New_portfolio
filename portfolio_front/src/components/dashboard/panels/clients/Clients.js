import React, { useEffect, useState } from "react";
import { Table } from "reactstrap";
import { GiCancel } from "react-icons/gi";
import axios from "axios";
import { useDispatch } from "react-redux";
import { clientAction } from "../../../../redux/actions/sctions";
const CLINETS_URL = "http://localhost:8080/client/";

function Clients() {
  // states
  const [clients, setClients] = useState([]);
  const dispatch = useDispatch();
  const header =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMjg5MzIzMzkxMTIyNWJmZjBkNGQ2MSIsImVtYWlsIjoiZG91YS5sYXJpZkBnbWFpbC5jb20iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NjQyNzI1NTB9.YHatDqPv3bm4Ioejlwz16U-1zQ4x17kMoD4aLh1Grtk";

  //   fetch projects
  useEffect(() => {
    axios
      .get(`${CLINETS_URL}`, {
        headers: {
          Authorization: `Bearer ${header}`,
        },
      })
      .then((result) => {
        if (result) {
          setClients(result.data);
        }
      });
  }, []);

  // hidden projects
  const hiddClients = () => {
    dispatch(clientAction(false));
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
        <GiCancel onClick={() => hiddClients()} style={styles.icon} />
      </div>
      <Table style={styles.table}>
        <thead>
          <tr>
            <th>name</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody style={styles.body}>
          {clients.map((client, index) => {
            return (
              <tr key={index}>
                <td>{client.client_name}</td>
                <td>{client.client_email}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}

export default Clients;
