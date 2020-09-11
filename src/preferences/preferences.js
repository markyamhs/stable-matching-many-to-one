import React, { useContext } from "react";
import { UserContext } from "../UserContext";
import { Tab, Tabs, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import IndividualData from "../individual-data/individualData";
import CollegeData from "../college-data/collegeData";

const Preferences = () => {
  const { initiated } = useContext(UserContext);
  return (
    <div>
      <h3>Step 2. Set preferences</h3>
      {initiated ? (
        <Tabs defaultActiveKey="Individuals" id="uncontrolled-tab-example">
          <Tab eventKey="Individuals" title="Individuals">
            <IndividualData />
          </Tab>
          <Tab eventKey="Groups" title="Groups">
            <CollegeData />
          </Tab>
        </Tabs>
      ) : (
        <div>You have not yet set the sizes of the two sides.</div>
      )}
      <div style={{ padding: "10px" }}>
        <Button
          variant="primary"
          as={Link}
          to="/stable-matching-many-to-one/step1"
          style={{ margin: "20px" }}
        >
          Previous step
        </Button>
        {initiated ? (
          <Button
            variant="primary"
            as={Link}
            to="/stable-matching-many-to-one/step3"
            style={{ margin: "20px" }}
          >
            Next step
          </Button>
        ) : null}
      </div>
    </div>
  );
};

export default Preferences;
