import React, {useContext} from "react";
import Header from "../components/Header";
import useForm from "../hooks/useForm";
import {User} from "../types";
import {UserContext} from "../context/UserContext";
import Footer from "../components/Footer";

export default () => {
    const [user] = useContext<[User, any]>(UserContext);
    const {handleSubmit, handleChange, errorMessage} = useForm("/article", { token: user.token });

    return (
        <div className="form-container">
            <Header/>
            <form onSubmit={handleSubmit}>
                {errorMessage !== "" && <p className="error">{errorMessage}</p>}
                <input className="form-element" type="text" name="title" placeholder="Title" onChange={handleChange} autoFocus/>
                <textarea className="form-element" name="body" placeholder="Write about your story" onChange={handleChange}/>
                <input className="btn" type="submit" value="Submit"/>
            </form>
            <Footer />
        </div>
    )
};