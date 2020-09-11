import React, { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";
import run from "../algorithm/run";

const RunAlgorithm = ({ history }) => {
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
    history.push("/stable-matching-many-to-one/step4/spreadsheets");
  };

  return (
    <div>
      <h3>Step 3. Begin matching</h3>
      {initiated ? (
        <div>
          <Form>
            <div key="inline-radio" className="mb-3">
              <Form.Check
                inline
                label="Favour party A (individual side)"
                type="radio"
                id="inline-radio-1"
                name="exampleRadios"
              />
              <Form.Check
                inline
                label="Favour party B (group side)"
                type="radio"
                id="inline-radio-2"
                name="exampleRadios"
              />
            </div>
          </Form>
          <Button
            variant="primary"
            as={Link}
            to="/stable-matching-many-to-one/step2"
            style={{ margin: "20px" }}
          >
            Previous step
          </Button>
          <Button onClick={runAlgorithm} style={{ margin: "20px" }}>
            Begin matching
          </Button>
        </div>
      ) : (
        <div>
          <div>You have not yet set the sizes of the two sides.</div>
          <Button
            variant="primary"
            as={Link}
            to="/stable-matching-many-to-one/step1"
            style={{ margin: "20px" }}
          >
            Return to setup
          </Button>
        </div>
      )}
    </div>
  );
};

export default RunAlgorithm;
