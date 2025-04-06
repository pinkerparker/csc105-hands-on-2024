import { useState } from 'react';
import './App.css';

const Cal = () => {
  const [ans, setAns] = useState(0);
  const [input, setInput] = useState('');

  function add(){
    setAns((numbefore) => numbefore + input);
  }

  function substract(){
    setAns((numbefore) => numbefore - input);
  }

  function multiply(){
    setAns((numbefore) => numbefore * input);


    
  }

  function divide(){
    setAns((numbefore) => numbefore / input);
  }

  function resetInput(){
    setInput('');
  }

  function resetResult(){
    setAns(0);
  }


  return (
      <>
        <div className =  "box">
          <h1>Calculator</h1>
          
          <div>
            <input className="input" placeholder="enter number" type="number" value={input} 
            onChange={(e) => {
              setInput(Number(e.target.value));
            }}  
            />
          </div>
          
          <div>
            <button onClick={add}>Add</button>
            <button onClick={substract}>substract</button>
          </div>
          <div>
            <button onClick={multiply}>Multiply</button>
            <button onClick={divide}>Divide</button>
          </div> 
          <div>
            <button onClick={resetInput}>ResetInput</button>
            <button onClick={resetResult}>ResetResult</button>
          </div>

          <div>
            Result: {ans}
          </div>
          </div>
          
      </>
  );

};
