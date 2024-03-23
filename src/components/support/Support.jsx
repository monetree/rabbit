import React from "react";
import Header from "../Header";
import MainBlock from "./MainBlock";
import Footer from "../Footer";
import Faqs from "../Faqs";
import Form from "./Form";
import Cta from "../Cta";

const Support = () => {
  return (
    <div className="bg-stone-100">
      <Header />
      <MainBlock />
      <Faqs />
      <Form />
      <Cta />
      <Footer />
    </div>
  );
};

export default Support;
