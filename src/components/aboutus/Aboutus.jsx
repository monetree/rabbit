import React from "react";
import Header from "../Header";
import MainBlock from "./MainBlock";
import OurPartners from "./OurPartners";
import Benefits from "../Benefits";
import OurPartnersBottom from "./OurPartnersBottom";
import OurTeems from "./OurTeems";
import Reviews from "../Reviews";
import Footer from "../Footer";
import Cta from "../Cta";

const Aboutus = () => {
  return (
    <div>
      <MainBlock />
      <OurPartners />
      <Benefits />
      <OurPartnersBottom />
      <OurTeems />
      <Reviews />
      <Cta />
      <Footer />
    </div>
  );
};

export default Aboutus;
