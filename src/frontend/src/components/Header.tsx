import React, {useContext} from "react";
import {Link} from "react-router-dom";
import {UserContext} from "../context/UserContext";

export default function () {
    const [user] = useContext(UserContext);

    return (
        <div id="header">
            <header>
                <h1>
                    <Link to="/">Story-teller</Link>
                </h1>
                <Menu user={user} />
            </header>
            <MobileMenu user={user} />
        </div>
    );
}

function Menu (props: any) {
    return (
        <div id="menu">
            {Object.keys(props.user).length === 0?
                <div>
                    <Link to="/register">Register</Link>
                    <Link to="/login">Login</Link>
                </div> :
                <div>
                    <Link to="/create-article">Novy pribeh</Link>
                    <Link to="/my-stories">Moje pribehy</Link>
                    <Link to="/logout">Odhlásiť</Link>
                </div>
            }
        </div>
    );
}

function MobileMenu(props: any){
    return (
        <div id="mobile-menu">
            <ul>
            {Object.keys(props.user).length === 0?
                <div>
                    <li><Link to="/register">Register</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </div> :
                <div>
                    <li><Link to="/create-article">Novy pribeh</Link></li>
                    <li><Link to="/my-stories">Moje pribehy</Link></li>
                    <li><Link to="/logout">Odhlásiť</Link></li>
                </div>
            }
            </ul>
        </div>
    );
}
