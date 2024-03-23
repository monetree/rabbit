import "bootstrap-icons/font/bootstrap-icons.css";
import Home from "./components/Home";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import Aboutus from "./components/aboutus/Aboutus";
import Blog from "./components/blog/Blog";
import Article from "./components/article/Article";
import PrivacyPolicy from "./components/privacy/PrivacyPolicy";
import TermsAndConditions from "./components/terms/TermsAndConditions";
import Support from "./components/support/Support";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<Aboutus />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/article" element={<Article />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/support" element={<Support />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
