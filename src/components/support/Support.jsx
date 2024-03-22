import React from 'react';
import Header from '../aboutus/Header';
import MainBlock from './MainBlock';
import LowerMainBlock from '../aboutus/LowerMainBlock';
import Footer from '../aboutus/Footer';
import Faqs from '../Faqs'
import Form from './Form';

const Support=()=>{
    return (
        <div className='bg-stone-100'>
        <Header/>
        <MainBlock/>
        <Faqs/>
        <Form/>
        <LowerMainBlock/>
        <Footer/>
    </div>
    );
}

export default Support;