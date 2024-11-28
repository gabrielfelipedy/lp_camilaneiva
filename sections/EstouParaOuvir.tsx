import React from 'react'
import Image from 'next/image'

const EstouParaOuvir = () => {
  return (
    <section className="bg-background-primary px-5 padding-y font-garet">
      <div className="max-container flex justify-between flex-col-reverse lg:flex-row items-center gap-10">
        <div className="relative w-full h-[400px] md:w-[400px] md:h-[450px] mt-5">
          <Image
            src="/assets/estou_para_ouvir.webp"
            alt="diferenciais"
            layout="fill"
            className="object-cover object-center md:rounded-tl-[150px] scale-x-[-1]"
          />
        </div>

        <div className="lg:w-6/12 space-y-6">
          
            <p className="big-text text-justify mt-3">
              Estou aqui para ouvir suas preocupações e junto com você buscar maneiras de melhorar sua saúde mental e reencontrar sua paz e bem-estar. 
            </p>
          
            <p className="big-text text-justify mt-3">
              Vamos juntos definir o melhor plano de tratamento para você, seja ele com terapia, mudanças no estilo de vida, medicamentos ou uma combinação deles.
            </p>
        
        </div>

      </div>
    </section>
  )
}

export default EstouParaOuvir