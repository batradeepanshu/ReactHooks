import React from "react";
import logo from "./logo.svg";
import { Example1 } from "./components/Example1.js";
import { Example2 } from "./components/Example2.js";
import { Example3 } from "./components/Example3.js";
import { Component1 } from "./components/StateReuseExample/Component1.js";
import { Component2 } from "./components/StateReuseExample/Component2.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Example1 /> */}
        {/* <Example2 /> */}
        {/* <Example3 /> */}
        <Component2 />
        <Component1 />
      </header>
    </div>
  );
}

export default App;
