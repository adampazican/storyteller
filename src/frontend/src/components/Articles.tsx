import {Article, User} from "../types";
import useFetchData, {HttpMethod} from "../hooks/useFetchData";
import React, {useContext} from "react";
import {UserContext} from "../context/UserContext";
import {useHistory, useParams} from "react-router";
import {Link} from "react-router-dom";
import {ReactComponent as Spinner} from "../spinner.svg";
import Header from "./Header";
import Footer from "./Footer";
import useForm from "../hooks/useForm";

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
            {post == null ? <Spinner /> : <BlogPostDetail {...post}/>}
            <Comments articleId={id} token={user.token}/>
        </div>
    );
}

function Comments({ articleId, token } : any){
    const [comments, setComments] = useFetchData(`/article/${articleId}/comment`, [], {
        method: HttpMethod.GET,
        headers: {
            "x-access-token": token
        }
    });
    const [user] = useContext<[User, any]>(UserContext);
    const {handleSubmit, handleChange, errorMessage} = useForm("/comment", { token: user.token, defaultState: { articleId }, onSuccessCallback: (newComment: Comment) => {
        console.log(newComment);
        setComments([newComment, ...comments]);
    }});

    return (
        <div>
            <ul className="list list-non-clickable">
                {user && <div className="">
                    <form className="f-comment" onSubmit={handleSubmit}>
                        {errorMessage !== "" && <p className="error">{errorMessage}</p>}
                        <textarea className="form-element ta-comment" name="body" placeholder="Write your thoughts about this story" onChange={handleChange}/>
                        <input className="btn" type="submit" value="Send"/>
                    </form>
                </div>}
                {Object.keys(comments).length === 0 ? "No comments" : comments.map((comment: any, index: number) =>
                    <li key={index}>
                        <h3>{comment.username}</h3>
                        <p>{comment.date}</p>
                        <p>{comment.body}</p>
                    </li>
                )}
            </ul>
        </div>
    );
}

export function RecentArticles() {
    const [posts] = useFetchData('/', []);
    return (
        <div>
            <h2>Latest Articles</h2>
        <ul className="list">
            {posts.length !== 0 ? posts.map((post: Article, index: number) =>
                <li key={index}>
                    <Link to={`/article/${post.id}`}>
                        <BlogPost {...post}/>
                    </Link>
                </li>
            ) : <Spinner />}
        </ul>
        </div>
    );
}

export function TopArticles() {
    const [posts] = useFetchData('/top-articles', []);
    return (
        <div>
            <h2>Top Articles</h2>
            <ol className="list">
                {posts.length !== 0 ? posts.map((post: Article, index: number) =>
                    <li key={index}>
                        <Link to={`/article/${post.id}`}>
                            <BlogPost {...post}/>
                        </Link>
                    </li>
                ) : <Spinner />}
            </ol>
        </div>
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

    const postMethod = async (id: Number) => {
        const response = await fetch(`/api/v1/article/${id}/post`, {
            method: HttpMethod.POST,
            headers: {
                'Content-Type': 'application/json',
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

    const deleteMethod = async (id: Number) => {
        const response = await fetch(`/api/v1/article/${id}`, { //TODO: fix on server
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
        <ul className="list">
            {posts.length !== 0 ? posts.map((post: any, index: number) =>
                <li key={index}>
                    <Link to={`/article/${post.id}`}>
                        <BlogPost {...post} user={user} />
                    </Link>
                    <div className="action-buttons">
                        {!post.active && <button className="btn" onClick={() => postMethod(post.id)} >Post</button>}
                        <button className="btn" onClick={() => history.push(`/article/${post.id}/update`)}>Update</button>
                        <button className="btn" onClick={() => deleteMethod(post.id)}>Delete</button>
                    </div>
                </li>
            ) : <Spinner />}

            {numberOfArticles > 0 &&
                <div id="paginator">
                    {/** TODO: make button for every page somehow */}
                </div> 
            }
        </ul>
    );
}

const BlogPostDetail = ({id, title, body, date, user, active}: Article) =>
    <div className="article-detail">
        <h3>{title}></h3>
        <p>{user.username}</p>
        <p>{date}</p>
        <p dangerouslySetInnerHTML={{__html: body.replace(/<<([^>>]*)>>/g, "<h4>$1</h4>")}}/>
    </div>
;

const BlogPost = ({id, title, body, date, user, active}: Article) =>
    <div style={!active && { color: "#9E9E9E"} || {}} >
        <h3>{title}</h3>
        <p>{body}</p>
        <p>{user.username}</p>
        <p>{date}</p>
    </div>
;