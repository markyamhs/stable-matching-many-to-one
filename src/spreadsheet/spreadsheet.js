import "handsontable/dist/handsontable.full.css";
import React from "react";
import { HotTable } from "@handsontable/react";
// import Handsontable from "handsontable";

const SpreadSheet = ({ data, isStu }) => {
  const dataIndexedOne = isStu
    ? data.map((ele) => {
        const newEle = { ...ele, rankingOfMatch: ele.rankingOfMatch + 1 };
        return newEle;
      })
    : data.map((ele) => {
        const newEle = {
          ...ele,
          rankingOfMatch: ele.rankingOfMatch.map((pos) => pos + 1),
        };
        return newEle;
      });
  const setting = isStu
    ? {
        data: dataIndexedOne,
        dataSchema: {
          idx: null,
          name: null,
          preferenceNames: null,
          matchedWithName: null,
          rankingOfMatch: null,
          isMatched: null,
        },
        startCols: 6,
        colHeaders: [
          "ID",
          "Name",
          "Matched with",
          "Ranking of its match",
          "Is matched?",
          "Original preference",
        ],
        rowHeaders: true,
        columns: [
          { data: "idx" },
          { data: "name" },
          { data: "matchedWithName" },
          { data: "rankingOfMatch" },
          { data: "isMatched" },
          { data: "preferenceNames" },
        ],

        licenseKey: "non-commercial-and-evaluation",
      }
    : {
        data: dataIndexedOne,
        dataSchema: {
          idx: null,
          name: null,
          quota: null,
          preferenceNames: null,
          matchedWithName: null,
          rankingOfMatch: null,
          quotaLeft: null,
        },
        startCols: 7,
        colHeaders: [
          "ID",
          "Name",
          "Quota",
          "Matched with",
          "Ranking of its match",
          "Quota left",
          "Original preference",
        ],
        rowHeaders: true,
        columns: [
          { data: "idx" },
          { data: "name" },
          { data: "quota" },
          { data: "matchedWithName" },
          { data: "rankingOfMatch" },
          { data: "quotaLeft" },
          { data: "preferenceNames" },
        ],

        licenseKey: "non-commercial-and-evaluation",
      };
  return (
    <div>
      <div>
        {isStu
          ? "Matching result of the individuals:"
          : "Matching result of the groups:"}
      </div>
      <HotTable settings={setting} />
    </div>
  );
};

export default SpreadSheet;
