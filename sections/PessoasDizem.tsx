import React from 'react'
import Image from 'next/image'
import BtnAction from '@/components/BtnAction'

const PessoasDizem = () => {
  return (
    <section className='px-5 padding-y'>
      <div className='max-container'>
        <div className='flex flex-col items-center text-text-primary'>
          <h1 className='title font-bold text-center'>O que as pessoas dizem sobre mim</h1>
        </div>

        <div className='flex flex-wrap justify-evenly mt-20 gap-5'>
          <div className='md:w-[300px] flex flex-col items-center text-center'>
            <h3 className='text-hero-text font-bold mb-6'>Jackelyne Mendes</h3>

            <p>
              O instituto Amparo é o local onde encontramos acolhimento e assistência em um único lugar, o tratamento com a EMT foi imprescindível para melhorar meu quadro clínico em apenas 03 meses de acompanhamento, sem falar no atendimento totalmente personalizado e individualizado que a Dra Camila Neiva tem com todos os seus pacientes. Indico a clínica de olhos fechados ♥️
            </p>

            <span className='relative w-[150px] h-[70px]'>
              <Image
                src="/assets/stars.png"
                alt="stars"
                layout="fill"
                className="object-contain object-center"
              />
            </span>
          </div>

          <div className='md:w-[300px] flex flex-col items-center text-center'>
            <h3 className='text-hero-text font-bold mb-6'>Gelmires Queiroz</h3>

            <p>
              O instituto Amparo é o local onde encontramos acolhimento e assistência em um único lugar, o tratamento com a EMT foi imprescindível para melhorar meu quadro clínico em apenas 03 meses de acompanhamento, sem falar no atendimento totalmente personalizado e individualizado que a Dra Camila Neiva tem com todos os seus pacientes. Indico a clínica de olhos fechados ♥️
            </p>

            <span className='relative w-[150px] h-[70px]'>
              <Image
                src="/assets/stars.png"
                alt="stars"
                layout="fill"
                className="object-contain object-center"
              />
            </span>
          </div>

          <div className='md:w-[300px] flex flex-col items-center text-center'>
            <h3 className='text-hero-text font-bold mb-6'>Lucas Ribeiro</h3>

            <p>
              O instituto Amparo é o local onde encontramos acolhimento e assistência em um único lugar, o tratamento com a EMT foi imprescindível para melhorar meu quadro clínico em apenas 03 meses de acompanhamento, sem falar no atendimento totalmente personalizado e individualizado que a Dra Camila Neiva tem com todos os seus pacientes. Indico a clínica de olhos fechados ♥️
            </p>

            <span className='relative w-[150px] h-[70px]'>
              <Image
                src="/assets/stars.png"
                alt="stars"
                layout="fill"
                className="object-contain object-center"
              />
            </span>
          </div>
        </div>

        <BtnAction styles='mt-10 lg:ml-auto rounded-full bg-background-primary border-none text-text-section-mobile md:text-text-section' caption='100+ AVALIAÇÕES NO GOOGLE' />
      </div>

    </section>
  )
}

export default PessoasDizem