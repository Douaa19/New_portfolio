import React, { useEffect, useState } from "react";
import { Table, Button } from "reactstrap";
import AddForm from "./AddForm";
import { FaPlus } from "react-icons/fa";
import { GiCancel } from "react-icons/gi";
import { MdDeleteForever, MdModeEdit } from "react-icons/md";
import axios from "axios";
import { useDispatch } from "react-redux";
import { serviceAction } from "../../../../redux/actions/sctions";
const SERVICES_URL = "http://localhost:8080/services/";

function Sevices() {
  // states
  const [services, setServices] = useState([]);
  const dispatch = useDispatch();
  let [addSer, setSer] = useState(false);

  //   fetch projects
  useEffect(() => {
    axios.get(`${SERVICES_URL}`).then((result) => {
      if (result) {
        setServices(result.data);
      }
    });
  }, []);

  // hidden projects
  const hiddServices = () => {
    dispatch(serviceAction(false));
  };

  // show add project form
  const addService = () => {
    setSer(true);
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
        <GiCancel onClick={() => hiddServices()} style={styles.icon} />
      </div>
      <Table style={styles.table}>
        <thead>
          <tr>
            <th>Service</th>
            <th>description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody style={styles.body}>
          {services.map((service, index) => {
            return (
              <tr key={index}>
                <td>{service.service_name}</td>
                <td style={{width: "50%"}}>{service.description}</td>
                <td className="d-flex justify-content-around align-items-center" style={{border: "none"}}>
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
          onClick={() => addService()}
        >
          <FaPlus />
        </Button>
      </div>

      {/* Form add project */}
      {addSer === true && <AddForm addSer={addSer} />}
      {/* Form add project */}
    </>
  );
}

export default Sevices;
