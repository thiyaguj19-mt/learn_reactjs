import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function Button(props) {


  //const handleClick = () => setCounter(counter*2);
  //use regular function
  //return <button onClick={logRandom}>{counter}</button>
  //using arrow function
  //return <button onClick={() => alert(Math.random())}> {counter} </button>;
  //return <button onClick={() => setCounter(counter+1)}> {counter} </button>;
  return <button onClick={props.handlClick}> Multiply by 2 </button>;
}

function Display(props) {
  return (
    <div>{props.counter}</div>
  )
}

function App() {

  const [counter, setCounter] = useState(5);
  const handleClick = () => setCounter(counter*2);
  return (
    <div>
      <Button handlClick={handleClick}/>
      <Display counter={counter}/>
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
