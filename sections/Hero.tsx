import React from 'react'
import BtnAction from '@/components/BtnAction'

const Hero = () => {
  return (
    <section id="home" className="w-full px-5 bg-background-primary text-text-primary relative bg-hero bg-cover bg-no-repeat bg-center">

        <div className="flex flex-col justify-end py-6 md:py-16 w-full h-dvh max-container">

          <div className="w-full md:w-4/6">
            <p className='text-hero-text-mobile md:text-hero-text mb-4 md:mb-16'>
              Dra.
            </p>

            <h1 className="text-hero-mobile md:text-hero leading-none font-garet text-dark-brown tracking-wider">Camila</h1>
            <h1 className="text-hero-mobile md:text-hero leading-none font-garet text-dark-brown tracking-wider">Neiva</h1>

            <div className="bg-primary py-4">
              <p className="text-subtitle-mobile md:text-subtitle leading-none font-garet">
                Psiquiatra em Macapá - AP
              </p>
            </div>
          </div>

          <div className='flex flex-col md:flex-row items-center md:items-end justify-between'>
            <p className='text-hero-text-mobile md:text-hero-text w-full md:w-5/12 mx-auto md:mx-0'>
              Não se trata de uma consulta, é o primeiro passo da sua jornada de transformação.
            </p>
            <BtnAction styles='mt-5 text-xl md:text-2xl' caption='Agende sua consulta' />
          </div>

        </div>
    </section>
  )
}

export default Hero