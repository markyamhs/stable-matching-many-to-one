import React, { useContext } from "react";
import { UserContext } from "../UserContext";
import run from "../algorithm/run";

const RunAlgorithm = () => {
  const {
    initiated,
    collegeData,
    setCollegeResult,
    individualData,
    setIndividualResult,
    logDetails,
    setLogDetails,
    setAllPairs,
  } = useContext(UserContext);
  const runAlgorithm = (e) => {
    e.preventDefault();
    const [newIndividualData, newCollegeData, logDetails, allPairs] = run(
      individualData,
      collegeData
    );
    setCollegeResult(newCollegeData);
    setIndividualResult(newIndividualData);
    setLogDetails(logDetails);
    setAllPairs(allPairs);
  };

  return (
    <div>
      {initiated ? (
        <button onClick={runAlgorithm}>Begin matching</button>
      ) : null}
      {logDetails.map((round, index1) => (
        <div key={index1}>
          {round.map((sentence, index2) => (
            <p key={index2}>{sentence}</p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default RunAlgorithm;
