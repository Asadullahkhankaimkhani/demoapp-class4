import React,{useState} from 'react';
import './App.css';
import './Message.js'
import Message from './Message.js';

function App() {
  
  let [count , setCount] = useState(0);
  let [isMorning , setisMorning] = useState(true);
  
  return (
    <div class= {isMorning ? 'box':'isMorning'}> 
      <Message count={count}></Message>
  <h1>Good {isMorning ? 'Night':'Morning'}</h1>
     <button onClick={()=> setCount(++count)}>Updating Value</button>
     <button onClick={()=> setisMorning(!isMorning)}>Updating Color</button>
    </div>
  );
}

export default App;
