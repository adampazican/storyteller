import React, {useContext, useState} from "react";
import {Link} from "react-router-dom";
import {UserContext} from "../context/UserContext";
import {ReactComponent as MenuButton} from "../menu.svg";

export default function () {
    const [user] = useContext(UserContext);
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div id="header">
            <header>
                <h1>
                    <Link to="/">Story-teller</Link>
                </h1>
                <Menu user={user} toggleMenu={toggleMenu}/>
            </header>
            <MobileMenu user={user} isMenuOpen={menuOpen}/>
        </div>
    );
}

function Menu (props: any) {
    return (
        <div id="menu">
            {Object.keys(props.user).length === 0?
                <div className="menu-items">
                    <Link to="/register">Register</Link>
                    <Link to="/login">Login</Link>
                </div> :
                <div className="menu-items">
                    <Link to="/create-article">Novy pribeh</Link>
                    <Link to="/my-stories">Moje pribehy</Link>
                    <Link to="/logout">Odhlásiť</Link>
                </div>
            }

            <div className="menu-button" onClick={() => props.toggleMenu()}>
                <MenuButton />
            </div>
        </div>
    );
}

function MobileMenu(props: any){
    return (
        <div id="mobile-menu" style={props.isMenuOpen && { display: "block" } || {}}>
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
