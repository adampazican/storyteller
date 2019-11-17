import React, {useContext} from 'react';
import Header from "../components/Header";
import useFetchData from "../hooks/useFetchData";
import {Article, LoggedUser} from "../types";
import {UserContext} from "../context/UserContext";



const LandingArea = () =>
    <div id="landing-area">
        <h2>Perfect place for your stories!</h2>
    </div>
;

const MainContentArea = () =>
    <div id="latest-blogs">
        <div id="blog-posts">
            <BlogPosts/>
        </div>
        <div id="popular-posts">
            <ol>
                <li>
                    <h3>Nazov</h3>
                    <p>Autor</p>
                    <p>Datum</p>
                </li>
            </ol>
            <footer>
                Copyright &copy; 2019 Storyteller. All rights reserved;
            </footer>
        </div>
    </div>
;

function BlogPosts() {
    const posts: Article[] = useFetchData('/');
    return (
        <ul>
            {posts.length !== 0 ? posts.map((post: any) =>
                <li>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                    <p>Autor ToDO {/*TODO:*/}</p>
                    <p>{post.date}</p>
                </li>
            ) : "Spinner"}
        </ul>
    );
}

export default () =>
        <div className="App">
            <Header/>
            <LandingArea/>
            <MainContentArea/>
        </div>
;
