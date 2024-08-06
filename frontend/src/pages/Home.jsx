import React from 'react'
import Hero from "../components/Hero"
import Biography from "../components/Biography"
import Departments from "../components/Departments"
import MessageForm from "../components/MessageForm"


const Home = () => {
  return (
    <>
      <Hero title={"Bem vindo ao Hospital Casa Da Saúde | Cuidemo-nos antes que seja tarde!!!"} imageUrl={"/doctor.png"} />
      <Biography imageUrl={"/about.png"} />
      <Departments  />
      <MessageForm />
    </>
  )
}

export default Home