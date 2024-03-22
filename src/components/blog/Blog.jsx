import React from 'react';
import Header from '../aboutus/Header';
import MainBlock from './MainBlock';
import LowerMainBlock from '../aboutus/LowerMainBlock';
import Footer from '../aboutus/Footer';
import Articles from './Articles';

const Blog = () => {
    return (
        <div className='bg-stone-100'>
            <Header/>
            <MainBlock/>
            <Articles/>
            <LowerMainBlock/>
            <Footer/>
        </div>
    );
}

export default Blog;