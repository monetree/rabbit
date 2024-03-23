import React from "react";
import Header from "../Header";
import MainBlock from "./MainBlock";
import Footer from "../Footer";
import Articles from "./Articles";
import Cta from "../Cta";

const Blog = () => {
  return (
    <div className="bg-stone-100">
      <Header />
      <MainBlock />
      <Articles />
      <Cta />
      <Footer />
    </div>
  );
};

export default Blog;
