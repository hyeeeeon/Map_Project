import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Mainpage from "./Mainpage";
import Password from "./Password";
import InputPost from "./InputPost";
import Post from "./PostUpload";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Mainpage />
                </Route>
                <Route path="/password">
                    <Password />
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