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
    const [post] = useFetchData(`/article/${id}`, null, fetchParams);
    return (
        <div className="ArticleDetail">
            {post == null ? "Spinner" : <BlogPostDetail {...post}/>}
        </div>
    );
}

export function RecentArticles() {
    const [posts] = useFetchData('/', []);
    return (
        <ul className="list">
            {posts.length !== 0 ? posts.map((post: Article, index: number) =>
                <li key={index}>
                    <Link to={`/article/${post.id}`}>
                        <BlogPost {...post}/>
                    </Link>
                </li>
            ) : "Spinner"}
        </ul>
    );
}

export function TopArticles() {
    const [posts] = useFetchData('/top-articles', []);
    return (
        <ol className="list">
            {posts.length !== 0 ? posts.map((post: Article, index: number) =>
                <li key={index}>
                    <Link to={`/article/${post.id}`}>
                        <BlogPost {...post}/>
                    </Link>
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
    const [posts, setPosts] = useFetchData(`/user/${user.id}/article`, [], {
        method: HttpMethod.GET,
        headers: {
            "x-access-token": user.token
        }
    });

    const [numberOfArticles] = useFetchData(`/article/count`, [], {
        method: HttpMethod.GET,
    });

    const postMethod = async (id: number) => {
        const response = await fetch(`/api/v1/article/${id}/post`, {
            method: HttpMethod.POST,
            headers: {
                "x-access-token": user.token
            }
        });

        if(response.ok) 
        {
            setPosts(posts.map((post: Article) => {
                if(post.id === id) {
                    post.active = true
                }
                return post;
            }));
        }
    };

    const deleteMethod = async (id: number) => {
        const response = await fetch(`/api/v1/article/${id}`, {
            method: HttpMethod.DELETE,
            headers: {
                "x-access-token": user.token
            }
        });

        if(response.ok) 
        {
            setPosts(posts.filter((post: Article) => post.id !== id));
        }
    };

    return (
        <ul>
            {posts.length !== 0 ? posts.map((post: any, index: number) =>
                <MyBlogPost key={index} {...post} user={user} postMethod={postMethod} deleteMethod={deleteMethod} />
            ) : "Spinner"}

            {numberOfArticles > 0 &&
                <div id="paginator">
                    {/** TODO: make button for every page somehow */}
                </div> 
            }
        </ul>
    );
}

const BlogPostDetail = ({id, title, body, date, user, active}: Article) =>
    <div>
        <h3>{title}></h3>
        <p>{user.username}</p>
        <p>{date}</p>
        <p dangerouslySetInnerHTML={{__html: body.replace(/<<([^>>]*)>>/g, "<h4>$1</h4>") }}></p>
    </div>
;

const BlogPost = ({id, title, body, date, user, active}: Article) =>
    <div>
        <h3>{title}</h3>
        <p>{body}</p>
        <p>{user.username}</p>
        <p>{date}</p>
    </div>
;

const MyBlogPost = ({id, title, body, date, active, user, postMethod, deleteMethod}: any) => {
    
    return (
        <div>
            <h3><Link to={`/article/${id}`}>{title}</Link></h3>
            <p>{body}</p>
            <p>{user.username}</p>
            <p>{date}</p>
            {!active && <button onClick={() => postMethod(id)} >Post</button>}
            <button onClick={() => deleteMethod(id)}>Delete</button>
        </div>
    )
};