import React, { useContext, useState } from "react";
import { UserContext } from "../UserContext";
import Overlay from "../overlay/overlay";
import { Tab, Tabs, Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import IndividualData from "../individual-data/individualData";
import CollegeData from "../college-data/collegeData";

const Preferences = ({ history }) => {
  const { initiated, collegeData } = useContext(UserContext);
  const [showModal, setShowModal] = useState(false);
  const nextStep = (e) => {
    e.preventDefault();
    if (
      collegeData.reduce((acc, ele) => {
        return acc + parseInt(ele.quota);
      }, 0) == 0
    ) {
      setShowModal(true);
    } else {
      history.push("/stable-matching-many-to-one/step3");
    }
  };
  return (
    <div>
      <h3>Step 2. Set preferences</h3>
      {initiated ? (
        // <Tabs defaultActiveKey="Individuals" id="uncontrolled-tab-example">
        //   <Tab eventKey="Individuals" title="Individuals">
        //     <IndividualData />
        //   </Tab>
        //   <Tab eventKey="Groups" title="Groups">
        //     <CollegeData />
        //   </Tab>
        // </Tabs>
        <>
          <div>
            Party A{" "}
            <Overlay
              title="Party A"
              content={
                <div>
                  Party A represents the <strong>student/applicant side</strong>{" "}
                  which can only be matched with at most one member of party B.
                </div>
              }
            />
          </div>
          <IndividualData />
          <br />
          <div>
            Party B{" "}
            <Overlay
              title="Party B"
              content={
                <div>
                  Party B represents the <strong>college/hospital side</strong>{" "}
                  with a positive integral quota equal or larger than 1
                </div>
              }
            />
          </div>
          <CollegeData />
        </>
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
            onClick={nextStep}
            style={{ margin: "20px" }}
          >
            Next step
          </Button>
        ) : null}
      </div>
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Invalid input</Modal.Title>
        </Modal.Header>
        <Modal.Body>Quota of party B must be larger than zero!</Modal.Body>
        <Modal.Footer className="d-flex justify-content-between">
          <div>
            <Button
              variant="secondary"
              className="m-2"
              onClick={() => setShowModal(false)}
            >
              OK
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Preferences;
