import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button, Text } from "@alexdametto/test-react-library";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <div className="p-2">
          <Button className="underline" />
          <Text />
        </div>
      </header>
    </div>
  );
}

export default App;
