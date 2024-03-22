import React from "react";
import HeroSection from "./HeroSection";
import Header from "./Header";
import HowItWorks from "./HowItWorks";
import OurPartners from "./OurPartners";
import WhatOurCustomerSays from "./WhatOurCustomerSays";
import Benefits from "./Benefits";
import Pricing from "./Pricing";
import ExploreByCat from "./ExploreByCat";
import Faqs from "./Faqs";
import Cta from "./Cta";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="pt-16 lg:pt-20">
      <Header />
      <HeroSection />
      <OurPartners />
      <HowItWorks />
      <WhatOurCustomerSays />

      <Benefits />
      <Pricing />
      <ExploreByCat />
      <Faqs />
      <Cta />
      <Footer />
    </div>
  );
};

export default Home;
