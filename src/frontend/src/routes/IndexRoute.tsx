import React from 'react';
import Header from "../components/Header";
import {RecentArticles} from "../components/Articles";
import LandingArea from "../components/LandingArea";

const MainContentArea = () =>
    <div id="latest-blogs">
        <div id="blog-posts">
            <RecentArticles/>
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



export default () =>
    <div className="App">
        <Header/>
        <LandingArea/>
        <MainContentArea/>
    </div>
;
