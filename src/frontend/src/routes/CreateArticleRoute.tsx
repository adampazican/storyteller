import React, {useContext} from "react";
import Header from "../components/Header";
import useForm from "../hooks/useForm";
import {User} from "../types";
import {UserContext} from "../context/UserContext";
import Footer from "../components/Footer";
import {useHistory} from "react-router";

export default () => {
    const [user] = useContext<[User, any]>(UserContext);
    const history = useHistory();
    const {handleSubmit, handleChange, errorMessage} = useForm("/article", { token: user.token, onSuccessCallback: () => {
        history.push("/");
    }});

    return (
        <div className="form-container">
            <Header/>
            <form onSubmit={handleSubmit}>
                {errorMessage !== "" && <p className="error">Nespravne parametre</p>}
                <input className="form-element" type="text" name="title" placeholder="Title" onChange={handleChange} autoFocus minLength={8} maxLength={20}/>
                <textarea className="form-element" name="body" placeholder="Write about your story" onChange={handleChange} minLength={8} maxLength={20000}/>
                <input className="btn" type="submit" value="Submit"/>
            </form>
            <Footer />
        </div>
    )
};