import React, {useEffect, useState} from 'react';
import Header from "../components/Header";

type Article = {
    id: Number
    userId: Number
    date: Date
    title: String
    body: String
}

export default function () {
    const [posts, setPosts] = useState([] as Article[]);
    useEffect(() => {
        (async function () {
            const data = await fetch('/api/v1/');
            const newPosts: Article[] = await data.json();
            setPosts(newPosts);
        })();
    }, []);
    return (
        <div>
            <Header />
            <div id="landing-area">
                <h2>Perfect place for your stories!</h2>
            </div>
            <div id="latest-blogs">
                <div id="blog-posts">
                    <ul>
                        {posts.length != 0 ? posts.map((post: any) =>
                            <li>
                                <h3>{post.title}</h3>
                                <p>{post.body}</p>
                                <p>Autor ToDO {/*TODO:*/}</p>
                                <p>{post.date}</p>
                            </li>
                        ) : "Spinner"}
                    </ul>
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
        </div>
    );
}