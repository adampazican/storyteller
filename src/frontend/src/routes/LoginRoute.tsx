import React, {useContext} from "react";
import Header from "../components/Header";
import useForm from "../hooks/useForm";
import {User} from "../types";
import {UserContext} from "../context/UserContext";

export default () => {
    const [setUser] = useContext(UserContext);
    const {handleSubmit, handleChange, errorMessage} = useForm("/login", { onSuccessCallback: (newUser: User) => {
        // @ts-ignore
        setUser(newUser);
    }});

    return (
        <div>
            <Header/>
            <form onSubmit={handleSubmit}
                  style={{marginTop: "75px" /*TODO: clean up into separate css file for this component*/}}>
                {errorMessage !== "" && <p className="error">{errorMessage}</p>}
                <input type="text" name="username" placeholder="username" onChange={handleChange} autoFocus/>
                <input type="password" name="password" placeholder="password" onChange={handleChange}/>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
};