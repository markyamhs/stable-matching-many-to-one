import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import { UserContext } from "./UserContext";
import Layout from "./layout/layout";
import Landing from "./landing/landing";
import Instructions from "./instructions/instructions";
import Preferences from "./preferences/preferences";
import Setup from "./setup/setup";
import RunAlgorithm from "./run-algorithm/runAlgorithm";
import ResultSpreadSheet from "./result/resultSpreadSheet";
import ResultChart from "./result/resultChart";
import ResultLogTxt from "./result/resultLogTxt";

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
  const [isFavorStudent, setIsFavorStudent] = useState(false);

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
        isFavorStudent,
        setIsFavorStudent,
      }}
    >
      <Layout>
        <Instructions />
        <Switch>
          <Route
            exact
            path="/stable-matching-many-to-one/"
            component={Landing}
          />
          <Route
            exact
            path="/stable-matching-many-to-one/step1"
            component={Setup}
          />
          <Route
            exact
            path="/stable-matching-many-to-one/step2"
            component={Preferences}
          />
          <Route
            exact
            path="/stable-matching-many-to-one/step3"
            component={RunAlgorithm}
          />
          <Route
            exact
            path="/stable-matching-many-to-one/step4/spreadsheets"
            component={ResultSpreadSheet}
          />
          <Route
            exact
            path="/stable-matching-many-to-one/step4/charts"
            component={ResultChart}
          />
          <Route
            exact
            path="/stable-matching-many-to-one/step4/logtxt"
            component={ResultLogTxt}
          />
        </Switch>
      </Layout>
    </UserContext.Provider>
  );
}

export default App;
