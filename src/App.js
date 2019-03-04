import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Works from "./pages/Works";
import Moorse from "./pages/Moorse";
import Skin from "./pages/Skin";
import Shelves from "./pages/Shelves";
import Scenect from "./pages/Scenect";
import Experiments from "./pages/Experiments";


export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route exact path="/works" component={Works} />
          <Switch>
            <Route path="/works/moorse" component={Moorse} />
            <Route path="/works/skin" component={Skin} />
            <Route path="/works/shelves" component={Shelves} />
            <Route path="/works/scenect" component={Scenect} />
            <Route path="/works/experiments" component={Experiments} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
