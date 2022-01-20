import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "../src/Pages/Main";
import Workspace from "../src/Pages/Workspace";
function App() {
  return (
    <div>
      <BrowserRouter basename="/PortfolioWebsiteReact">
        <Switch>
          <Route path="/" exact render={() => <Main />} />
          <Route path="/workspace" exact render={() => <Workspace />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
