import React from "react";
import Header from "../Header";
import MainBlock from "./MainBlock";
import Footer from "../Footer";
import Content from "./Content";
import RecommendedArticles from "./RecommendedArticles";
import Cta from "../Cta";

const Article = () => {
  return (
    <div className="bg-stone-100">
      <MainBlock />
      <Content />
      <RecommendedArticles />
      <Cta />
      <Footer />
    </div>
  );
};

export default Article;
