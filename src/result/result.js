import React, { useContext } from "react";
import { UserContext } from "../UserContext";
import SpreadSheet from "../spreadsheet/spreadsheet";
import HexbinSizeChart from "../hexchart/hexchart";

const Result = () => {
  const { stuN, colN, individualResult, collegeResult, allPairs } = useContext(
    UserContext
  );
  return (
    <div>
      {collegeResult.length > 0 ? (
        <SpreadSheet isStu={false} data={collegeResult} />
      ) : null}
      {individualResult.length > 0 ? (
        <SpreadSheet isStu={true} data={individualResult} />
      ) : null}
      {allPairs.length > 0 ? (
        <HexbinSizeChart data={allPairs} stuN={stuN} colN={colN} />
      ) : null}
    </div>
  );
};

export default Result;
