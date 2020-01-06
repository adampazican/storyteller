import React from 'react';
import Header from '../components/Header'
import LandingArea from '../components/LandingArea';
import {ArticleDetail} from '../components/Articles';
import Footer from '../components/Footer';

export default () => {
    return (
        <div className="ArticleDetailRoute">
            <Header/>
            <LandingArea/>
            <ArticleDetail/>
            <Footer />
        </div>
    );
};