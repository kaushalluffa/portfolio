import React from "react";
import Hero from "../Hero/Hero";
import Work from "../Work/Work";
import About from "../About/About";

const Main = ({ developerData }) => {
  return (
    <>
      <Hero developerData={developerData} />
      <Work />
    </>
  );
};

export default Main;
