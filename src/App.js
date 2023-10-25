import { useState } from 'react';

import logo from './logo.svg';
import './App.css';
import { azle_hello_world } from './declarations/azle_hello_world';

function App() {

  const [msg, setMsg] = useState("");
  const [inputMsg, setInputMsg] = useState("");

  const handleChange = event => {
    setInputMsg(event.target.value);
  };

  const setMessage = () => {

    azle_hello_world.set_message(inputMsg);
  
  };

  const getMessage = async () => {
    
    const msg = await azle_hello_world.get_message();
    setMsg(msg)

  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        Message: <input  type="text" id="msg "name="msg" onChange={handleChange} value={inputMsg} />
        </p>
      <button onClick={setMessage}>Submit</button>
    <button onClick={getMessage}>Get message</button>
    <p>{msg}</p>
      </header>
    </div>
  );
}

export default App;
