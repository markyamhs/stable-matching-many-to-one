import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
const PageOne = [
  <div>Welcome to Matching Optimizier!</div>,
  <div>
    <div>
      This short tutorial will walk you through all of the features of this
      application.
    </div>
    <div>
      If you want to dive right in, feel free to press the "Skip Tutorial"
      button below. Otherwise, press "Next"!
    </div>
  </div>,
];
const PageTwo = [
  <div>What does this Matching Optimizier do?</div>,
  <div>
    <div>
      It finds the best matches between groups and individuals according to
      their preferences. It uses the{" "}
      <a
        href="https://en.wikipedia.org/wiki/Gale%E2%80%93Shapley_algorithm"
        target="_blank"
        rel="noopener noreferrer"
      >
        Gale–Shapley algorithm
      </a>{" "}
      for finding the solution.
    </div>
    <div>
      The Gale–Shapley algorithm guarantees that the matching it produces is
      either optimal for the participants on one side of the matching, or for
      the participants on the other side. It makes sure that all matches are{" "}
      <a
        href="https://en.wikipedia.org/wiki/Stable_marriage_problem"
        target="_blank"
        rel="noopener noreferrer"
      >
        stable
      </a>
      , or in other words, optimal.
    </div>
  </div>,
];
const PageThree = [
  <div>Step 1: Set sizes of party A and B</div>,
  <div>
    <div>
      Party A (Persons): Collection of persons who will only be matched to one
      group.
    </div>
    <div>
      Party B (Groups): Collection of groups which can be matched to more than
      one person, up to its quota.
    </div>
    <div>
      In{" "}
      <Button variant="dark" className="m-2">
        1. Initialize
      </Button>
      You will set the numbers of members for party A and B respectively.
    </div>
  </div>,
];
const PageFour = [
  <div>Step 2: Set preferences of each instances of party A and B</div>,
  <div>
    <div>
      In{" "}
      <Button variant="dark" className="m-2">
        2. Set Preferences
      </Button>
      You will set the preferences of each instances of party A and B
      respectively, and also set the quota for each of the member in party B.
    </div>
  </div>,
];
const PageFive = [
  <div>Step 3: Set which side to favour</div>,
  <div>
    <div>
      The outcome of the Gale–Shapley algorithm, guarantees that the matching it
      produces is either optimal for the participants on one side of the
      matching, or for the participants on the other side.
    </div>
    <div>
      In{" "}
      <Button variant="primary" className="m-2">
        3. Begin matching
      </Button>
      You will define which side is the favoured side.
    </div>
  </div>,
];
const Instructions = () => {
  const [showModal, setShowModal] = useState(true);
  const closeModal = () => setShowModal(false);
  const [page, setPage] = useState(1);
  let [title, content] = ["", ""];
  switch (page) {
    case 1:
      [title, content] = PageOne;
      break;
    case 2:
      [title, content] = PageTwo;
      break;
    case 3:
      [title, content] = PageThree;
      break;
    case 4:
      [title, content] = PageFour;
      break;
    case 5:
      [title, content] = PageFive;
      break;
    default:
    // code block
  }
  return (
    <Modal
      show={showModal}
      onHide={closeModal}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{content}</Modal.Body>
      <Modal.Footer className="d-flex justify-content-between">
        <div>
          <Button variant="secondary" className="m-2" onClick={closeModal}>
            Skip
          </Button>
        </div>
        <div>
          {page}/5
          {page !== 1 ? (
            <Button
              variant="primary"
              className="m-2"
              onClick={() => setPage(page - 1)}
            >
              Previous
            </Button>
          ) : null}
          {page !== 5 ? (
            <Button
              variant="primary"
              className="m-2"
              onClick={() => setPage(page + 1)}
            >
              Next
            </Button>
          ) : (
            <Button variant="primary" className="m-2" onClick={closeModal}>
              Start
            </Button>
          )}
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default Instructions;
