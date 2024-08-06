import React from 'react'

const Hero = ({title,imageUrl}) => {
  return (
    <div className='hero container'>
        <div className='banner'>
            <h3>{title}</h3>
            <p className= "text-xs">
             Casa Da Saude Medical Institute é uma instalação de última geração dedicada
            para fornecer serviços de saúde abrangentes com compaixão e
            perícia. Nossa equipe de profissionais qualificados está comprometida em
            proporcionando atendimento personalizado e adaptado às necessidades de cada paciente. No
            ZeeCare, priorizamos o seu bem-estar, garantindo um ambiente harmonioso
            jornada em direção à saúde e ao bem-estar ideais.
            </p>

        </div>
        <div className='banner'>
            <img src={imageUrl} alt="hero" className='animated-image' />
            <span>
                <img src="/vector.png" alt="vector" />
            </span>
        </div>
    </div>
  )
}

export default Hero