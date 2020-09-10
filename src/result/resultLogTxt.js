import React, { useContext } from "react";
import { UserContext } from "../UserContext";

const ResultLogTxt = () => {
  const { logDetails } = useContext(UserContext);

  return (
    <div>
      {logDetails.map((round, index1) => (
        <div key={index1}>
          {round.map((sentence, index2) => (
            <p key={index2}>{sentence}</p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ResultLogTxt;
