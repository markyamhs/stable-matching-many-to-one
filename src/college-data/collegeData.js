import React, { useContext } from "react";
import { UserContext } from "../UserContext";
import { Table } from "react-bootstrap";
import CollegeDataStyles from "./collegeData.module.scss";
import DragPreference from "../dragNdrop/dragPreferrence";

const CollegeData = () => {
  const { collegeData, setCollegeData } = useContext(UserContext);
  const handleChange = (event, idx) => {
    const newCollegeData = collegeData.map((item) => {
      if (item.idx === idx) {
        const updatedItem = {
          ...item,
          [event.target.name]: event.target.value,
        };
        return updatedItem;
      }

      return item;
    });
    setCollegeData(newCollegeData);
  };
  return (
    <div className={CollegeDataStyles.table}>
      <Table size="sm" striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Quota</th>
            <th>Preferences (leftmost being most preferred)</th>
          </tr>
        </thead>
        <tbody>
          {collegeData.map((ele, idx) => {
            return (
              <tr>
                <td>{idx}</td>
                <td>
                  {" "}
                  <input
                    type="text"
                    id={`college-${idx}-name`}
                    name="name"
                    value={collegeData[idx].name}
                    onChange={(event) => handleChange(event, idx)}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    id={`college-${idx}-quota`}
                    name="quota"
                    value={collegeData[idx].quota}
                    onChange={(event) => handleChange(event, idx)}
                  />
                </td>
                <td>
                  <DragPreference isGroup={true} idx={idx} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default CollegeData;
