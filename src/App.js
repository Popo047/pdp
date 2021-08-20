import "./App.css";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Temp from "./components/Temp";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Temp} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
