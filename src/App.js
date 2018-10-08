import React, { Component } from "react";
import "./App.css";
import CodeEditor from "./CodeEditor";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">ExplainSyntax</header>
        <CodeEditor />
      </div>
    );
  }
}

export default App;
