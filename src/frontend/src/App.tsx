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
import LogoutRoute from './routes/LogoutRoute';
import ArticleUpdateRoute from "./routes/ArticleUpdateRoute";

export default function App() {
    const [user, setUser] = useContext(UserContext);

    const storedUser = localStorage.getItem("user");
    if(storedUser && Object.keys(user).length === 0)
    {
        setUser(JSON.parse(storedUser));
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
                    <Route path="/logout">
                        <LogoutRoute/>
                    </Route>
                    <Route path="/article/:id/update" component={ArticleUpdateRoute}/>
                    <Route path="/article/:id" component={ArticleDetailRoute}/>
                    <Route path="/create-article">
                            <CreateArticleRoute/>
                    </Route>
                    <Route exact path="/">
                        <IndexRoute/>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};


/*
* TODO: IMPORTANT
*  - ROUTE RESTRICTION FRONTEND
*  - PAGINATOR
*  - SERVER: on index return built version of frontend
*  - RESPONSIVE MENU BUTTON
* */