import React from "react";
import Header from "../components/Header";
import useForm from "../hooks/useForm";

export default () => {
    const {handleSubmit, handleChange, errorMessage} = useForm("/register", {});
    return (
        <div>
            <Header/>
            <form onSubmit={handleSubmit} style={{marginTop: "75px" /*TODO: clean up into separate css file for form*/}}>
                { errorMessage !== "" && <p className="error">{errorMessage}</p> }
                <input type="text" name="username" placeholder="username" onChange={handleChange} autoFocus/>
                <input type="password" name="password" placeholder="password" onChange={handleChange}/>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
};