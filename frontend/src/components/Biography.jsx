import React from 'react'

const Biography = ({ imageUrl }) => {
    return (
        <div className='container biography'>
            <div className='banner'>
                <img src={imageUrl} alt="aboutImg" />
                </div>

                <div className='banner'>
                    <p>Biography</p>
                    <h3>Who we Are</h3>
                    <p>
                        Promover a saúde e o bem-estar das populações que servimos, prestando os melhores
                        cuidados e agindo com elevados níveis de eficiência, visando dar um contributo duradouro
                        para a sustentabilidade do sistema de saúde e a coesão social.
                    </p>
                    <p>
                        A missão partilhada de todos aqueles que trabalham nas unidades da Luz Saúde consubstancia-se na
                        forma como aplicam diariamente as melhores práticas para alcançar resultados de excelência.
                    </p>
                    <p>
                        Casa da  saude  O compromisso é absoluto e inequívoco: garantir o melhor diagnóstico e
                        tratamento médico que o talento, a inovação e a dedicação podem proporcionar.
                    </p>
                </div>
          
        </div>
    )
}

export default Biography