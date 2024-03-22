import React from 'react';
import Header from '../aboutus/Header';
import MainBlock from './MainBlock';
import LowerMainBlock from '../aboutus/LowerMainBlock';
import Footer from '../aboutus/Footer';
import Content from './Content';

const PrivacyPolicy=()=>{
    return (
        <div className='bg-stone-100'>
            <Header/>
            <MainBlock/>
            <Content/>
            <LowerMainBlock/>
            <Footer/>
        </div>
    );
}

export default PrivacyPolicy;