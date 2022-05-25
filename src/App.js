import logo from './logo.svg';
import './App.css';
import { useState, useEffect, useRef } from "react";

function App() {
  {/*const [data, setCount] = useState(0);
  const [data1, setCount1] = useState(0);
  const [data2, setCount2] = useState(0);*/}
  const [count1, setCount1] = useState(0);
  const count = useRef(0);
  useEffect(() => {


     {/* setCount(count+1);*/}
     count.current = count.current + 1;
    
  }
  );
  return (
    
<>
<input type="button"  onClick={()=>{setCount1(count.current)}}/>
<h1>count{count.current}</h1>
{/*<input type="button" value={data} onClick={()=>{setCount(data+1)}}/>
<input type="button" value={data1}  onClick={()=>{setCount1(data+1)}}/>
  <input type="button" value={data2} onClick={()=>{setCount2(data+1)}}/>*/}
</>
   
  );
}

export default App;
