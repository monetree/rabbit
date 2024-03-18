import "./App.css";
import HeroSection from "./components/HeroSection";
import Header from "./components/Header";
import HowItWorks from "./components/HowItWorks";
import OurPartners from "./components/OurPartners";
import WhatOurCustomerSays from "./components/WhatOurCustomerSays";
import Benefits from "./components/Benefits";
import Pricing from "./components/Pricing";
import ExploreByCat from "./components/ExploreByCat";
// import Faqs from "./components/Faqs";
import Cta from "./components/Cta";
import Footer from "./components/Footer";
import "bootstrap-icons/font/bootstrap-icons.css";
function App() {
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
      {/* <Faqs /> */}
      <Cta />
      <Footer />
    </div>
  );
}

export default App;
