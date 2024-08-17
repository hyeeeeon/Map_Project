import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PassWord from "./password";
import InputPost from "./InputPost";
import MainPage from "./MainPage";
import Post from "./post";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <MainPage />
        </Route>
        <Route path="/password">
          <PassWord />
        </Route>
        <Route path="/page">
          <InputPost />
        </Route>
          <Route path="/post">
          <Post />
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
