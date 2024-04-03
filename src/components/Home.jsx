import React from "react";
import HeroSection from "./HeroSection";
import HowItWorks from "./HowItWorks";
import OurPartners from "./OurPartners";
import Benefits from "./Benefits";
import Pricing from "./Pricing";
import ExploreByCat from "./ExploreByCat";
import Faqs from "./Faqs";
import Cta from "./Cta";
import Footer from "./Footer";
import Reviews from "./Reviews";

const Home = ({ createNewWaitlist }) => {
  return (
    <div>
      <HeroSection createNewWaitlist={createNewWaitlist} />
      <OurPartners />
      <HowItWorks />
      <Reviews />

      <Benefits />
      <Pricing createNewWaitlist={createNewWaitlist} />
      <ExploreByCat />
      <Faqs />
      <Cta createNewWaitlist={createNewWaitlist} />
      <Footer />
    </div>
  );
};

export default Home;
