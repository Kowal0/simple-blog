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
        <a href={`https://dev-dfeuc1-x.eu.auth0.com/login?client=SQlewqkgLFSMwLKT9s5rtTHTwMt0Jq3L&redirect_uri=http://localhost:3000/api/callback`}>
            Login
        </a>
      </header>
    </div>
  );
}

export default App;
