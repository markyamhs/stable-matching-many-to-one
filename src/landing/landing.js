import React from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Button } from "react-bootstrap";

const Landing = () => {
  return (
    <div>
      <Jumbotron>
        <h1>Let computers do your matching</h1>
        <p>
          Having trouble in deciding how to put your employees in different
          teams/departments? Let the amazing algorithm finds the optimal matches
          for you.
        </p>
        <p>
          <Button
            variant="primary"
            as={Link}
            to="/stable-matching-many-to-one/step1"
          >
            Start
          </Button>
        </p>
      </Jumbotron>
      <div className="p-4">
        <h1>What problem does it solve?</h1>
        <p>
          The National Resident Matching Program (NRMP), also called The
          Match,[1] is a United States-based private non-profit non-governmental
          organization created in 1952 to place U.S. medical school students
          into residency training programs located in United States teaching
          hospitals. Its mission has since expanded to include the placement of
          U.S. citizen and non-U.S. citizen international medical school
          students and graduates into residency and fellowship training
          programs. In addition to the annual Main Residency Match that
          encompasses more than 43,000 applicants and 31,000 positions, the NRMP
          conducts Fellowship Matches for more than 60 subspecialties through
          its Specialties Matching Service (SMS). The NRMP is sponsored by a
          Board of Directors that includes medical school deans, teaching
          hospital executives, graduate medical education program directors,
          medical students and residents, and one public member.
        </p>
        <div>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/mFh3JIaMGJo"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <h1>How does this work?</h1>
        <div>
          <p>
            It finds the best matches between groups and individuals according
            to their preferences. It uses the{" "}
            <a
              href="https://en.wikipedia.org/wiki/Gale%E2%80%93Shapley_algorithm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Gale–Shapley algorithm
            </a>{" "}
            for finding the solution.
          </p>
          <p>
            The Gale–Shapley algorithm guarantees that the matching it produces
            is either optimal for the participants on one side of the matching,
            or for the participants on the other side. It makes sure that all
            matches are{" "}
            <a
              href="https://en.wikipedia.org/wiki/Stable_marriage_problem"
              target="_blank"
              rel="noopener noreferrer"
            >
              stable
            </a>
            , or in other words, optimal.
          </p>
        </div>
        <div>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/fudb8DuzQlM"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <Button
          variant="primary"
          href="https://core.ac.uk/download/pdf/42368869.pdf"
        >
          Academic reference
        </Button>
        <p></p>
      </div>
    </div>
  );
};

export default Landing;
