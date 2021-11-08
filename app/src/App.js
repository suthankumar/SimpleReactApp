import logo from './logo.svg';
import './App.css';
import React, {useState } from "react";

function App() {
const [username, setUserName] = useState("");
const [password, setPassword] = useState("");

//Update the username or password
  const updateData = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    if(name==="username") setUserName(value);
    else setPassword(value)
  };

  //Submit handler 
  const login = (e) => {
    e.preventDefault();
    const data = { username, password };

    fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        })
        .then(response => response.text())
        .then(data => {
          console.log('Success:', data);
          alert(data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
   
      }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" />
        <div>
          <form className="form">
            <label>
              Username 
              <input type="text" name="username" value={username} onChange={updateData}/>
            </label>
            <label>
              Password 
              <input type="password" name="password" value={password} onChange={updateData} />
            </label>
            <input class= "button"type="submit" value="Submit" onClick= {login}/>
          </form>
        </div>
      </header>
    </div>
  );
}

export default App;
