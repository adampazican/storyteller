import React, {useContext} from "react";
import {Link} from "react-router-dom";
import {UserContext} from "../context/UserContext";

export default function () {
    const [user, setUser] = useContext(UserContext);
    return (
        <header id="header">
            <h1>
                <Link to="/">Story-teller</Link>
            </h1>
            {Object.keys(user).length === 0?
                <div>
                    <Link to="/register">Register</Link>
                    <Link to="/login">Login</Link>
                </div> :
                <div>
                    <Link to="/create-article">Novy pribeh</Link>
                    <Link to="/my-stories">Moje pribehy</Link>
                </div>
            }
        </header>
    );
}
