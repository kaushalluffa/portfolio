import React from 'react'
import Hero from '../Hero/Hero'
import Work from '../Work/Work'
import About from '../About/About'

const Main = ({ projects,urlFor }) => {
  return (
    <>
      <Hero />
      <Work projects={projects} urlFor={urlFor}/>
      <About />
    </>
  );
};

export default Main