import React from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <p>Classic BIS List</p>
       <a href="#" data-wowhead="item=2828"></a>
      </header>
      <section className="Class-selection">
        <label>
          Rogue
          <input type="radio" value="Rogue" name="class"></input>
        </label>
        <label>
          Druid
          <input type="radio" value="Druid" name="class"></input>
        </label>
      </section>
    </div>
  );
}

export default App;
