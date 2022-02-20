import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function Button(props) {

  const handleClick = () => props.handleClick(props.increment);
  return <button onClick={handleClick}> Add + {props.increment}</button>;
}

function Display(props) {
  return (
    <div>{props.counter}</div>
  )
}

function App() {

  const [counter, setCounter] = useState(5);
  const handleClick = (val) => setCounter(counter+val);
  return (
    <div>
      <Button handleClick={handleClick}  increment={1}/>
      <Button handleClick={handleClick}  increment={2}/>
      <Button handleClick={handleClick}  increment={3}/>
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
