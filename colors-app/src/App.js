import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom"
import './App.css';
import Palette from "./Palette"
import seedColors from "./seedColors"
import { generatePalette } from "./colorHelpers"

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => (<Palette palette={generatePalette(seedColors[4])} />) } />
        <Route exact path="/palette/:id" render={() => (<Palette palette={generatePalette(seedColors[5])} />) } />
      </Switch>

      // <div className="App">
      //   <Palette palette={generatePalette(seedColors[4])} />
      // </div>
    );
  }
}

export default App;
