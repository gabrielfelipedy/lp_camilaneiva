import React from 'react'
import Image from 'next/image'

const QuemSouEu = () => {
  return (
    <section className="bg-background-quarternary px-5 padding-y font-garet">
      <div className="max-container">
        
        <h1 className='title font-bold mb-20'>Quem sou eu</h1>
        
        <div className='flex justify-between flex-col-reverse lg:flex-row items-center gap-10'>

        <div className="relative w-full h-[500px] md:w-[450px] md:h-[650px] mt-5">
          <Image
            src="/assets/quem_sou_eu.webp"
            alt="quem_sou_eu"
            layout="fill"
            className="object-cover object-center rounded-tl-[200px] rounded-br-[200px] rounded-tr-[100px] rounded-bl-[100px]"
          />
        </div>
        

        <div className="lg:w-7/12 space-y-6">
          
            <p className="text-hero-text text-justify mt-3">
              Tenho 39 anos, sou goiana de coração, médica formada pela Universidade Federal do Amapá. Cursei pós-graduação em Psiquiatria pelo Albert Einstein do RJ e Psiquiatria Intervencionista pelo HC-USP. Além disso, fiz Enfermagem e Mestrado pela UNICAMP. Trabalho desde 2019 ajudando pessoas a encontrar equilíbrio e tranquilidade emocional. Prezo pelo atendimento responsável e humanizado e será uma grande satisfação atender você e poder te ajudar também.

            </p>
          
        </div>

        </div>

      </div>
    </section>
  )
}

export default QuemSouEu