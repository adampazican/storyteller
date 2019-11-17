import React from "react";
import {Link} from "react-router-dom";

export default function () {
    return (
        <header id="header">
            <h1>
                <Link to="/">Story-teller</Link>
            </h1>
            <div>
                <Link to="/register">Register</Link>
                <Link to="/login">Login</Link>
            </div>
        </header>
    );
}
