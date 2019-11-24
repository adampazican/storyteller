import {Article, User} from "../types";
import useFetchData, {HttpMethod} from "../hooks/useFetchData";
import React, {useContext} from "react";
import {UserContext} from "../context/UserContext";
import {useHistory} from "react-router";

export function RecentArticles() {
    const posts: Article[] = useFetchData('/');
    return (
        <ul>
            {posts.length !== 0 ? posts.map((post: any, index: number) =>
                <BlogPost key={index} title={post.title} body={post.body} date={post.date}/>
            ) : "Spinner"}
        </ul>
    );
}

export function MyArticles() {
    const history = useHistory();
    const [user, setUser] = useContext(UserContext);
    if(!user) {
        history.push("/");
    }
    const posts: Article[] = useFetchData('/my', {
        method: HttpMethod.POST,
        headers: {
            "x-access-token": (user as User).token
        }
    });
    return (
        <ul>
            {posts.length !== 0 ? posts.map((post: any, index: number) =>
                <BlogPost key={index} title={post.title} body={post.body} date={post.date}/>
            ) : "Spinner"}
        </ul>
    );
}

const BlogPost = ({title, body, date}: any) =>
    <li>
        <h3>{title}</h3>
        <p>{body}</p>
        <p>Autor ToDO {/*TODO:*/}</p>
        <p>{date}</p>
    </li>
;