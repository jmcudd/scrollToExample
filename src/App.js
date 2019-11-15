import React from "react";
import "./App.css";

import Menu from "./Menu";
import ItemList from "./ItemList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu />
        <ItemList />
      </header>
    </div>
  );
}

export default App;
