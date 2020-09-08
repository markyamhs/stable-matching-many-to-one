import React, { useState } from "react";
import "react-vis/dist/style.css";
import {
  XYPlot,
  HexbinSeries,
  XAxis,
  YAxis,
  ChartLabel,
  Borders,
  Hint,
} from "react-vis";

const HexbinSizeChart = ({ data, stuN, colN }) => {
  const [hoveredNode, setHoveredNode] = useState();
  const dataIndexedOne = data.map((ele) => {
    const newEle = {
      ...ele,
      stuPreference: ele.stuPreference + 1,
      colPreference: ele.colPreference + 1,
    };
    return newEle;
  });
  return (
    <XYPlot
      xDomain={[-1, colN + 1]}
      yDomain={[-1, stuN + 1]}
      getX={(d) => d.stuPreference}
      getY={(d) => d.colPreference}
      width={500}
      height={300}
      margin={50}
      onMouseLeave={() => setHoveredNode(null)}
    >
      <HexbinSeries
        sizeHexagonsWithCount
        animation
        className="hexbin-example"
        style={{
          stroke: "#125C77",
          strokeLinejoin: "round",
        }}
        colorRange={["orange", "cyan"]}
        onValueMouseOver={(d) => {
          setHoveredNode(d);
        }}
        radius={15}
        data={dataIndexedOne}
      />
      <Borders style={{ all: { fill: "#fff" } }} />
      <XAxis />
      <YAxis />
      <ChartLabel
        text="Position of selected persons in preference list"
        className="alt-x-label"
        xPercent={0.1}
        yPercent={0.0}
        style={{
          transform: "rotate(90)",
          textAnchor: "start",
        }}
      />

      <ChartLabel
        text="Position of selected groups in preference list"
        className="alt-y-label"
        xPercent={0.5}
        yPercent={0.65}
        style={{
          textAnchor: "start",
        }}
      />
      {hoveredNode && (
        <Hint
          xType="literal"
          yType="literal"
          getX={(d) => hoveredNode[0].stuPreference}
          getY={(d) => hoveredNode[0].colPreference}
          value={{
            "personal preference": hoveredNode[0].stuPreference,
            "group preference": hoveredNode[0].colPreference,
            match:
              hoveredNode.length === 1
                ? hoveredNode[0].pairing
                : `${hoveredNode[0].pairing} and ${
                    hoveredNode.length - 1
                  } more`,
            frequency: hoveredNode.length,
          }}
        />
      )}
    </XYPlot>
  );
};

export default HexbinSizeChart;
