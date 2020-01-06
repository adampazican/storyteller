import React, {useContext} from "react";
import Header from "../components/Header";
import useForm from "../hooks/useForm";
import {User} from "../types";
import {UserContext} from "../context/UserContext";
import Footer from "../components/Footer";

export default () => {
    const [user, setUser] = useContext(UserContext);
    const {handleSubmit, handleChange, errorMessage} = useForm("/login", { onSuccessCallback: (newUser: User) => {
        // @ts-ignore
        setUser(newUser);
    }});

    return (
        <div className="form-container">
            <Header/>
            <form onSubmit={handleSubmit}>
                {errorMessage !== "" && <p className="error">{errorMessage}</p>}
                <input className="form-element" type="text" name="username" placeholder="username" onChange={handleChange} autoFocus/>
                <input className="form-element" type="password" name="password" placeholder="password" onChange={handleChange}/>
                <input className="btn" type="submit" value="Submit"/>
            </form>
            <Footer />
        </div>
    )
};