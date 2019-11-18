import React, {useContext} from "react";
import Header from "../components/Header";
import useForm from "../hooks/useForm";
import {LoggedUser, User} from "../types";
import {UserContext} from "../context/UserContext";

export default () => {
    const [user, setUser] = useContext(UserContext);
    const {handleSubmit, handleChange, errorMessage} = useForm("/article", { token: (user as User).token });

    return (
        <div>
            <Header/>
            <form onSubmit={handleSubmit}
                  style={{marginTop: "75px" /*TODO: clean up into separate css file for this component*/}}>
                {errorMessage !== "" && <p className="error">{errorMessage}</p>}
                <input type="text" name="title" placeholder="Title" onChange={handleChange}/>
                <textarea name="body" placeholder="Write about your story" onChange={handleChange}/>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
};