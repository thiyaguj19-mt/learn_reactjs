import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function Button() {
  const [counter, setCounter] = useState(5);
  //use regular function
  //return <button onClick={logRandom}>{counter}</button>
  //using arrow function
  //return <button onClick={() => alert(Math.random())}> {counter} </button>;
  //return <button onClick={() => setCounter(counter+1)}> {counter} </button>;
  return <button onClick={() => setCounter(counter*2)}> {counter} </button>;
}

ReactDOM.render(
  <React.StrictMode>
    <Button />
  </React.StrictMode>,
  document.getElementById('root')
);
