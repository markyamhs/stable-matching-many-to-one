import React, { useContext } from "react";
import { UserContext } from "../UserContext";
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
    </div>
  );
};

export default ResultSpreadSheet;
