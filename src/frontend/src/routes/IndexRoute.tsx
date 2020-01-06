import React from 'react';
import Header from "../components/Header";
import {RecentArticles, TopArticles} from "../components/Articles";
import LandingArea from "../components/LandingArea";
import Footer from '../components/Footer';

const MainContentArea = () =>
    <div id="latest-blogs">
        <div id="blog-posts">
            <RecentArticles/>
            <Footer />
        </div>
        <div id="popular-posts">
            <TopArticles/>
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
