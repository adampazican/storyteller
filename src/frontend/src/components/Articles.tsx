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

export function TopArticles() {
    const posts: Article[] = useFetchData('/top-articles');
    return (
        <ol>
            {posts.length !== 0 ? posts.map((post: any, index: number) =>
                <BlogPost key={index} title={post.title} body={post.body} date={post.date}/>
            ) : "Spinner"}
        </ol>
    );
}

export function MyArticles() {
    const history = useHistory();
    const [user] = useContext<[User, any]>(UserContext);
    if(Object.keys(user).length === 0) {
        history.push("/");
    }
    const posts: Article[] = useFetchData(`/user/${user.id}/article`, {
        method: HttpMethod.GET,
        headers: {
            "x-access-token": user.token
        }
    });
    return (
        <ul>
            {posts.length !== 0 ? posts.map((post: any, index: number) =>
                <MyBlogPost key={index} title={post.title} body={post.body} date={post.date} active={post.active}/>
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

const MyBlogPost = ({title, body, date, active}: any) =>
    <li> //TODO: onclick shnow moar
        <h3>{title}</h3>
        <p>{body}</p>
        <p>Autor ToDO {/*TODO:*/}</p>
        <p>{date}</p>
        {!active && <button>Post</button> /* TODO: makes active, sets date, ....*/}
        <button>Delete</button>
    </li>
;