import React, { useContext } from "react";
import { UserContext } from "../UserContext";
import Overlay from "../overlay/overlay";
import Instructions from "../instructions/instructions";
import IndividualData from "../individual-data/individualData";
import CollegeData from "../college-data/collegeData";

const Setup = () => {
  const {
    stuN,
    setStuN,
    colN,
    setColN,
    initiated,
    initiate,
    setCollegeData,
    setIndividualData,
  } = useContext(UserContext);
  const initialize = (e) => {
    e.preventDefault();
    setCollegeData(createCollegeArray(colN));
    setIndividualData(createIndividualArray(stuN));
    initiate(true);
  };
  const createCollegeArray = (colN) => {
    let newCollegeArray = [];
    for (var i = 0; i < colN; i++) {
      newCollegeArray.push({
        idx: i,
        name: `Group ${i}`,
        quota: 0,
        preference: Array.from(Array(parseInt(stuN)).keys()),
      });
    }
    return newCollegeArray;
  };
  const createIndividualArray = (stuN) => {
    let newIndividualArray = [];
    for (var i = 0; i < stuN; i++) {
      newIndividualArray.push({
        idx: i,
        name: `Person ${i}`,
        preference: Array.from(Array(parseInt(colN)).keys()),
      });
    }
    return newIndividualArray;
  };
  return (
    <>
      <Instructions />
      <div>
        <div>Step 1. Initialize</div>
        <form>
          <div>
            Party A <Overlay />
          </div>
          <label>
            No. of individuals (e.g. applicants/trainees/employees):
          </label>
          <br />
          <input
            type="number"
            id="stuN"
            name="stuN"
            value={stuN}
            onChange={(e) => setStuN(e.target.value)}
          />
          <br />
          <label>No. of groups (e.g. colleges/teams/departments):</label>
          <br />
          <input
            type="number"
            id="colN"
            name="colN"
            value={colN}
            onChange={(e) => setColN(e.target.value)}
          />
          {initiated ? (
            <button onClick={initialize}>Reset</button>
          ) : (
            <button onClick={initialize}>Set up</button>
          )}
        </form>
      </div>
      {initiated ? (
        <>
          <IndividualData />
          <CollegeData />
        </>
      ) : null}
    </>
  );
};

export default Setup;
