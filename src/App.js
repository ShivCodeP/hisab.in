import { Box } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import './App.css';
import {SpeechRec,Calcualator,Display} from './components';

function App() {

  const [result,setResult] = useState("");
  const [history,setHistory] = useState([])


  return (
    <div className="App">
      <Box sx={{
        width:"25%",
        margin: "auto",
        marginTop:"10vh",
        display:'flex',
        padding:"10px",
        flexDirection:"column",
        alignItems:"center",
        height:"60vh",
        border:"2px solid red",
        justifyContent:"center"

      }}>
        <Display result={result} history={history} />
        <Calcualator result={result} setResult={setResult} history={history} setHistory={setHistory} />
      </Box>
    </div>
  );
}

export default App;
