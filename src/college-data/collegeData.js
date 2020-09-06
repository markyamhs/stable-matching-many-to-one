import React, { useContext } from "react";
import { UserContext } from "../UserContext";
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
    <>
      <form>
        {collegeData.map((ele, idx) => {
          return (
            <div key={idx} className={CollegeDataStyles.rowContainer}>
              <div>Group {idx}</div>
              <div>
                Name
                <input
                  type="text"
                  id={`college-${idx}-name`}
                  name="name"
                  value={collegeData[idx].name}
                  onChange={(event) => handleChange(event, idx)}
                />
              </div>
              <div>
                Quota
                <input
                  type="number"
                  id={`college-${idx}-quota`}
                  name="quota"
                  value={collegeData[idx].quota}
                  onChange={(event) => handleChange(event, idx)}
                />
              </div>
              <div>
                Preference
                <DragPreference isGroup={true} idx={idx} />
              </div>
            </div>
          );
        })}
      </form>
    </>
  );
};

export default CollegeData;
