import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import List from "./components/List";
import Detail from "./components/Detail";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Main} />
        <Route exact path="/:city" component={List} />
        <Route exact path="/:city/detail/:num" component={Detail} />
      </div>
    </BrowserRouter>
  );
}

export default App;
