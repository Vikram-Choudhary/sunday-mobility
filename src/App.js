import React, { useState } from "react";
import "./App.css";
import Background from "./Components/Generic/background";
import AppLogin from "./Components/Forms/login";
import {
    BrowserRouter as Router,
    Switch,
    Redirect,
    Route,
} from "react-router-dom";
import Register from "./Components/Forms/register";
import List from "./Components/list";

export default function App() {
    const [isAuth, setIsAuth] = useState(false);
    const loggedIn = () => {
        setIsAuth(true);
    };
    return (
        <Router>
            <div className="App">
                <div className="row m-0">
                    <Background className="col-sm -12 col-md-8 p-0" />
                    {!isAuth && <Redirect to="/" />}
                    <Switch>
                        <Route exact path="/">
                            <AppLogin isAuth={loggedIn} />
                        </Route>
                        <Route exact path="/register">
                            <Register />
                        </Route>
                        <Route exact path="/home">
                            <List />
                        </Route>
                    </Switch>
                </div>

            </div>
        </Router>
    );
}