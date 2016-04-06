import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import Main from "./components/Main";
import Home from "./components/Home";
import PromptContainer from "./containers/PromptContainer";
import ConfirmBattleContainer from "./containers/ConfirmBattleContainer";
import ResultsContainer from "./containers/ResultsContainer";

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Home}></IndexRoute>
      <Route path='playerOne' header='Player One' component={PromptContainer}></Route>
      <Route path='playerTwo/:playerOne' header='Player Two' component={PromptContainer}></Route>
      <Route path='battle' header='Player Two' component={ConfirmBattleContainer}></Route>
      <Route path='results' component={ResultsContainer} />
    </Route>
  </Router>,
app);