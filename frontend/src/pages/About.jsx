import React from 'react'
import Hero from "../components/Hero"
import Biography from "../components/Biography"

const About = () => {
  return (
   <>
   <Hero title={"Learn more about us | Casa Saude Hospital"}
   imageUrl={"/about.png"}/>
   
   <Biography imageUrl={"/whoarewe.png"}/>
   </>
  )
}

export default About