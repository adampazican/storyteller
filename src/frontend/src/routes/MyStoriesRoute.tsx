import React from 'react';
import Header from "../components/Header";
import LandingArea from "../components/LandingArea";
import {MyArticles} from "../components/Articles";
import Footer from '../components/Footer';

export default () => {
    return (
        <div className="MyStories App">
            <Header/>
            <LandingArea/>
            <div>
                <MyArticles/>
            </div>
            <Footer />
        </div>
    );
};