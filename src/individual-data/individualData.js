import React, { useContext } from "react";
import { UserContext } from "../UserContext";
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
    <>
      <form>
        {individualData.map((ele, idx) => {
          return (
            <div key={idx} className={IndividualDataStyles.rowContainer}>
              <div>Person {idx}</div>
              <div>
                Name
                <input
                  type="text"
                  id={`individual-${idx}-name`}
                  name="name"
                  value={individualData[idx].name}
                  onChange={(event) => handleChange(event, idx)}
                />
              </div>
              <div>
                Preference
                <DragPreference isGroup={false} idx={idx} />
              </div>
            </div>
          );
        })}
      </form>
    </>
  );
};

export default IndividualData;
