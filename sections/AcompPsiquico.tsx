import React from 'react'
import Image from 'next/image'

const AcompPsiquico = () => {
  return (
    <section className="bg-background-secondary text-text-secondary px-5 padding-y font-garet">
      <div className="max-container">
        
        <div className='flex justify-between flex-col-reverse lg:flex-row items-center gap-10'>

        <div className="relative w-full h-[450px] md:w-[450px] md:h-[550px] mt-5">
          <Image
            src="/assets/acomp_psiquico.webp"
            alt="acomp_psiquico"
            layout="fill"
            className="object-cover object-center rounded-3xl scale-x-[-1]"
          />
        </div>
        

        <div className="lg:w-7/12 space-y-6">
          
            <p className="big-text text-justify">
            O acompanhamento psiquiátrico é uma das ferramentas do tratamento do sofrimento mental.</p> 

            <p className='big-text text-justify'>Assim como o corpo, nossa mente também precisa de atenção.</p> 

            <p className='big-text text-justify'>Agende sua consulta e juntos encontraremos o melhor plano de cuidados para você.</p>
          
        </div>

        </div>

      </div>
    </section>
  )
}

export default AcompPsiquico