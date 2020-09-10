import React, { useContext } from "react";
import { UserContext } from "../UserContext";
import IndividualData from "../individual-data/individualData";
import CollegeData from "../college-data/collegeData";

const Preferences = () => {
  const { initiated } = useContext(UserContext);
  return (
    <div>
      <h3>Step 2. Set preferences</h3>
      {initiated ? (
        <>
          <IndividualData />
          <CollegeData />
        </>
      ) : null}
    </div>
  );
};

export default Preferences;
