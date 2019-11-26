import React from 'react';
import Header from "../components/Header";
import {RecentArticles, TopArticles} from "../components/Articles";
import LandingArea from "../components/LandingArea";

const MainContentArea = () =>
    <div id="latest-blogs">
        <div id="blog-posts">
            <RecentArticles/>
        </div>
        <div id="popular-posts">
            <TopArticles/>
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
