import React, { useState } from "react";
import "./App.css";
import { UserContext } from "./UserContext";
import Setup from "./setup/setup";
import DraggableRow from "./dragNdrop/draggableRow";
import DragPreferrence from "./dragNdrop/dragPreferrence";
const main = require("./roughPaper");

function App() {
  // main();
  const [stuN, setStuN] = useState(0);
  const [colN, setColN] = useState(0);
  const [initiated, initiate] = useState(false);
  const [collegeData, setCollegeData] = useState([]);
  const [individualData, setIndividualData] = useState([]);
  console.log(collegeData);
  console.log(individualData);
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
      }}
    >
      <div className="App">
        <div>many to one</div>
        <div>stable matching</div>
        <Setup />
        {/* <DraggableRow /> */}
        {initiated ? <DragPreferrence isGroup={false} idx={1} /> : null}
      </div>
    </UserContext.Provider>
  );
}

export default App;
