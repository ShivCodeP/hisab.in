import React from "react";
import Box from "@mui/material/Box";

const Key = ({ color, value }) => {
  return (
    <Box
      sx={{
        backgroundColor: `${value}`,
        border: "none",

      }}
    >
      {value}
    </Box>
  );
};

export default Key;