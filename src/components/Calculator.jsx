import { Box } from "@mui/system";
import React, { useState } from "react";
import data from "../data/keys.json";

const Calcualator = ({ result,setResult, history,setHistory }) => {

  return (
    <Box
      sx={{
        display: "grid",
        width: "90%",
        margin: "auto",
        gridTemplateColumns: "repeat(4,25%)",
        gridTemplateRows: "repeat(4,25%)",
        gap: "3px",
        height: "60%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {data.key.map(({ val }) => (
        <Box
          onClick={() => {
            if(val != "=") {
                setResult(prev => prev+val)
            }
            else {
                let ans = eval(result);
                setResult(ans);
                setHistory([...history,ans])
            }
          }}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid black",
            borderRadius: "5px",
            width: "100%",
            height: "100%",
          }}
        >
          {val}
        </Box>
      ))}
    </Box>
  );
};

export default Calcualator;
