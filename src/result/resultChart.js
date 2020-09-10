import React, { useContext } from "react";
import { UserContext } from "../UserContext";
import HexbinSizeChart from "../hexchart/hexchart";

const ResultChart = () => {
  const { stuN, colN, allPairs } = useContext(UserContext);
  return (
    <div>
      {allPairs.length > 0 ? (
        <HexbinSizeChart data={allPairs} stuN={stuN} colN={colN} />
      ) : null}
    </div>
  );
};

export default ResultChart;
