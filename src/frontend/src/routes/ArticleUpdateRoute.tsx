import React, {useContext} from "react";
import {useParams} from "react-router";
import {User} from "../types";
import {UserContext} from "../context/UserContext";
import useFetchData, {HttpMethod} from "../hooks/useFetchData";
import Header from "../components/Header";
import Footer from "../components/Footer";
import useForm from "../hooks/useForm";
import {useHistory} from "react-router-dom";

export default (props: any) => {
    const {id} = useParams();
    const [user] = useContext<[User, any]>(UserContext);
    const history = useHistory();
    const fetchParams: RequestInit = {
        method: HttpMethod.POST,
        headers: {}
    };

    const [post] = useFetchData(`/article/${id}`, null, fetchParams);

    const {handleSubmit, handleChange, errorMessage} = useForm(`/article/${id}`, { token: user.token, method: HttpMethod.PUT, defaultState: post, onSuccessCallback: () => {
        history.push("/");
    }});

    if(Object.keys(user).length !== 0) {
        //@ts-ignore
        fetchParams.headers["x-access-token"] = user.token;
    }

    return (
        <div className="form-container">
            <Header/>
            <form onSubmit={handleSubmit}>
                {errorMessage !== "" && <p className="error">{errorMessage}</p>}
                <input className="form-element" type="text" name="title" placeholder="Title" onChange={handleChange} autoFocus defaultValue={post && post.title || ""} minLength={8} maxLength={28}/>
                <textarea className="form-element" name="body" placeholder="Write about your story" onChange={handleChange} defaultValue={post && post.body || ""} minLength={8} maxLength={20000}/>
                <input className="btn" type="submit" value="Submit"/>
            </form>
            <Footer />
        </div>
    );
}