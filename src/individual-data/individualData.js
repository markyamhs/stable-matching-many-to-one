import React, { useContext } from "react";
import { UserContext } from "../UserContext";
import { Table } from "react-bootstrap";
import IndividualDataStyles from "./individualData.module.scss";
import DragPreference from "../dragNdrop/dragPreferrence";

const IndividualData = () => {
  const { individualData, setIndividualData } = useContext(UserContext);
  const handleChange = (event, idx) => {
    const newIndividualData = individualData.map((item) => {
      if (item.idx === idx) {
        const updatedItem = {
          ...item,
          [event.target.name]: event.target.value,
        };
        return updatedItem;
      }

      return item;
    });
    setIndividualData(newIndividualData);
  };
  return (
    <div className={IndividualDataStyles.table}>
      <Table size="sm" striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Preferences (leftmost being most preferred)</th>
          </tr>
        </thead>
        <tbody>
          {individualData.map((ele, idx) => {
            return (
              <tr>
                <td>{idx}</td>
                <td>
                  {" "}
                  <input
                    type="text"
                    id={`individual-${idx}-name`}
                    name="name"
                    value={individualData[idx].name}
                    onChange={(event) => handleChange(event, idx)}
                  />
                </td>
                <td>
                  <DragPreference isGroup={false} idx={idx} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default IndividualData;
