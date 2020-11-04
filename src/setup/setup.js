import React, { useContext, useState } from "react";
import { UserContext } from "../UserContext";
import Overlay from "../overlay/overlay";
import { Button, Modal } from "react-bootstrap";

const Setup = ({ history }) => {
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
  const [showModal, setShowModal] = useState(false);
  const initialize = (e) => {
    e.preventDefault();
    if (colN == 0 || stuN == 0) {
      setShowModal(true);
    } else {
      setCollegeData(createCollegeArray(colN));
      setIndividualData(createIndividualArray(stuN));
      initiate(true);
      history.push("/stable-matching-many-to-one/step2");
    }
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
    <div>
      <h3>Step 1. Initialize</h3>
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
      <form>
        <label>No. of individuals (e.g. applicants/trainees/employees):</label>
        <br />
        <input
          type="number"
          id="stuN"
          name="stuN"
          value={stuN}
          onChange={(e) => setStuN(e.target.value)}
        />
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
        <label>No. of Party B (e.g. colleges/teams/departments):</label>
        <br />
        <input
          type="number"
          id="colN"
          name="colN"
          value={colN}
          onChange={(e) => setColN(e.target.value)}
        />
        <Button onClick={initialize} variant="primary" className="d-block">
          {initiated ? "Reset" : "Set up"}
        </Button>
      </form>
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Invalid input</Modal.Title>
        </Modal.Header>
        <Modal.Body>Sizes of party A/B must be larger than zero!</Modal.Body>
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

export default Setup;
