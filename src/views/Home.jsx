import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import OurCustomers from "../components/OurCustomers";
import HowItWorks from "../components/HowItWorks";
import FAQs from "../components/FAQs";
import Footer from "../components/Footer";
import WhatOurCustomersLove from "../components/WhatOurCustomersLove";
import Benefits from "../components/Benefits";
import Pricing from "../components/Pricing";
import FooterBanner from "../components/FooterBanner";
import FooterImpLInks from "../components/FooterImpLInks";

const Home = () => {
  return (
    <div className="pt-[70px] lg:pt-[100px] overflow-x-hidden ">
      <Header />
      <Hero />
      <OurCustomers />
      <HowItWorks />
      <WhatOurCustomersLove />
      <Benefits />
      <Pricing />
      <FAQs />
      <FooterBanner />
      <FooterImpLInks />
      <Footer />
    </div>
  );
};

export default Home;
