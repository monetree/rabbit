import React from "react";
import Header from "../Header";
import MainBlock from "./MainBlock";
import Footer from "../Footer";
import Content from "./Content";
import Cta from "../Cta";

const TermsAndConditions = () => {
  return (
    <div className="bg-stone-100">
      <Header />
      <MainBlock />
      <Content />
      <Cta />
      <Footer />
    </div>
  );
};

export default TermsAndConditions;
