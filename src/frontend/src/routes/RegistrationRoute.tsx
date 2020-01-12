import React from "react";
import Header from "../components/Header";
import useForm from "../hooks/useForm";
import Footer from "../components/Footer";
import {useHistory} from "react-router";

export default () => {
    const history = useHistory();
    const {handleSubmit, handleChange, errorMessage} = useForm("/register", { onSuccessCallback: () => {
        history.push("/");
    }});
    return (
        <div className="form-container">
            <Header/>
            <form onSubmit={handleSubmit}>
                { errorMessage !== "" && <p className="error">Zle meno alebo heslo</p> }
                <p>Register</p>
                <input className="form-element" type="text" name="username" placeholder="username" onChange={handleChange} autoFocus minLength={3} maxLength={20}/>
                <input className="form-element" type="password" name="password" placeholder="password" onChange={handleChange} minLength={5} maxLength={28}/>
                <input className="btn" type="submit" value="Submit"/>
            </form>
            <Footer />
        </div>
    )
};