import React from "react";
import Hero from "./HeroSection";
import Education from "./Education";
import Awards from "./Awards";
import Pricing from "./Pricing";
import Stats from "./Satats";
import OpenAccount from "../OpenAccount";


function HomePage() {
  return (
    <>
      <Hero />
      <Awards />
      <Stats />
      <Pricing />
      <Education />
      <OpenAccount />
    </>
  );
}

export default HomePage;
