import React, { useContext } from "react";
import { UserContext } from "../UserContext";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import SpreadSheet from "../spreadsheet/spreadsheet";

const ResultSpreadSheet = () => {
  const { individualResult, collegeResult } = useContext(UserContext);
  return (
    <div>
      {collegeResult.length > 0 ? (
        <SpreadSheet isStu={false} data={collegeResult} />
      ) : null}
      {individualResult.length > 0 ? (
        <SpreadSheet isStu={true} data={individualResult} />
      ) : null}
      <Button
        variant="primary"
        as={Link}
        to="/stable-matching-many-to-one/step4/charts"
      >
        View Charts
      </Button>
      <Button
        variant="primary"
        as={Link}
        to="/stable-matching-many-to-one/step4/logtxt"
      >
        View Log
      </Button>
    </div>
  );
};

export default ResultSpreadSheet;
