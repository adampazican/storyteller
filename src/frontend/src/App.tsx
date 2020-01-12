import React, {useContext} from 'react';
import {Switch, Route, BrowserRouter as Router, Redirect} from 'react-router-dom';
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
                    <PrivateRoute path="/my-stories" user={user} Component={MyStoriesRoute}/>
                    <PrivateRoute path="/logout" user={user} Component={LogoutRoute}/>
                    <PrivateRoute path="/article/:id/update" Component={ArticleUpdateRoute} user={user}/>
                    <PrivateRoute path="/create-article" user={user} Component={CreateArticleRoute}/>

                    <Route path="/about">
                        <h3>about</h3>
                    </Route>
                    <Route path="/register">
                        <RegistrationRoute/>
                    </Route>
                    <Route path="/login">
                        <LoginRoute/>
                    </Route>
                    <Route path="/article/:id" Component={ArticleDetailRoute}/>
                    <Route exact path="/">
                        <IndexRoute/>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};

function PrivateRoute({ Component, user, ...rest }: any){
    return(
        <Route {...rest} render={(props) => (
            Object.keys(user).length !== 0
                ? <Component {...props} />
                : <Redirect to='/login' />
        )} />
    )
}

/*
* TODO: IMPORTANT
*  - PAGINATOR
*
*  - ROUTE RESTRICTION FRONTEND
*  - SERVER: on index return built version of frontend
*  - change password? user profile?
* */