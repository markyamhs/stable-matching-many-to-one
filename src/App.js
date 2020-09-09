import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import { UserContext } from "./UserContext";
import Layout from "./layout/layout";
import Instructions from "./instructions/instructions";
import Setup from "./setup/setup";
import RunAlgorithm from "./run-algorithm/runAlgorithm";
import Result from "./result/result";

function App() {
  const [stuN, setStuN] = useState(0);
  const [colN, setColN] = useState(0);
  const [initiated, initiate] = useState(false);
  const [collegeData, setCollegeData] = useState([]);
  const [individualData, setIndividualData] = useState([]);
  const [collegeResult, setCollegeResult] = useState([]);
  const [individualResult, setIndividualResult] = useState([]);
  const [logDetails, setLogDetails] = useState([]);
  const [allPairs, setAllPairs] = useState([]);

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
        allPairs,
        setAllPairs,
      }}
    >
      <Layout>
        {/* <Instructions /> */}
        <Switch>
          <Route exact path="/" component={Setup} />
          <Route exact path="/run" component={RunAlgorithm} />
          <Route exact path="/results" component={Result} />
        </Switch>
        {/* <Setup />
        <RunAlgorithm />
        <Result /> */}
      </Layout>
    </UserContext.Provider>
  );
}

export default App;
