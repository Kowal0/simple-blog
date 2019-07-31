import React from 'react';
import logo from './logo.svg';
import './App.css';

const callApi = async () => {
  const response = await fetch('/api/test.js');
  const json = await response.json();

  console.log(json);

};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={callApi}>Call api</button>
      </header>
    </div>
  );
}

export default App;
