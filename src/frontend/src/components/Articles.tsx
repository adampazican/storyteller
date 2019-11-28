import {Article, User} from "../types";
import useFetchData, {HttpMethod} from "../hooks/useFetchData";
import React, {useContext} from "react";
import {UserContext} from "../context/UserContext";
import {useHistory, useParams} from "react-router";
import {Link} from "react-router-dom";

export function ArticleDetail(props: any) {
    const {id} = useParams();
    const [user] = useContext<[User, any]>(UserContext);
    
    const fetchParams: RequestInit = {
        method: HttpMethod.POST,
        headers: {}
    };
    
    if(Object.keys(user).length !== 0) {
        //@ts-ignore
        fetchParams.headers["x-access-token"] = user.token;
    }
    const post: Article = useFetchData(`/article/${id}`, null, fetchParams);
    return (
        <div className="ArticleDetail">
            {post == null ? "Spinner" : <BlogPostDetail {...post}/>}
        </div>
    );
}

export function RecentArticles() {
    const posts: Article[] = useFetchData('/', []);
    return (
        <ul>
            {posts.length !== 0 ? posts.map((post: Article, index: number) =>
                <li key={index}>
                    <BlogPost {...post}/>
                </li>
            ) : "Spinner"}
        </ul>
    );
}

export function TopArticles() {
    const posts: Article[] = useFetchData('/top-articles', []);
    return (
        <ol>
            {posts.length !== 0 ? posts.map((post: Article, index: number) =>
                <li key={index}>
                    <BlogPost {...post}/>
                </li>
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
    const posts: Article[] = useFetchData(`/user/${user.id}/article`, [], {
        method: HttpMethod.GET,
        headers: {
            "x-access-token": user.token
        }
    });
    return (
        <ul>
            {posts.length !== 0 ? posts.map((post: any, index: number) =>
                <MyBlogPost key={index} {...post}/>
            ) : "Spinner"}
        </ul>
    );
}

const BlogPostDetail = ({id, title, body, date, user, active}: Article) =>
    <div>
        <h3>{title}></h3>
        <p>{user.username}</p>
        <p>{date}</p>
        <p>{body}</p>
    </div>
;

const BlogPost = ({id, title, body, date, user, active}: Article) =>
    <div>
        <h3><Link to={`/article/${id}`}>{title}</Link></h3>
        <p>{body}</p>
        <p>{user.username}</p>
        <p>{date}</p>
    </div>
;

const MyBlogPost = ({id, title, body, date, active, user}: Article) =>
    <div>
        <h3><Link to={`/article/${id}`}>{title}</Link></h3>
        <p>{body}</p>
        <p>{user.username}</p>
        <p>{date}</p>
        {!active && <button>Post</button> /* TODO: makes active, sets date, ....*/}
        <button>Delete</button>
    </div>
;