import React from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

function App() {
    React.useEffect(() => {
        const checkUser = async () => {
            const response = await axios('/api/user');
            console.log(response);
        };

        checkUser();
    }, []);

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
