import React from 'react';
import Header from './Header';
import MainBlock from './MainBlock';
import OurPartners from './OurPartners';
import Benefits from './Benefits';
import OurPartnersBottom from './OurPartnersBottom';
import OurTeems from './OurTeems';
import Reviews from './Reviews';
import LowerMainBlock from './LowerMainBlock';
import Footer from './Footer';


const Aboutus=()=>{
    return (
        <div>
            <Header />
            <MainBlock />
            <OurPartners/>
            <Benefits/>
            <OurPartnersBottom/>
            <OurTeems/>
            <Reviews/>
            <LowerMainBlock/>
            <Footer/>
        </div>
    );
}

export default Aboutus;