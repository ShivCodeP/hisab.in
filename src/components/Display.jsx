import { Box } from "@mui/material";
import React from "react";

const Display = ({result,history}) => {

    return <Box sx={{
        width:"90%",
        display:"flex",
        flexDirection:"column",
        border:"1px solid black",
        borderRadius:"2px",
    }}>
        <Box sx={{
            textAlign:"right",
            display:"flex",
            padding:"10px",
            flexDirection:'column',
            height:"100px",
            justifyContent:"flex-end",
            overflowY:"scroll"
        }}> {history.map(e => <div>{e}</div>)}</Box>
        <Box sx={{display:"flex",justifyContent:"flex-end",padding:"10px"}}>{result}</Box>
    </Box>
}

export default Display;