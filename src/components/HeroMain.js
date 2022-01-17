import { Container } from "@mui/material";
import React from "react";
import MiniHero from "./Sub/MiniHero";
import HeroItem from "./Sub/HeroItem";

const HeroMain = () => {
  return (
    <div>
      <MiniHero />
      <HeroItem />
    </div>
  );
};

export default HeroMain;
