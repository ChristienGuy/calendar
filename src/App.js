import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Calendar from "./components/Calendar";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/:year/:month" component={Calendar} />
          <Route path="/" component={Calendar} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
