import React from 'react'
import AppointmentForm from '../components/AppointmentForm'
import Hero from '../components/Hero'

const Appointment = () => {
  return (
    
    <>
    <Hero title={"Schedule your appointment | Casa Da Saude"}
    imageUrl={"/signin.jpg"}/>
    <AppointmentForm/>
    </>
  )
}

export default Appointment