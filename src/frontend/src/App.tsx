import React, {useContext} from 'react';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import './App.css'
import IndexRoute from "./routes/IndexRoute";
import RegistrationRoute from "./routes/RegistrationRoute";
import LoginRoute from "./routes/LoginRoute";
import {UserContext} from "./context/UserContext";
import CreateArticleRoute from "./routes/CreateArticleRoute";
import MyStoriesRoute from "./routes/MyStoriesRoute";
import ArticleDetailRoute from "./routes/ArticleDetailRoute";
import {HttpMethod} from "./hooks/useFetchData";

//TODO IMPORTANT: do cookies or something so that refresh or automatic url doesnt unlog you

export default function App() {
    const [user, setUser] = useContext(UserContext);
    if(Object.keys(user).length === 0) {
        fetch("/api/v1/login", {
            method: HttpMethod.POST,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "username": "admin",
                "password": "admin"
            })
        }).then(data => data.json()).then(user => setUser(user));//TODO: hack
    }
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/about">
                        <h3>about</h3>
                    </Route>
                    <Route path="/register">
                        <RegistrationRoute/>
                    </Route>
                    <Route path="/my-stories">
                        <MyStoriesRoute/>
                    </Route>
                    <Route path="/login">
                        <LoginRoute/>
                    </Route>
                    <Route path="/article/:id" component={ArticleDetailRoute}/>
                    <Route path="/create-article">
                        {Object.keys(user).length !== 0 ?
                            <CreateArticleRoute/> :
                            <IndexRoute/>
                        }
                    </Route>
                    <Route path="/">
                        <IndexRoute/>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};