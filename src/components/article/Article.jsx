import React from 'react';
import Header from '../aboutus/Header';
import MainBlock from './MainBlock';
import LowerMainBlock from '../aboutus/LowerMainBlock';
import Footer from '../aboutus/Footer';
import Content from './Content';
import RecommendedArticles from './RecommendedArticles';

const Article=()=>{
    return (
        <div className='bg-stone-100'>
            <Header/>
            <MainBlock/>
            <Content/>
            <RecommendedArticles/>
            <LowerMainBlock/>
            <Footer/>
        </div>
    );
}

export default Article;