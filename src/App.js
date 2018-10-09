import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import ExplainPain from './ExplainPain';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header className="App-header" />
        <ExplainPain className="App-body"/> 
        <Footer />
      </div>
    );
  }
}

export default App;
