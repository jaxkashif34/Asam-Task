import HeroMain from "components/HeroMain";
import React from "react";
import ResponsiveAppBar from "../components/Nav";
import Section from "components/Section";
import TrustedUers from "components/TrustedUers";
import Premium from "components/Premium";
import Footer from "components/Footer";

const Home = () => {
  return (
    <div>
      <ResponsiveAppBar />
      <HeroMain />
      <Section />
      <TrustedUers />
      <Premium />
      <Footer />
    </div>
  );
};

export default Home;
