import React from 'react'
import BtnAction from '@/components/BtnAction'

const Hero = () => {
  return (
    <section id="home" className="w-full bg-background-primary text-text-primary">

        <div className="relative flex flex-col justify-end py-16 md:py-24 w-full h-dvh p-8 max-container bg-hero bg-cover bg-no-repeat bg-center">

          <div className="w-full md:w-4/6">
            <p className='text-hero-text-mobile md:text-hero-text mb-16'>
              Dra.
            </p>

            <h1 className="text-hero-mobile md:text-hero leading-none font-garet text-dark-brown">Camila</h1>
            <h1 className="text-hero-mobile md:text-hero leading-none font-garet text-dark-brown">Neiva</h1>

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
            <BtnAction styles='mt-5' caption='Agende sua consulta' />
          </div>

        </div>
    </section>
  )
}

export default Hero