import React, { useState } from "react";
import "./App.css";
import { UserContext } from "./UserContext";
import Setup from "./setup/setup";
// const main = require("./roughPaper");
import RunAlgorithm from "./run-algorithm/runAlgorithm";

function App() {
  // main();
  const [stuN, setStuN] = useState(0);
  const [colN, setColN] = useState(0);
  const [initiated, initiate] = useState(false);
  const [collegeData, setCollegeData] = useState([]);
  const [individualData, setIndividualData] = useState([]);
  const [collegeResult, setCollegeResult] = useState([]);
  const [individualResult, setIndividualResult] = useState([]);
  const [logDetails, setLogDetails] = useState([]);
  return (
    <UserContext.Provider
      value={{
        stuN,
        setStuN,
        colN,
        setColN,
        initiated,
        initiate,
        collegeData,
        setCollegeData,
        individualData,
        setIndividualData,
        collegeResult,
        setCollegeResult,
        individualResult,
        setIndividualResult,
        logDetails,
        setLogDetails,
      }}
    >
      <div className="App">
        <div>many to one</div>
        <div>stable matching</div>
        <Setup />
        <RunAlgorithm />
      </div>
    </UserContext.Provider>
  );
}

export default App;
