import React, {FormEvent} from "react";
import Header from "../components/Header";

export default () => {

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        //TODO: fetch the backend and handle the response
    };

    const handleChange = () => {

    };
    return (
        <div>
            <Header/>
            <form onSubmit={handleSubmit} style={{marginTop: "75px" /*TODO: clean up into separate css file for this component*/}}>
                <input type="text" name="name" placeholder="name"/>
                <input type="password" name="pasword" placeholder="password"/>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
};